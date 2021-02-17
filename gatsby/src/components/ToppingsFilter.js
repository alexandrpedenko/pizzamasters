import React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

const ToppingsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 14px;
  a {
    display: flex;
    align-items: center;
    margin-right: 6px;
    margin-bottom: 6px;
    padding: 6px 12px;
    font-size: 1.2rem;
    color: #666;
    text-decoration: none;
    background-color: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 15px;
    &.active {
      background-color: var(--red);
      border: 1px solid var(--red);
      color: #fff;
      .topping-count {
        color: #666;
      }
    }
  }
  .topping-count {
    margin-left: 6px;
    display: block;
    width: 20px;
    height: 20px;
    font-size: 1.1rem;
    text-align: center;
    line-height: 20px;
    vertical-align: middle;
    background-color: #ddd;
    border-radius: 50%;
  }
`;

function countPizzasWithToppings(pizzas) {
  // return pizzas with count
  const counts = pizzas
    .map((pizza) => pizza.toppings)
    .flat()
    .reduce((acc, topping) => {
      // check existing topping
      const existingTopping = acc[topping.id];
      if (existingTopping) {
        // if it is, increment by 1
        existingTopping.count += 1;
      } else {
        // otherwise create a new entry in our acc and set it to one
        acc[topping.id] = {
          id: topping.id,
          name: topping.name,
          count: 1,
        };
      }

      return acc;
    }, {});
  // Sort counts DESC
  const sortedToppings = Object.values(counts).sort(
    (a, b) => b.count - a.count
  );

  return sortedToppings;
}

const ToppingsFilter = ({ activeTopping }) => {
  // Get toppings
  // Get list of pizzas with this toppings
  const { toppings, pizzas } = useStaticQuery(graphql`
    query {
      toppings: allSanityTopping {
        nodes {
          vegeterian
          id
          name
        }
      }
      pizzas: allSanityPizza {
        nodes {
          toppings {
            name
            id
          }
        }
      }
    }
  `);

  // Count pizzas
  const toppingsWithCount = countPizzasWithToppings(pizzas.nodes);

  return (
    <div>
      <ToppingsList>
        <Link to='/pizza'>
          <span className='topping-name'>All</span>
          <span className='topping-count'>{pizzas.nodes.length}</span>
        </Link>
        {toppingsWithCount.map((topping) => (
          <Link
            to={`/topping/${topping.name}`}
            key={topping.id}
            className={topping.name === activeTopping ? "active" : ""}
          >
            <span className='topping-name'>{topping.name}</span>
            <span className='topping-count'>{topping.count}</span>
          </Link>
        ))}
      </ToppingsList>
    </div>
  );
};

export default ToppingsFilter;
