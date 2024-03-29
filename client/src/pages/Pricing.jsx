import Footer from "../components/Footer";

const Pricing = () => {
  const plans = [
    {
      name: "Free Trial",
      desc: "Explore the essentials with our limited free trial plan, offering a sneak peek into the world of travel planning.",
      price: "0",
      isMostPop: false,
      features: [
        "Temporay",
        "Visual Destination Recognition",
        "Limited Conversational Inquiry",
        "Basic Spoken Recommendations",
        "Access to Live Events (Limited)",
        "Community Building (Basic)",
      ],
    },
    {
      name: "Standard Plan",
      desc: "Unlock the full potential of travel planning with our standard plan, providing access to a comprehensive set of features and facilities.",
      price: "50k",
      isMostPop: true,
      features: [
        "Visual Destination Recognition",
        "Conversational Inquiry",
        "Spoken Recommendations",
        "Live Events and Workshops",
        "Community Building",
        "Powerful Search",
      ],
    },
    {
      name: "Enterprise Plan",
      desc: "Maximize collaboration and efficiency with our enterprise plan, tailored for teams. Share logins seamlessly enhanced productivity.",
      price: "3L",
      isMostPop: false,
      features: [
        "Visual Destination Recognition",
        "Conversational Inquiry",
        "Spoken Recommendations",
        "Live Events and Workshops",
        "Community Building",
        "Powerful Search",
        "Team Login Sharing",
        "Feedback and Ratings System",
        "Advanced Matching Algorithms",
      ],
    },
  ];

  return (
    <section className="">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8 my-10">
        <div className="relative max-w-xl mx-auto sm:text-center">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Pricing to Fit Your Needs
          </h3>
          <div className="mt-3 max-w-xl">
            <p>
              Discover flexible pricing options designed  to accommodate <br></br> various
              needs and preferences.
            </p>
          </div>
        </div>
        <div className="mt-16 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3">
          {plans.map((item, idx) => (
            <div
              key={idx}
              className={`relative flex-1 flex items-stretch flex-col rounded-xl border-2 mt-6 sm:mt-0 ${
                item.isMostPop ? "mt-10" : ""
              }`}
            >
              {item.isMostPop ? (
                <span className="w-32 absolute -top-5 left-0 right-0 mx-auto px-3 py-2 rounded-full border shadow-md bg-white text-center text-gray-700 text-sm font-semibold">
                  Most popular
                </span>
              ) : (
                ""
              )}
              <div className="p-8 space-y-4 border-b">
                <span className="text-indigo-600 font-medium">{item.name}</span>
                <div className="text-gray-800 text-3xl font-semibold">
                  ₹{item.price}{" "}
                  <span className="text-xl text-gray-600 font-normal">/mo</span>
                </div>
                <p>{item.desc}</p>
                <button className="px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700">
                  Get Started
                </button>
              </div>
              <ul className="p-8 space-y-3">
                <li className="pb-2 text-gray-800 font-medium">
                  <p>Features</p>
                </li>
                {item.features.map((featureItem, idx) => (
                  <li key={idx} className="flex items-center gap-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    {featureItem}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Pricing;
