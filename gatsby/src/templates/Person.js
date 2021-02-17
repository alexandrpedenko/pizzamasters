import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { SinglePizzaStyle } from "../styles/SinglePizzaStyle";
import SEO from "../components/SEO";

// This needs to be dynamic based on the slug passed in Context
export const query = graphql`
  query($slug: String!) {
    person: sanityPizzachef(slug: { current: { eq: $slug } }) {
      description
      pizzachefname
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

const SinglePersonPage = ({ data }) => {
  const { person } = data;

  return (
    <>
      <SEO title={person.pizzachefname}></SEO>
      <SinglePizzaStyle>
        <div class='single-pizza__left'>
          <Img fluid={person.image.asset.fluid} />
        </div>
        <div class='single-pizza__right'>
          <h1>{person.pizzachefname}</h1>
          <p>{person.description}</p>
        </div>
      </SinglePizzaStyle>
    </>
  );
};

export default SinglePersonPage;
