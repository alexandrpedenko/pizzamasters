import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import useForm from '../utils/useForm';
import calculatePizzaPrice from '../utils/calculatePrice';
import formatMoney from '../utils/formatMoney';
import usePizzaBuy from '../utils/usePizzaBuy';
import calculateTotalOrder from '../utils/calculateTotalOrder';
import SEO from '../components/SEO';
import PizzaOrder from '../components/PizzaOrder';
import { OrderStyles, OrderItemStyles } from '../styles/index';

export default function OrderPage({ data }) {
  const pizzas = data.pizzas.nodes;
  const { values, updateValues } = useForm({
    name: '',
    email: '',
    maplHidden: '',
  });
  const {
    order,
    addToOrder,
    removeFromOrder,
    error,
    loading,
    message,
    submitOrder,
  } = usePizzaBuy({
    pizzas,
    values,
  });

  if (message) {
    return <div>{message}</div>;
  }

  return (
    <div>
      <SEO title='Order a pizza' />
      <OrderStyles onSubmit={submitOrder}>
        <fieldset>
          <legend>Your Info</legend>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            id='name'
            value={values.name}
            onChange={updateValues}
          />
          <label htmlFor='email'>E-mail</label>
          <input
            type='email'
            name='email'
            id='email'
            value={values.email}
            onChange={updateValues}
          />
          <input
            type='maplHidden'
            name='maplHidden'
            id='maplHidden'
            value={values.maplHidden}
            onChange={updateValues}
          />
        </fieldset>
        <fieldset className='menu'>
          <legend>Menu</legend>
          {pizzas.map((pizza) => (
            <OrderItemStyles key={pizza.id}>
              <Img
                width='50'
                height='50'
                fluid={pizza.image.asset.fluid}
                alt={pizza.name}
              />
              <div>
                <h4>{pizza.name}</h4>
              </div>
              <div>
                {['S', 'M', 'L'].map((size) => (
                  <button
                    key={`${pizza.id}` + size}
                    type='button'
                    onClick={() => addToOrder({ id: pizza.id, size })}
                  >
                    {size} {formatMoney(calculatePizzaPrice(pizza.price, size))}
                  </button>
                ))}
              </div>
            </OrderItemStyles>
          ))}
        </fieldset>
        <fieldset className='order'>
          <legend>Order</legend>
          <PizzaOrder
            order={order}
            pizzas={pizzas}
            removeFromOrder={removeFromOrder}
          />
        </fieldset>
        <fieldset>
          <h3>
            Your total is {formatMoney(calculateTotalOrder(order, pizzas))}
          </h3>
          {error && (
            <div>
              <p>Error: {error}</p>
            </div>
          )}
          <button type='submit' disabled={loading}>
            {loading ? 'Placing Order...' : 'Order Ahead'}
          </button>
        </fieldset>
      </OrderStyles>
    </div>
  );
}

export const query = graphql`
  query {
    pizzas: allSanityPizza {
      nodes {
        id
        name
        price
        slug {
          current
        }
        image {
          asset {
            fluid(maxWidth: 100) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
