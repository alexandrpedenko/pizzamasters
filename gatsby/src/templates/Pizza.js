import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { SinglePizzaStyle } from "../styles/SinglePizzaStyle";
import SEO from "../components/SEO";

// This needs to be dynamic based on the slug passed in Context
export const query = graphql`
  query($slug: String!) {
    pizza: sanityPizza(slug: { current: { eq: $slug } }) {
      name
      id
      price
      slug {
        current
      }
      toppings {
        id
        name
        vegeterian
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
`;

const SinglePizzaPage = ({ data }) => {
  const { pizza } = data;

  return (
    <>
      <SEO title={pizza.name} image={pizza.image?.asset?.fluid?.src}></SEO>
      <SinglePizzaStyle>
        <div className='single-pizza__left'>
          <Img fluid={pizza.image.asset.fluid} />
        </div>
        <div className='single-pizza__right'>
          <h1>{pizza.name}</h1>
          <span>Ingredients</span>
          <ul>
            {pizza.toppings.map((topping) => (
              <li key={topping.id}>{topping.name}</li>
            ))}
          </ul>
        </div>
      </SinglePizzaStyle>
    </>
  );
};

export default SinglePizzaPage;
