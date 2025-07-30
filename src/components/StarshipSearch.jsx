import React, { useContext, useState } from "react";
import ChickenContext from "../context/chicken.context";

const StarshipSearch = (props) => {
  const [search, setSearch] = useState("");
  const { prevSearchTerm, filter, setFilter } = useContext(ChickenContext); //using this to count number and put the last query here

  const updateSearch = (event) => {
    setSearch(event.target.value);
    setFilter(true);
    if (prevSearchTerm.current.number === 0) {
      prevSearchTerm.current.lastSearchedTerm =
        "Search for a starship by name.";
    } else {
      prevSearchTerm.current.lastSearchedTerm = event.target.value;
    }
  };
  //Use the state variable you created in step 9 (prevSearchTerm) to display the previous search query to the user. If the user has not conducted a search, display the text "Search for a starship by name." instead.
  //What happens if you filter the starship state using an empty string?
  //useRef doesnt re-render any other ways?

  const clickedSearch = () => {
    props.searchStarship(search);
    setSearch("");
  };

  return (
    <>
      <div>
        <label className="col-sm-2">Search Terms:</label>
        <input
          className="col-sm-6"
          type="text"
          onChange={updateSearch}
          value={search}
          // defaultValue={prevSearchTerm.current.lastSearchedTerm}
        ></input>
        <button className="btn btn-dark" onClick={clickedSearch}>
          Search
        </button>
      </div>
      <div>
        {filter === true && (
          <button className="btn btn-dark" onClick={props.showAllStarships}>
            Show all Starships
          </button>
        )}
      </div>
    </>
  );
};

export default StarshipSearch;
