import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { Oval } from "react-loader-spinner";
import { NavLink } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

// function to update restaurant list using search functionality
const filterRestaurant = (searchText, restro) => {
  return restro.filter((r) => r?.info?.name.includes(searchText));
};

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restro, setRestro] = useState([]);
  const [filteredRestro, setFilteredRestro] = useState(restro);
  useEffect(() => {
    fetchData();
  }, []);
  // Fetching live data from swiggy API
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6065883&lng=77.3694084&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestro(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestro(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // checking if user is online or offline
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline..! Please check your internet connection.
      </h1>
    );

  // rendering shimmer ui for initial render till api fetches data and re-renders, Conditional rendering
  return restro.length === 0 ? (
    <div className="loader">
      <Oval
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            // need to filter data
            const data = filterRestaurant(searchText, restro);
            // update the state
            setFilteredRestro(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestro.map((restaurant) => {
          return (
            <NavLink
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant?.info.id}
            >
              <RestaurantCard {...restaurant?.info} />
            </NavLink>
          );
        })}
      </div>
    </>
  );
};

export default Body;
