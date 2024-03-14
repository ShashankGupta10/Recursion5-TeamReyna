import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

const SuggestPlaces = () => {
  const navigate = useNavigate();

  const trips = [
    {
      image: "https://assets.serenity.co.uk/58000-58999/58779/1296x864.jpg",
      subtitle: "Beach Getaway",
      title: "Mumbai to Goa",
      description:
        "Escape to the beautiful beaches of Goa from the bustling city of Mumbai. Experience the vibrant culture, delicious cuisine, and stunning coastline.",
      amount: 8080,
      date: "20-03-2024",
    },
    {
      image:
        "https://www.tripsavvy.com/thmb/zyqX35L3rgFRuVrbGioDKoqPezc=/2121x1414/filters:fill(auto,1)/GettyImages-930881934-5ae56fe48023b90036464e72.jpg",
      subtitle: "Mountain Retreat",
      title: "Mumbai to Manali",
      description:
        "Embark on a journey from the historic city of Delhi to the serene mountains of Manali. Enjoy breathtaking views, adventurous activities, and fresh mountain air.",
      amount: 3000,
      date: "22-03-2024",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Taj_Mahal%2C_Agra%2C_India_edit2.jpg/1200px-Taj_Mahal%2C_Agra%2C_India_edit2.jpg",
      subtitle: "Historic Tour",
      title: "Mumbai to Agra",
      description:
        "Explore the rich history and architectural marvels as you travel from the pink city of Jaipur to the iconic city of Agra. Visit majestic forts, palaces, and the world-famous Taj Mahal.",
      amount: 2000,
      date: "25-03-2024",
    },
    {
      image:
        "https://th.bing.com/th/id/OIP.WmjibhB9Q9DMoG0XzJ_PQgHaE8?rs=1&pid=ImgDetMain",
      subtitle: "Coastal Adventure",
      title: "Mumbai to Pondicherry",
      description:
        "Embark on a coastal adventure from Chennai to the charming town of Pondicherry. Discover French colonial architecture, serene beaches, and delectable cuisine.",
      amount: 1800,
      date: "27-03-2024",
    },
  ];

  return (
    <div>
      <section className="py-1  mt-8">
        <h1 className="mb-4  text-center font-sans text-5xl font-bold text-gray-900">
          Suggested Trips<span className="text-blue-600">.</span>
        </h1>
        <div className=" mx-auto flex flex-col w-full  gap-4 p-2 md:grid-cols-2 lg:grid-cols-3">
          {trips.map((trip, index) => (
            <div
              key={index}
              className="group mx-2 mt-10 w-10/12 flex flex-row  space-x-8 overflow-hidden rounded-lg border py-8 text-gray-700 shadow transition hover:shadow-lg sm:mx-auto"
            >
              <a
                href="#"
                className="h-40 w-44 order-2 col-span-1 mt-4 -ml-14 text-left text-gray-600 hover:text-gray-700 sm:-order-1 sm:ml-4"
              >
                <div className="group relative  overflow-hidden rounded-lg">
                  <img
                    src={trip.image}
                    alt=""
                    className=" object-cover text-gray-700"
                  />
                </div>
              </a>
              <div className="col-span-11  flex flex-col pr-8 text-left sm:pl-4">
                <h3 className="text-sm text-gray-600">{trip.subtitle}</h3>
                <a
                  href="#"
                  className="mb-3 overflow-hidden pr-7 text-lg font-semibold sm:text-xl"
                >
                  {" "}
                  {trip.title}{" "}
                </a>
                <p>{trip.description}</p>
                {/* <h2 className="text-slate-700">{`x to y`}</h2> */}
                {/* <p className="text-slate-400 mt-1 text-sm">{`Date: 20-03-2024`}</p> */}
                <div className="mt-5 flex flex-col w-56 space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
                  <div className="">
                    Amount
                    <span className="ml-2 mr-3  rounded-full bg-green-100 px-2 py-0.5 text-green-900">
                      {" "}
                      ₹ {trip.amount}{" "}
                    </span>
                  </div>
                  <a
                    href="https://buy.stripe.com/test_28oeWj29ogmc3eMcMO"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setTimeout(() => navigate("/ticket"), 100)}
                    className="w-2/6 mx-auto px-4 py-2 text-white hover:scale-[1.05] transition-[scale_1s_ease_in_out] font-medium bg-[#1F1979] hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                  >
                    Book
                  </a>

                  {/* <div className="">Salary:<span className="ml-2 mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">180-250k</span></div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SuggestPlaces;
