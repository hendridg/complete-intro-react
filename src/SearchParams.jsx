import { useState } from "react";

const SearchParams = () => {
  const [location, setLocation] = useState("Seatle, WA");
  return (
    <div className="search-params">
      <form action="submit">
        <label htmlFor="location">
          Location
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
          />
        </label>
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchParams;
