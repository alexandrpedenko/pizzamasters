import React, { useState, useEffect } from 'react';

const gql = String.raw;

const useLatesData = () => {
  const [hotPizzas, setHotPizzas] = useState('');
  const [pizzaChefs, setPizzaChefs] = useState('');

  useEffect(() => {
    let isCancelled = false;

    if (!isCancelled) {
      fetch(process.env.GATSBY_GRAPHQL_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: gql`
            query {
              StoreSettings(id: "home") {
                name
                pizzachefs {
                  pizzachefname
                  _id
                  image {
                    asset {
                      url
                      metadata {
                        lqip
                      }
                    }
                  }
                }
                pizzatop {
                  name
                  _id
                  image {
                    asset {
                      url
                      metadata {
                        lqip
                      }
                    }
                  }
                }
              }
            }
          `,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          setHotPizzas(res.data.StoreSettings.pizzatop);
          setPizzaChefs(res.data.StoreSettings.pizzachefs);
        });
    }

    return () => {
      isCancelled = true;
    };
  }, []);

  return { hotPizzas, pizzaChefs };
};

export default useLatesData;
