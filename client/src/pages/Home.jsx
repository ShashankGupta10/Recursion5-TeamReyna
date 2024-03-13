import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-r from-[#020D41] to-[#1F1979] ">
      {/* <div className="flex flex-col min-h-screen"> */}
        {/* <main className="flex-1 m-2 bg-white"> */}
          {/* <div className="justify-around w-full py-2 md:py-24 lg:py-32 xl:py-48"> */}
            <div className="container gap-5 p-10 mt-2 bg-gray-100 flex flex-row mx-auto md:px-6 w-full">

              <div className="flex w-2/4 flex-col justify-center items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-[#1F1979] text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Welcome to Travel Planner
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl ">
                    Discover with Your Lens, Explore with Your Voice:<br></br>{" "}
                    The Future of Travel Planning Unveiled.
                  </p>
                </div>
                <div className="space-x-4">
                  <button
                    className="inline-flex h-9 text-white items-center justify-center rounded-md bg-[#1F1979] px-4 py-2 text-sm font-medium shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 "
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    Get Started <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                                </svg>
                  </button> 
                </div>
              </div>
              <div className="w-2/4 flex-none mt-14 md:mt-0 md:max-w-xl">
                        <img
                            src="image2.png"
                            className=" md:rounded-tl-[108px] h-full w-full"
                            alt=""
                        />
                    </div>


            </div>
          {/* </div> */}
        {/* </main> */}
      {/* </div> */}

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold text-[#1F1979] tracking-tighter sm:text-4xl md:text-5xl">
              Speak Your Destination, Hear Your Journey: Travel Planning
              Reimagined.
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
              Unlock Academic Excitement: Navigate Your Learning Journey with
              Cutting-Edge Guidance and Multimodal Interactions.
            </p>
          </div>
          <div className="flex space-x-4 lg:justify-end">
            <a
              className="inline-flex h-10 items-center justify-center rounded-md bg-[#1F1979] px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-[#1f1979b0] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 "
              href="#"
            >
              Contact Sales
            </a>
            <a
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 "
              href="#"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>
      <section className="w-full py-12 ">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 items-center">
            <div className="flex flex-col justify-center space-y-8 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">
                  Embark on Seamless Journeys
                </h1>
                <p className="max-w-[600px] text-white md:text-xl block mx-auto">
                  Explore the next frontier in travel planning with our six
                  innovative features, designed to make your adventures
                  extraordinary.
                </p>
              </div>
              <div className="w-full max-w-full space-y-4 mx-auto">
                <div className="grid grid-cols-3 gap-8">
                  <div className="flex flex-col items-center space-y-2  p-4 rounded-lg">
                    <div className="p-2  rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white h-6 w-6 mb-2 opacity-75"
                      >
                        <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                        <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                      </svg>
                    </div>
                    <h2 className="text-xl font-bold text-white">
                      Visual Destination Recognition
                    </h2>
                    <p className="text-white">
                      Instantly identify travel destinations from your uploaded
                      photos, making planning as easy as capturing moments.
                    </p>
                  </div>
                  <div className="flex flex-col items-center space-y-2  p-4 rounded-lg">
                    <div className="p-2  rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white h-6 w-6 mb-2 opacity-75"
                      >
                        <path d="m8 6 4-4 4 4"></path>
                        <path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22"></path>
                        <path d="m20 22-5-5"></path>
                      </svg>
                    </div>
                    <h2 className="text-xl font-bold text-white">
                      Conversational Inquiry
                    </h2>
                    <p className="text-white">
                      Ask questions about your destinations using natural
                      language, receiving personalized and informative
                      responses.
                    </p>
                  </div>
                  <div className="flex flex-col items-center space-y-2  p-4 rounded-lg">
                    <div className="p-2  rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white h-6 w-6 mb-2 opacity-75"
                      >
                        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    </div>
                    <h2 className="text-xl font-bold text-white">
                      Spoken Recommendations
                    </h2>
                    <p className="text-white">
                      Receive spoken recommendations based on your preferences
                      and questions, bringing your travel plans to life.
                    </p>
                  </div>
                  <div className="flex flex-col items-center space-y-2  p-4 rounded-lg">
                    <div className="p-2  rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white h-6 w-6 mb-2 opacity-75"
                      >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                      </svg>
                    </div>
                    <h2 className="text-xl font-bold text-white">
                      Powerful Search
                    </h2>
                    <p className="text-white">
                      Our Powerful Search feature allows you to find any mentor
                      according to your needs. Any mentor can be found by
                      searching their name, location, or expertise.
                    </p>
                  </div>
                  <div className="flex flex-col items-center space-y-2  p-4 rounded-lg">
                    <div className="p-2  rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white h-6 w-6 mb-2 opacity-75"
                      >
                        <rect
                          width="18"
                          height="11"
                          x="3"
                          y="11"
                          rx="2"
                          ry="2"
                        ></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      </svg>
                    </div>
                    <h2 className="text-xl font-bold text-white">
                      Reliable Security
                    </h2>
                    <p className="text-white">
                      With Reliable Security, your data is always safe and
                      protected.
                    </p>
                  </div>
                  <div className="flex flex-col items-center space-y-2  p-4 rounded-lg">
                    <div className="p-2  rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white h-6 w-6 mb-2 opacity-75"
                      >
                        <path d="m8 6 4-4 4 4"></path>
                        <path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22"></path>
                        <path d="m20 22-5-5"></path>
                      </svg>
                    </div>
                    <h2 className="text-xl font-bold text-white">
                      Community Building
                    </h2>
                    <p className="text-white ">
                      Enhance the community section to foster a supportive and
                      engaging environment. Implement features like discussion
                      forums, interest-based groups, and a mentor/mentee
                      showcase to encourage networking and collaboration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="w-full py-12 md:py-24 lg:py-32"> */}
        <div className="container grid py-24 items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10  bg-gray-100  text-[#1F1979]">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Meet our Customers
            </h2>
            <p className="mx-auto max-w-[700px]  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
              Trusted by the best mentors in the world. We help mentees of all
              the ages and backgrounds.
            </p>
          </div>
          <div className="divide-y rounded-lg border">

          </div>
          <div className="flex justify-center space-x-4">
            <a
              className="inline-flex h-10 bg-[#1F1979] text-white items-center justify-center rounded-md bg-[#1F1979]px-8 text-sm font-medium shadow transition-colors hover:bg-[#1f1979c1] px-4 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 "
              href="#"
            >
              Contact Sales
            </a>
            <a
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
              href="#"
            >
              Learn more
            </a>
          </div>
        </div>
      {/* </section> */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 text-[#1F1979] ">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Adventure Calls, Pictures Answer: Plan with Ease, Explore with
              Joy.
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Let your team focus on shipping features instead of managing
              infrastructure with automated CI/CD.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <form className="flex space-x-2">
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-lg flex-1"
                placeholder="Enter your email"
                type="email"
              />
              <button
                className=" bg-white text-black hover:bg-gray-200 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                type="submit"
              >
                Sign Up
              </button>
            </form>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Sign up to get notified when we launch.
              <a className="underline underline-offset-2" href="#">
                Terms &amp; Conditions
              </a>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
