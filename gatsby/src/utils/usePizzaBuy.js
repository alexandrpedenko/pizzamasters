import { useContext, useState } from 'react';
import OrderContext from '../components/OrderContext';
import calculateTotalOrder from './calculateTotalOrder';
import attachNamesAndPrices from './attachNamesAndPrices';
import formatMoney from './formatMoney';

const usePizzaBuy = ({ pizzas, values }) => {
  // Set State to hold order
  //const [order, setOrder] = useState([]);
  const [order, setOrder] = useContext(OrderContext);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Func to add things to order
  const addToOrder = (orderedPizza) => {
    setOrder([...order, orderedPizza]);
  };

  // Func to remove things from order
  const removeFromOrder = (index) => {
    setOrder([
      // ... before remove item
      ...order.slice(0, index),
      // ... after remove item
      ...order.slice(index + 1),
    ]);
  };

  // Run when submits form
  const submitOrder = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    const body = {
      order: attachNamesAndPrices(order, pizzas),
      total: formatMoney(calculateTotalOrder(order, pizzas)),
      name: values.name,
      email: values.email,
      maplHidden: values.maplHidden,
    };

    // Send this data the a serverless func when check out
    const res = await fetch(`${process.env.GATSBY_SERVLESS_URL}/placeOrder`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    console.log(res);

    const text = JSON.parse(await res.text());

    // Checks if OK
    if (res.status >= 400 && res.status < 600) {
      setLoading(false);
      setError(text.message);
    } else {
      setLoading(false);
      setMessage('Success! Come on down for your pizza');
    }
  };

  return {
    order,
    addToOrder,
    removeFromOrder,
    error,
    loading,
    message,
    submitOrder,
  };
};

export default usePizzaBuy;
