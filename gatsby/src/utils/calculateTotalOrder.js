import calculatePizzaPrice from './calculatePrice';

const calculateTotalOrder = (order, pizzas) => {
  const total = order.reduce((runTotal, singleOrder) => {
    const pizzaItem = pizzas.find((pizza) => pizza.id === singleOrder.id);
    return runTotal + calculatePizzaPrice(pizzaItem.price, singleOrder.size);
  }, 0);

  return total;
};

export default calculateTotalOrder;
