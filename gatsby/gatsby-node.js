import path, { resolve } from 'path';
import fetch from 'isomorphic-fetch';

async function turnPizzasToPages({ graphql, actions }) {
  // Get template for this page
  const pizzaTemplate = path.resolve('./src/templates/Pizza.js');

  // Query All Pizzas
  const { data } = await graphql(`
    query {
      pizzas: allSanityPizza {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);

  // Loop over each pizza and create a page
  data.pizzas.nodes.forEach((pizza) => {
    actions.createPage({
      path: `pizza/${pizza.slug.current}`,
      component: pizzaTemplate,
      context: {
        slug: pizza.slug.current,
      },
    });
  });
}

async function turnToppingsToPages({ graphql, actions }) {
  // Get template for this page
  const toppingTemplate = path.resolve('./src/pages/pizza.js');

  // Get all toppings
  const { data } = await graphql(`
    query {
      toppings: allSanityTopping {
        nodes {
          id
          name
        }
      }
    }
  `);

  // Create page for each topping
  data.toppings.nodes.forEach((topping) => {
    actions.createPage({
      path: `topping/${topping.name}`,
      component: toppingTemplate,
      context: {
        topping: topping.name,
      },
    });
  });
}

async function turnPizzachefsToPages({ graphql, actions }) {
  // TODO: query items and turn it into their own page
  const { data } = await graphql(`
    query {
      persons: allSanityPizzachef {
        totalCount
        nodes {
          pizzachefname
          id
          slug {
            current
          }
        }
      }
    }
  `);

  // Turn each item to page
  data.persons.nodes.forEach((person) => {
    actions.createPage({
      component: resolve('./src/templates/Person.js'),
      path: `/person/${person.slug.current}`,
      context: {
        name: person.pizzachefname,
        slug: person.slug.current,
      },
    });
  });

  // Set Paggination page size
  const pageSize = parseInt(process.env.GATSBY_PAGE_SIZE);
  const pageCount = Math.ceil(data.persons.totalCount / pageSize);

  // Loop over pageCount and create page for them
  Array.from({ length: pageCount }).forEach((_, i) => {
    actions.createPage({
      path: `/aboutus/${i + 1}`,
      component: path.resolve('./src/pages/aboutus.js'),
      context: {
        skip: i * pageSize,
        currentPage: i + 1,
        pageSize,
      },
    });
  });
}

// Fetch Drinks
async function fetchDrinksAndTurnIntoNodes({
  actions,
  createNodeId,
  createContentDigest,
}) {
  const res = await fetch('https://sampleapis.com/wines/api/whites');
  const wines = await res.json();

  // Loop over each item
  for (const wine of wines) {
    const nodeMeta = {
      id: createNodeId(`wine-${wine.wine}`),
      parent: null,
      children: [],
      internal: {
        type: 'Wine',
        mediaType: 'application/json',
        contentDigest: createContentDigest(wine),
      },
    };

    actions.createNode({
      ...wine,
      ...nodeMeta,
    });
  }
}

// Get data from 3rd API
export async function sourceNodes(params) {
  // Fetch list of drinks and source them into our gatsby
  //await Promise.all([fetchDrinksAndTurnIntoNodes(params)]);
}

export async function createPages(params) {
  // Create Pages dynamically
  // Pizza and toppings
  await Promise.all([
    turnPizzasToPages(params),
    turnToppingsToPages(params),
    turnPizzachefsToPages(params),
  ]);
}
