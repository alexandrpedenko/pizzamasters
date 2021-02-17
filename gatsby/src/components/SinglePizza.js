import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import { SingleGridItem } from "../styles/SingleGridItem";

const SinglePizza = ({ pizza }) => {
  return (
    <SingleGridItem>
      <Img fluid={pizza.image.asset.fluid} alt={pizza.name} />
      <Link to={`/pizza/${pizza.slug.current}`} className='pizza-item-title'>
        {pizza.name}
      </Link>
      <div className='pizza-toppings'>
        {pizza.toppings.map((topping) => topping.name).join(", ")}
      </div>
    </SingleGridItem>
  );
};

export default SinglePizza;
