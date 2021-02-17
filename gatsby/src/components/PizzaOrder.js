import React from 'react';
import Img from 'gatsby-image';
import { OrderItemStyles } from '../styles/index';
import calculatePizzaPrice from '../utils/calculatePrice';
import formatMoney from '../utils/formatMoney';

const PizzaOrder = ({ order, pizzas, removeFromOrder }) => {
  return (
    <>
      {order.map((orderItem, index) => {
        const pizza = pizzas.find((pizza) => pizza.id === orderItem.id);

        return (
          <OrderItemStyles key={`${orderItem.id} + ${index}`}>
            <Img
              width='50'
              height='50'
              fluid={pizza.image.asset.fluid}
              alt={pizza.name}
            />
            <h4>{pizza.name}</h4>
            <p>
              {orderItem.size}{' '}
              {formatMoney(calculatePizzaPrice(pizza.price, orderItem.size))}
              <button
                type='button'
                className='remove'
                title={`Remove ${orderItem.size} ${pizza.name} from order`}
                onClick={() => removeFromOrder(index)}
              >
                &times;
              </button>
            </p>
          </OrderItemStyles>
        );
      })}
    </>
  );
};

export default PizzaOrder;
