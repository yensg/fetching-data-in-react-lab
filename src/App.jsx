import React, { useEffect, useRef, useState } from "react";
import StarshipSearch from "./components/StarshipSearch";
import ChickenContext from "./context/chicken.context";
import StarshipList from "./components/StarshipList";
import styles from "./App.module.css";

function App() {
  const [starshipData, setStarshipData] = useState([]);
  const [displayStarships, setDisplayStarships] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState(false);
  const url = "https://swapi.info/api/starships";

  const fetchStarshipData = async () => {
    setIsLoading(true);
    setError(null);
    setStarshipData([]);

    try {
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error("Failed to fetch starships");
      }
      const data = await res.json();
      setStarshipData(data);
      setDisplayStarships(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchStarshipData();
  }, []);

  const prevSearchTerm = useRef({
    //can use this here and another component at the same time?
    number: 0,
    lastSearchedTerm: "",
  });

  const searchStarship = (starshipName) => {
    prevSearchTerm.current.number++;
    // console.log(starshipName);
    console.log(prevSearchTerm.current.number);
    starshipData.filter((eachStarship) => {
      if (
        eachStarship.name.toLowerCase().includes(starshipName.toLowerCase())
      ) {
        setDisplayStarships((prevState) => [eachStarship]);
      }
    });
  };

  const showAllStarships = () => {
    setDisplayStarships(starshipData);
  };

  return (
    <div className={styles.main}>
      <div className="container">
        <ChickenContext.Provider value={{ prevSearchTerm, filter, setFilter }}>
          <h1>Star Wars API</h1>
          <br />
          <div className="container">
            <h3>Search</h3>
            <StarshipSearch
              searchStarship={searchStarship}
              showAllStarships={showAllStarships}
            />
          </div>
          {!isLoading && starshipData && (
            <div className="container">
              <h3>Starships</h3>
              <p>Number of results: {prevSearchTerm.current.number}</p>
              <StarshipList displayStarships={displayStarships} />
            </div>
          )}

          {isLoading && <p>is Loading...</p>}
          {!isLoading && error && <p>{error}</p>}
        </ChickenContext.Provider>
      </div>
    </div>
  );
}

export default App;
