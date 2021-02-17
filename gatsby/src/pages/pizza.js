import React from "react";
import { graphql } from "gatsby";
import PizzaList from "../components/PizzaList";
import ToppingsFilter from "../components/ToppingsFilter";
import SEO from "../components/SEO";

export default function PizzaPage({ data, pageContext }) {
  const pizzas = data.pizza.nodes;

  return (
    <div>
      <SEO
        title={
          pageContext.topping
            ? `Pizzas with ${pageContext.topping}`
            : "Best Pizzas"
        }
      ></SEO>
      <ToppingsFilter activeTopping={pageContext.topping} />
      <h1 className='pizza-title'>Our Best Pizzas</h1>
      <PizzaList pizzas={pizzas} />
    </div>
  );
}

export const query = graphql`
  query PizzaQuery($topping: [String]) {
    pizza: allSanityPizza(
      filter: { toppings: { elemMatch: { name: { in: $topping } } } }
    ) {
      nodes {
        id
        name
        price
        slug {
          current
        }
        toppings {
          id
          name
        }
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
