import React from "react";
import { getUser } from "../auth.js";
const CheckFlight = ({ from, to, date }) => {
  const loggedInUser = getUser();
  return (
    <div>
      <section class="py-1">
        <h1 class="mb-4 text-center font-sans text-5xl font-bold text-gray-900">
          Flights Accomodations<span class="text-blue-600">.</span>
        </h1>
        <div class=" mx-auto flex flex-col max-w-screen-xl  gap-4 p-2 md:grid-cols-2 lg:grid-cols-3">
          <div class="group mx-2 mt-10 flex flex-row max-w-screen-md space-x-8 overflow-hidden rounded-lg border py-8 text-gray-700 shadow transition hover:shadow-lg sm:mx-auto">
            <a
              href="#"
              class="h-40 w-44 order-2 col-span-1 mt-4 -ml-14 text-left text-gray-600 hover:text-gray-700 sm:-order-1 sm:ml-4"
            >
              <div class="group relative  overflow-hidden rounded-lg">
                <img
                  src="logo_black.svg"
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

              <h2 class="text-slate-700">{`${from} to ${to}`}</h2>
              <p class="text-slate-400 mt-1 text-sm">{`Date: ${date}`}</p>
              <div class="mt-5 flex flex-col space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
                <div class="">
                  Amount
                  <span class="ml-2 mr-3 rounded-full bg-green-100 px-2 py-0.5 text-green-900">
                    {" "}
                    ₹ 8,080{" "}
                  </span>
                </div>
                <button class="w-2/6 mx-auto px-4 py-2 text-white hover:scale-[1.05]  transition-[scale_1s_ease_in_out] font-medium bg-[#1F1979] hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
                  Book
                </button>
                {/* <div class="">Salary:<span class="ml-2 mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">180-250k</span></div> */}
              </div>
            </div>
          </div>

          <div class="group mx-2 mt-10 flex flex-row max-w-screen-md space-x-8 overflow-hidden rounded-lg border py-8 text-gray-700 shadow transition hover:shadow-lg sm:mx-auto">
            <a
              href="#"
              class="h-40 w-44 order-2 col-span-1 mt-4 -ml-14 text-left text-gray-600 hover:text-gray-700 sm:-order-1 sm:ml-4"
            >
              <div class="group relative  overflow-hidden rounded-lg">
                <img
                  src="logo_black.svg"
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

              <h2 class="text-slate-700">{`${from} to ${to}`}</h2>
              <p class="text-slate-400 mt-1 text-sm">{`Date: ${date}`}</p>
              <div class="mt-5 flex flex-col space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
                <div class="">
                 Amount:
                  <span class="ml-2 mr-3 rounded-full bg-green-100 px-2 py-0.5 text-green-900">
                    {" "}
                    ₹9,100{" "}
                  </span>
                </div>
                <button class="w-2/6 mx-auto px-4 py-2 text-white hover:scale-[1.05]  transition-[scale_1s_ease_in_out] font-medium bg-[#1F1979] hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
                  Book
                </button>
                {/* <div class="">Salary:<span class="ml-2 mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">180-250k</span></div> */}
              </div>
            </div>
          </div>

          <div class="group mx-2 mt-10 flex flex-row max-w-screen-md space-x-8 overflow-hidden rounded-lg border py-8 text-gray-700 shadow transition hover:shadow-lg sm:mx-auto">
            <a
              href="#"
              class="h-40 w-44 order-2 col-span-1 mt-4 -ml-14 text-left text-gray-600 hover:text-gray-700 sm:-order-1 sm:ml-4"
            >
              <div class="group relative  overflow-hidden rounded-lg">
                <img
                  src="logo_black.svg"
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

              <h2 class="text-slate-700">{`${from} to ${to}`}</h2>
              <p class="text-slate-400 mt-1 text-sm">{`Date: ${date}`}</p>
              <div class="mt-5 flex flex-col space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
                <div class="">
                 Amount
                  <span class="ml-2 mr-3 rounded-full bg-green-100 px-2 py-0.5 text-green-900">
                    {" "}
                    ₹5,690{" "}
                  </span>
                </div>
                <button class="w-2/6 mx-auto px-4 py-2 text-white hover:scale-[1.05]  transition-[scale_1s_ease_in_out] font-medium bg-[#1F1979] hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
                  Book
                </button>
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
