import React from "react";
import styles from "./StarshipCard.module.css";
const StarshipCard = (props) => {
  return (
    <div className={styles.starshipCard}>
      <h3 className="">{props.name}</h3>
      <p className="">Class: {props.class}</p>
      <p className="">Manufacturer: {props.manufacturer}</p>
      <p className="">Model: {props.model}</p>
    </div>
  );
};

export default StarshipCard;
