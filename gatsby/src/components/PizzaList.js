import React from "react";
import SinglePizza from "./SinglePizza";
import { ItemsGrid } from "../styles/ItemsGrid";

const PizzaList = ({ pizzas }) => {
  return (
    <div>
      <ItemsGrid>
        {pizzas.map((pizza) => (
          <SinglePizza pizza={pizza} key={pizza.id} />
        ))}
      </ItemsGrid>
    </div>
  );
};

export default PizzaList;
