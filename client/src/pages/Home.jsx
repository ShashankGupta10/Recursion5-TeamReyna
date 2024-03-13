import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className="bg-gradient-to-r from-[#020D41] to-[#1F1979] ">
      <div className="flex flex-col min-h-screen">
        <header className="px-4 lg:px-6 h-14 flex items-center">
          <a className="flex items-center justify-center" href="#">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z"></path>
              <path d="M12 13v8"></path>
              <path d="M12 3v3"></path>
            </svg> */}
            <img className="h-10 w-27" src="logo_white.svg" alt="" />
            <span className="sr-only text-white">WanderLust</span>
          </a>
          <nav className=" text-white ml-auto flex gap-4 sm:gap-6">
            <a
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#"
            >
              Home
            </a>
            <a
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#"
            >
              About
            </a>
            <a
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#"
            >
              Locations
            </a>
            <a
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#"
            >
              Contact
            </a>
          </nav>
        </header>
        <main className="flex-1">
          <div className="flex justify-around w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container md:px-6 w-3/6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-white text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Welcome to Travel Planner
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl ">
                  Discover with Your Lens, Explore with Your Voice:<br></br> The Future of Travel Planning Unveiled.
                  </p>
                </div>
                <div className="space-x-4">
                  <a
                    className="inline-flex h-9 text-[#1F1979] items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 "
                    href="#"
                    onClick={() => {
                      navigate("/menteeauth");
                    }}
                  >
                    Get Started
                  </a>
                  {/* <a
                    className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                    href="#"
                    onClick={() => {
                      navigate("/mentorauth");
                    }}
                  >
                    Become a Mentor
                  </a> */}
                </div>
              </div>
            </div>
            {/* <Avatar /> */}
          </div>
        </main>
      </div>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold text-[#1F1979] tracking-tighter sm:text-4xl md:text-5xl">
            Speak Your Destination, Hear Your Journey: Travel Planning Reimagined.
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
            Unlock Academic Excitement: Navigate Your Learning Journey with Cutting-Edge Guidance and Multimodal Interactions.
            </p>
          </div>
          <div className="flex space-x-4 lg:justify-end">
            <a
              className="inline-flex h-10 items-center justify-center rounded-md bg-[#1F1979] px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 "
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
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 items-center">
            <div className="flex flex-col justify-center space-y-8 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">
                Embark on Seamless Journeys
                </h1>
                <p className="max-w-[600px] text-white md:text-xl block mx-auto">
                Explore the next frontier in travel planning with our six innovative features, designed to make your adventures extraordinary.
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
                    Instantly identify travel destinations from your uploaded photos, making planning as easy as capturing moments.
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
                    Ask questions about your destinations using natural language, receiving personalized and informative responses.

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
                    Receive spoken recommendations based on your preferences and questions, bringing your travel plans to life.

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
                    Enhance the community section to foster a supportive and engaging environment. Implement features like discussion forums, interest-based groups, and a mentor/mentee showcase to encourage networking and collaboration.

                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl text-white font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Meet our Customers
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
              Trusted by the best mentors in the world. We help mentees of all
              the ages and backgrounds.
            </p>
          </div>
          <div className="divide-y rounded-lg border">
            <div className="grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-3">
              <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                {/* <img
                  src={one}
                  width="140"
                  height="70"
                  alt="Logo"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                /> */}
              </div>
              <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                {/* <img
                  src={one}
                  width="140"
                  height="70"
                  alt="Logo"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                />
              </div>
              <div className="mx-auto flex w-full items-center justify-center p-8">
                <img
                  src={one}
                  width="140"
                  height="70"
                  alt="Logo"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                />
              </div>
            </div>
            <div className="grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-3">
              <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                <img
                  src={one}
                  width="140"
                  height="70"
                  alt="Logo"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                />
              </div>
              <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                <img
                  src={one}
                  width="140"
                  height="70"
                  alt="Logo"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                />
              </div>
              <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                <img
                  src={one}
                  width="140"
                  height="70"
                  alt="Logo"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                  // /> */}
              </div>
            </div>
          </div>
          <div className="flex justify-center space-x-4">
            <a
              className="inline-flex h-10 items-center justify-center rounded-md bg-[#1F1979]px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 "
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
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 ">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Adventure Calls, Pictures Answer: Plan with Ease, Explore with Joy.
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
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
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
      <footer className="flex text-white flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 ">
          © 2024 WanderLust. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Facebook
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Twitter
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Instagram
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Home;