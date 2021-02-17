import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import { ItemsFlex } from "../styles/ItemsFlex";
import { SingleFlexItem } from "../styles/SingleFlexItem";
import Pagination from "../components/Pagination";
import SEO from "../components/SEO";

export default function AboutPage({ data, pageContext }) {
  const pizzachefs = data.pizzachefs.nodes;
  const totalCount = data.pizzachefs.totalCount;

  return (
    <div>
      <SEO
        title={`Our Pizza Chef Masters - Page ${pageContext.currentPage || 1}`}
      ></SEO>
      <h1 className='pizza-title'>Hey! It`s About US Page!</h1>
      <ItemsFlex>
        {pizzachefs.map((person) => (
          <SingleFlexItem key={person.pizzachefname}>
            <Img fluid={person.image.asset.fluid} />
            <Link
              to={`/person/${person.slug.current}`}
              className='pizza-item-title'
            >
              {person.pizzachefname}
            </Link>
            <p className='pizza-item-description'>{person.description}</p>
          </SingleFlexItem>
        ))}
      </ItemsFlex>

      <Pagination
        totalCount={totalCount}
        pageSize={parseInt(process.env.GATSBY_PAGE_SIZE)}
        currentPage={pageContext.currentPage || 1}
        skip={pageContext.skip}
        base='aboutus'
      />
    </div>
  );
}

export const query = graphql`
  query($pageSize: Int = 1, $skip: Int = 0) {
    pizzachefs: allSanityPizzachef(limit: $pageSize, skip: $skip) {
      totalCount
      nodes {
        pizzachefname
        slug {
          current
        }
        description
        image {
          asset {
            fluid(maxWidth: 500) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
