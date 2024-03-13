import React from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

const Chooselocation = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    // Update the state with the selected date
    setSelectedDate(date);
  };
  const [formData, setFormData] = useState({
    from: "",
    to: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    navigate("/flights");
    e.preventDefault();
    console.log("Form submitted", formData, selectedDate);
  };
  const navigate = useNavigate();
  return (
    <div>
      <form
        className="w-full flex justify-around mt-4 bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  "
        action=""
        onSubmit={handleSubmit}
      >
        {/* <div class="bg-blue-800 px-10 py-10 text-center text-white">
                        <p class="font-serif text-2xl font-semibold tracking-wider">Submit your request</p>
                        <p class="text-center text-blue-100">Please keep it short and succinct</p>
                    </div> */}

        <div className=" w-3/12">
          <label
            for="small"
            class="block   mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select From
          </label>
          <select
            value={formData.from}
            onChange={handleChange}
            name="from"
            id="small"
            class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">Mumbai</option>
            <option value="DE">delhi</option>
          </select>
        </div>
        <div className=" w-3/12">
          <label
            for="default"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select To
          </label>
          <select
            value={formData.to}
            onChange={handleChange}
            name="to"
            class="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">Mumbai</option>
            <option value="DE">delhi</option>
          </select>
        </div>
        <div className=" w-2/12">
          <label
            for="large"
            class="block mb-2 text-base font-medium text-gray-900 dark:text-white"
          >
            Select Date
          </label>
          <div className='"bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="MMMM d, yyyy"
            />
          </div>
        </div>
        <div className="my-auto">
          <button
            class="w-full px-4 py-2 text-white hover:scale-[1.05]  transition-[scale_1s_ease_in_out] font-medium bg-[#1F1979] hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
            onClick={() => {
              navigate("/flights");
            }}
          >
            Check Trips
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chooselocation;
