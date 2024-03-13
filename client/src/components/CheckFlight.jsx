import React from "react";
import { getUser } from "../auth.js";
const CheckFlight = ({ from, to, date }) => {
  const loggedInUser = getUser();
  return (
    <div>
      <section class="py-1  ">
        <h1 class="mb-4  text-center font-sans text-5xl font-bold text-gray-900">
          Flights Accomodations<span class="text-blue-600">.</span>
        </h1>
        <div class=" mx-auto flex flex-col w-full  gap-4 p-2 md:grid-cols-2 lg:grid-cols-3">
          <div class="group mx-2 mt-10 w-10/12 flex flex-row  space-x-8 overflow-hidden rounded-lg border py-8 text-gray-700 shadow transition hover:shadow-lg sm:mx-auto">
            <a
              href="#"
              class="h-40 w-44 order-2 col-span-1 mt-4 -ml-14 text-left text-gray-600 hover:text-gray-700 sm:-order-1 sm:ml-4"
            >
              <div class="group relative  overflow-hidden rounded-lg">
                <img
                  src="indigo.png"
                  alt=""
                  class=" object-cover text-gray-700"
                />
              </div>
            </a>
            <div class="col-span-11  flex flex-col pr-8 text-left sm:pl-4">
              <h3 class="text-sm text-gray-600">Nonstop. 2 hrs 5 min</h3>
              <a
                href="#"
                class="mb-3 overflow-hidden pr-7 text-lg font-semibold sm:text-xl"
              >
                {" "}
                IndiGo{" "}
              </a>
              <p>IndiGo is India's largest and most preferred passenger airline and amongst the fastest growing airlines in the world. We have a simple philosophy: offer fares that are affordable, flights that are on time, and provide a courteous and hassle-free travel experience across our unparalleled network.</p>
              <h2 class="text-slate-700">{`${from} to ${to}`}</h2>
              <p class="text-slate-400 mt-1 text-sm">{`Date: ${date}`}</p>
              <div class="mt-5 flex flex-col w-56 space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
                <div class="">
                  Amount
                  <span class="ml-2 mr-3  rounded-full bg-green-100 px-2 py-0.5 text-green-900">
                    {" "}
                    ₹ 8,080{" "}
                  </span>
                </div>
                <a href="https://buy.stripe.com/test_28oeWj29ogmc3eMcMO" class="w-2/6 mx-auto px-4 py-2 text-white hover:scale-[1.05]  transition-[scale_1s_ease_in_out] font-medium bg-[#1F1979] hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
                  Book
                </a>
                {/* <div class="">Salary:<span class="ml-2 mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">180-250k</span></div> */}
              </div>
            </div>
          </div>

          <div class="group mx-2 mt-10 flex flex-row w-10/12 space-x-8 overflow-hidden rounded-lg border py-8 text-gray-700 shadow transition hover:shadow-lg sm:mx-auto">
            <a
              href="#"
              class="h-40 w-44 order-2 col-span-1 mt-4 -ml-14 text-left text-gray-600 hover:text-gray-700 sm:-order-1 sm:ml-4"
            >
              <div class="group relative  overflow-hidden rounded-lg">
                <img
                  src="airindia.png"
                  alt=""
                  class=" object-cover text-gray-700"
                />
              </div>
            </a>
            <div class="col-span-11  flex flex-col pr-8 text-left sm:pl-4">
              <h3 class="text-sm text-gray-600">Nonstop. 3 hrs 15 min</h3>
              <a
                href="#"
                class="mb-3 overflow-hidden pr-7 text-lg font-semibold sm:text-xl"
              >
                {" "}
                Air India{" "}
              </a>
              <p>Elite Tier Privileges: Get Upgrade vouchers, additional baggage allowance, priority check-in and more. Earn additional bonus points on direct bookings on Air India website or app. Free access to lounges across the globe. No blackout dates on redemption of award seats</p>
              <h2 class="text-slate-700">{`${from} to ${to}`}</h2>
              <p class="text-slate-400 mt-1 text-sm">{`Date: ${date}`}</p>
              <div class="mt-5 flex w-56 flex-col space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
                <div class="">
                 Amount:
                  <span class="ml-2 mr-3 rounded-full bg-green-100 px-2 py-0.5 text-green-900">
                    {" "}
                    ₹9,100{" "}
                  </span>
                </div>
                <a href="https://buy.stripe.com/test_cN27tR9BQ9XO4iQcMN" class="w-2/6 mx-auto px-4 py-2 text-white hover:scale-[1.05]  transition-[scale_1s_ease_in_out] font-medium bg-[#1F1979] hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
                  Book
                </a>
                {/* <div class="">Salary:<span class="ml-2 mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">180-250k</span></div> */}
              </div>
            </div>
          </div>

          <div class="group mx-2 mt-10 flex flex-row w-10/12 space-x-8 overflow-hidden rounded-lg border py-8 text-gray-700 shadow transition hover:shadow-lg sm:mx-auto">
            <a
              href="#"
              class="h-40 w-44 order-2 col-span-1 mt-4 -ml-14 text-left text-gray-600 hover:text-gray-700 sm:-order-1 sm:ml-4"
            >
              <div class="group relative  overflow-hidden rounded-lg">
                <img
                  src="vistara.png"
                  alt=""
                  class=" object-cover text-gray-700"
                />
              </div>
            </a>
            <div class="col-span-11  flex flex-col pr-8 text-left sm:pl-4">
              <h3 class="text-sm text-gray-600">Nonstop. 1 hrs 15 min </h3>
              <a
                href="#"
                class="mb-3 overflow-hidden pr-7 text-lg font-semibold sm:text-xl"
              >
                {" "}
                Vistara{" "}
              </a>
              <p>special in Vistara flight,
Skip the queues as you fast track in and out of the airport with priority boarding and baggage handling. Be one of the first few to board the aircraft and get your baggage first off the belt when you travel Premium Economy.</p>
              <h2 class="text-slate-700">{`${from} to ${to}`}</h2>
              <p class="text-slate-400 mt-1 text-sm">{`Date: ${date}`}</p>
              <div class="mt-5 flex w-56 flex-col space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
                <div class="">
                 Amount
                  <span class="ml-2 mr-3 rounded-full bg-green-100 px-2 py-0.5 text-green-900">
                    {" "}
                    ₹5,690{" "}
                  </span>
                </div>
                <a href="https://buy.stripe.com/test_7sIdSf7tIfi85mUdQT" class="w-2/6 mx-auto px-4 py-2 text-white hover:scale-[1.05]  transition-[scale_1s_ease_in_out] font-medium bg-[#1F1979] hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
                  Book
                </a>
                {/* <div class="">Salary:<span class="ml-2 mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">180-250k</span></div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CheckFlight;
