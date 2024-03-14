import os
from flask_pymongo import PyMongo
from flask import Flask, jsonify, request, send_file
from flask_cors import CORS
from dotenv import load_dotenv, find_dotenv
import requests
from langchain.llms.cohere import Cohere
from langchain.chat_models.cohere import ChatCohere
from openai import OpenAI
load_dotenv(find_dotenv())
client = OpenAI(api_key=os.environ['OPENAI_API_KEY'])


app = Flask(__name__)

app.config['MONGO_URI'] = os.environ['MONGO_URI']
CORS(app)
db = PyMongo(app).db
llm = Cohere(cohere_api_key=os.environ['COHERE_API_KEY'])
chat_llm = ChatCohere(cohere_api_key=os.environ['COHERE_API_KEY'])


@app.route('/', methods=['GET', 'POST'])
def application():
    return '<center style="height: 100dvh"><h1>Backend Link</h1></center>'


@app.route('/register', methods=['POST', 'GET'])
def register():
    payload = request.get_json()
    print(payload)
    user = db.users.find_one({'email': payload['email']})
    if user is None:
        db.users.insert_one({
            'name': payload['name'],
            'email': payload['email'],
            'password': payload['password']
        })
        return jsonify({'output': True})
    return jsonify({'output': False, 'message': 'EmailId already registered'})


@app.route('/login', methods=['POST', 'GET'])
def login():
    payload = request.get_json()
    user = db.users.find_one({'email': payload['email']})
    if user is not None:
        if user['password'] == payload['password']:
            # print(user)
            return jsonify({'output': True, 'message': "Login successful", 'name': user['name']})
        return jsonify({'output': False, 'message': "Incorrect password"})
    return jsonify({'output': False, 'message': 'No such user found'})


@app.route('/get_data_from_url', methods=['POST'])
def get_data_from_url():
    image = request.get_json()["image"]
    url = "https://picarta.ai/classify"
    api_token = "EKKO8R3GUHA81XJYJMDG"
    headers = {"Content-Type": "application/json"}

    # Process image based on input type (file or URL)
    if image:
        payload = {"TOKEN": api_token, "IMAGE": image}
        response = requests.post(url, headers=headers, json=payload)
        print(response.json)
        # Process API response
        if response.status_code == 200:
            result = response.json()
            print(result)
            # pass it to LLM to give a better output and suggestions to travel in the place
            answer = llm.predict(f"Firstly tell the user which area they are searching according to the image they uploaded. The country is {result['ai_country']}. "
                                 f"Suggest destinations and cuisines to the user for the country: {result['ai_country']}. "
                                 f"The user is planning on travelling to this country. "
                                 f"Your job is to be a travel guide and suggest places to visit and cuisines to try. "
                                 f"The user is interested to visit {result['city'] if result['city'] else 'some city in the country'} and {result['province'] if result['province'] else 'some province in the country'}.")

            return jsonify(answer)
        else:
            print("Request failed with status code:", response.status_code)
            return jsonify({'output': 'Request failed with status code: ' + str(response.status_code)})
    else:
        return jsonify({'output': 'No image provided'})


@app.route('/tts', methods=['POST'])
def text_to_speech():
    speech_file_path = "static/speech.mp3"
    response = client.audio.speech.create(
        model="tts-1",
        voice="alloy",
        input=request.get_json()['text']
    )

    response.stream_to_file(speech_file_path)
    print(speech_file_path)
    return jsonify({'output': True, 'file_path': speech_file_path})


@app.route('/chat', methods=['POST'])
def chat():
    messages = request.get_json()["messages"]
    print(messages)
    messages[len(
        messages) - 1]['content'] = f"{messages[len(messages) - 1]['content']}. This is the prompt from the user. Return the output in plain text in non markdown format."

    response = client.chat.completions.create(
        model="gpt-3.5-turbo-0125",
        response_format={"type": "text"},
        messages=messages
    )
    print(response.choices[0].message.content)
    return jsonify(response.choices[0].message.content)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
