import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import CheckFlight from "../components/CheckFlight";

const Chooselocation = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const [trips, setTrips] = useState(false);

  const handleDateChange = (date) => {
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
    e.preventDefault();
    console.log("Form submitted", formData, selectedDate);
  };

  const handleTrips = () => {
    setTrips(true);
  };

  return (
    <div>
      <form
        className="w-full  flex justify-around mt-4 bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  "
        action=""
        onSubmit={handleSubmit}
      >
        {/* <div className="bg-blue-800 px-10 py-10 text-center text-white">
                        <p className="font-serif text-2xl font-semibold tracking-wider">Submit your request</p>
                        <p className="text-center text-blue-100">Please keep it short and succinct</p>
                    </div> */}

        <div className=" w-3/12">
          <label
            for="small"
            className="block   mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select From
          </label>
          <select
            value={formData.from}
            onChange={handleChange}
            name="from"
            id="small"
            className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose country</option>
            <option value="SDF">United States</option>
            <option value="YYZ">Canada</option>
            <option value="BOM">Mumbai</option>
            <option value="DEL">delhi</option>
          </select>
        </div>
        <div className=" w-3/12">
          <label
            for="default"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select To
          </label>
          <select
            value={formData.to}
            onChange={handleChange}
            name="to"
            className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose country</option>
            <option value="SDF">United States</option>
            <option value="YYZ">Canada</option>
            <option value="BOM">Mumbai</option>
            <option value="DEL">delhi</option>
          </select>
        </div>
        <div className=" w-2/12">
          <label
            for="large"
            className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
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
            onClick={handleTrips}
            className="w-full px-4 py-2 text-white hover:scale-[1.05]  transition-[scale_1s_ease_in_out] font-medium bg-[#1F1979] hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
          >
            Check Trips
          </button>
        </div>
      </form>
      {trips && (
        <CheckFlight
          from={formData.from}
          to={formData.to}
          date={selectedDate}
        />
      )}
    </div>
  );
};

export default Chooselocation;
