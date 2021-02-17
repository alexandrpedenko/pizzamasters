const sizes = {
  S: 0.75,
  M: 1,
  L: 1.25,
};

const calculatePizzaPrice = (price, size) => {
  return price * sizes[size];
};

export default calculatePizzaPrice;
