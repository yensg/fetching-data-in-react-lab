import React from "react";
import StarshipCard from "./StarshipCard";
import styles from "./StarshipCard.module.css";
const StarshipList = (props) => {
  return (
    <div>
      <div className={styles.starshipList}>
        {props.displayStarships.map((eachStarship, id) => {
          return (
            <div className="container">
              <StarshipCard
                name={eachStarship.name}
                class={eachStarship.class}
                model={eachStarship.model}
                manufacturer={eachStarship.manufacturer}
                key={id}
                id={id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StarshipList;
