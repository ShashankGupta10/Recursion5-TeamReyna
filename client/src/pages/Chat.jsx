import axios from "axios";
import { useEffect, useState, useRef } from "react";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [uploadbtn, showUploadbtn] = useState(false);
  const [openmodal, setOpenmodal] = useState(false);
  const [link, setLink] = useState("");

  const fileInput = useRef(null);

  useEffect(() => {
    const inputElement = document.getElementById("TextField");
    if (inputElement) {
      inputElement.focus();
    }
    setMessages([
      {
        message: "hello",
        user: "",
        audio: "",
      },
    ]);
  }, []);

  const handleSend = () => {
    if (message != "") {
      console.log(message);
      const obj = {
        message: message,
        user: localStorage.getItem("email") || "",
      };

      const obj1 = {
        message:
          "Thank you for the prompt. Given that you intend to visit India, I've compiled a list of recommended cuisines and destinations throughout the country. Let's begin with the culinary delights India has to offer, starting with its diverse range of cuisines:\n\n1. Punjabi Cuisine - Famous for tandoori dishes, buttery sabjis, and flavorful biryanis, it's a must-try when visiting northern India. \n\n2. Gujarati Cuisine - This cuisine is known for its vegetarian dishes, such as homemade pickles, spicy shaak (vegetable dishes), and delicious chaats. \n\n3. Tamil Nadu Cuisine - Providing a more southern taste, dishes involve a blend of spices with a heightened use of tamarind and coconut. From aromatic filter coffee to savory meals like Idly and Dosa, accompanied by spicy gravies known as 'curries,' you're in for a treat. \n\n4. Hyderabadi Cuisine - Offering a unique blend of Mughal and Telugu traditions, you'll discover mouth-watering dishes like the famed Hyderabadi Biryani and the aromatic Haleem. \n\nNow, let's explore some destinations across India. Remember that India is a vast country, so I've narrowed the list to highlights, including the",
        user: "AI",
        audio:
          "https://file01.fpt.ai/text2speech-v5/short/2024-03-13/d625a0570a14281837aca340711ebf3e.mp3",
        isPlay: "false",
      };
      setMessages([...messages, obj, obj1]);
      setMessage("");
    } else alert("Please enter a valid message");
  };

  // const handleSubmit

  const handleImageAndLink = () => {
    if (fileInput.current && fileInput.current.files[0]) {
      const image = fileInput.current.files[0];
      console.log("Image saved:", image);
      uploadImage(fileInput.current.files[0]);
    }

    if (link) {
      console.log("Link saved:", link);
    }
  };
  const uploadImage = async (file) => {
    const formData = new FormData();
    let fileType = file.type.split("/")[1];

    formData.append("file", file, `photo.${fileType}`);
    formData.append("upload_preset", "medicure");

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/deohymauz/image/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setLink(response.data.secure_url);
      console.log(response.data.secure_url);

      const messageFromBackend = await axios.post(
        "http://127.0.0.1:5000/get_data_from_url",
        {
          image: response.data.secure_url,
        }
      );
      setMessages([
        ...messages,
        { message: messageFromBackend.data, user: "AI", audio: "" },
      ]);
    } catch (e) {
      console.log(e);
    }
  };
  const handleInputChange = (e) => {
    setLink(e.target.value);
    console.log(link);
  };

  const handleOpenUpload = () => {
    showUploadbtn(true);
    setOpenmodal(true);
  };

  const handleCloseUpload = () => {
    showUploadbtn(false);
    setOpenmodal(false);
  };

  const triggerFileInput = () => {
    fileInput.current.click();
  };
  const playAudio = (audioUrl) => {

    const audio = new Audio(audioUrl);
    audio.onended = () => {
    
    };
    audio.play();
  };
  return (
    <div>
      {/* <div className="sticky top-0 z-50 border-b border-gray-300 bg-white py-5 px-8 text-left text-sm text-gray-800">
        <h4 className="inline-block py-1 text-left font-sans font-semibold normal-case">
          Jatin Aristotle
        </h4>
      </div> */}
      <div className="flex-grow px-8 pt-8 pb-16 text-left text-gray-700">
        <div className="relative mb-6 text-center">
          <span className="relative bg-white px-2 text-sm font-medium text-gray-600">
            {new Date().toDateString()}
          </span>
        </div>
        {messages.map((msg, index) =>
          msg.user === localStorage.getItem("email") ? (
            <div className="relative mb-6 text-left" key={index}>
              <div className="text-gray-700">
                <div className="relative float-right sm:inline-block rounded-md bg-blue-700 py-3 px-4 text-white">
                  <p className="text-sm text-white font-bold">{msg.user}</p>
                  <p className="text-sm">{msg.message}</p>
                </div>
              </div>
              <div className="clear-both flex text-gray-700"></div>
            </div>
          ) : (
            <div className="relative max-w-[70%] mb-6 text-left" key={index}>
              <div className="text-gray-700">
                <div className="relative float-left sm:inline-block rounded-md bg-gray-200 py-3 px-4">
                  <p className="text-sm text-indigo-600 font-bold">{"AI"}</p>
                  <p className="text-sm">{msg.message}</p>
                  {msg.audio !== "" && (
                    <button
                      id={index}
                      onClick={() => {
                        msg.isPlay = true;
                        playAudio(msg.audio);
                      }}
                      className=" flex flex-row text-sm mt-2  px-3 py-1 rounded-xl  border-2 text-indigo-600 border-indigo-600"
                    >
                      {msg.isPlay ? (
                        <>
                          <svg
                            className="w-5 h-5 text-indigo-600"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M8 18V6l8 6-8 6Z"
                            />
                          </svg>
                          <span>Play</span>
                        </>
                      ) : (
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-2 h-2 rounded-full animate-pulse bg-indigo-600"></div>
                          <div className="w-2 h-2 rounded-full animate-pulse bg-indigo-600"></div>
                          <div className="w-2 h-2 rounded-full animate-pulse bg-indigo-600"></div>
                        </div>
                      )}
                    </button>
                  )}
                </div>
              </div>
              <div className="clear-both flex text-gray-700"></div>
            </div>
          )
        )}

        <div className="fixed bottom-0 left-0 right-0 mt-4 flex items-center sm:p-8 py-4 text-left text-gray-700 gap-8">
          <div
            className=" cursor-pointer"
            onClick={openmodal ? handleCloseUpload : handleOpenUpload}
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="black"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                d="M12 5v9m-5 0H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2M8 9l4-5 4 5m1 8h.01"
              />
            </svg>
          </div>
          {uploadbtn && (
            <div className="absolute bottom-24 left-[.5%] flex justify-center gap-4 items-center bg-gray-200 p-4 rounded-lg">
              <div className=" cursor-pointer" onClick={triggerFileInput}>
                <input
                  type="file"
                  accept=".png, .jpeg, .jpg"
                  className="hidden"
                  ref={fileInput}
                />
                <svg
                  className="w-6 h-6 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M16 18H8l2.5-6 2 4 1.5-2 2 4Zm-1-8.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
                  />
                  <path
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 3v4a1 1 0 0 1-1 1H5m14-4v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1ZM8 18h8l-2-4-1.5 2-2-4L8 18Zm7-8.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
                  />
                </svg>
              </div>
              <div className="font-bold text-center">OR</div>
              <div className="flex gap-2 justify-center items-center">
                <label className="w-36">Enter Link</label>
                <input
                  type="text"
                  onChange={handleInputChange}
                  className="w-full p-2 text-gray-500 outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <button
                  className="relative inline-flex py-1 w-auto flex-initial cursor-pointer items-center justify-center self-center rounded-md bg-blue-700 px-6 text-center align-middle text-sm font-medium text-white outline-none focus:ring-2"
                  onClick={handleImageAndLink}
                >
                  Upload
                </button>
              </div>
            </div>
          )}
          <input
            placeholder="Your Message"
            id="TextField"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          ></input>
          <button
            type="submit"
            className="relative inline-flex h-10 w-auto flex-initial cursor-pointer items-center justify-center self-center rounded-md bg-blue-700 px-6 text-center align-middle text-sm font-medium text-white outline-none focus:ring-2"
            onClick={handleSend}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

// Move the export statement outside of the function component
export default Chat;
