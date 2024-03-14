import React from "react";

const Ticket = () => {
  return (
    <div>
      <section className="w-screen">
        <div className="m-4 mx-auto max-w-screen-lg mt-16 rounded-md border border-gray-100 text-gray-600 shadow-md">
          <div className="relative flex h-full flex-col text-gray-600 md:flex-row">
            <div className="relative p-8 md:w-4/6">
              <div className="flex flex-col md:flex-row">
                <h2 className="mb-2 text-2xl font-black">Air India</h2>
                {/* <span className="ml-2 text-xs uppercase">Tailwind</span> */}
              </div>
              <p className="mt-3 font-sans text-base tracking-normal">
                Air India is the flag carrier airline of India. It is owned by
                Air India Limited, a Tata Group enterprise and operates a fleet
                of Airbus and Boeing aircraft serving 102 domestic and
                international destinations.
              </p>
              <p className=" font-medium text-md mt-4">From: <span className="text-lg">Mumbai</span></p>
              <p className=" font-medium text-md mt-4">To: <span className="text-lg">Goa</span></p>

              <div className="flex  gap-4 items-end">
                <p className="font-bold text-3xl text-green-400">✓Paid</p>
                <p className="mt-6 text-4xl font-black">
                ₹8080
                </p>
              </div>
            </div>
            <div className="mx-auto flex items-center px-5 pt-1 md:p-8">
              <img
                className="block h-auto max-w-full rounded-md shadow-lg"
                src="https://media.istockphoto.com/id/955952680/photo/passengers-commercial-airplane-flying-above-clouds.jpg?s=612x612&w=0&k=20&c=9bZsGq8-uZaPXR1lCztXur4JRlI1gNksYOOSZzfXPAA="
                alt="Shop image"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ticket;
