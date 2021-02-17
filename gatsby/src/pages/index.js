import React from 'react';
import useLatesData from '../utils/useLatesData';
import LoadingGrid from '../components/LoadingGrid';
import { ItemsGrid, ItemStyles } from '../styles';
import { HomePageGrid } from '../styles';

const CurrentChefs = ({ chefs }) => {
  return (
    <div>
      <p>Our pizza chefs</p>
      {!chefs && <LoadingGrid count={2} />}
      {chefs?.length && (
        <ItemsGrid>
          {chefs.map((item) => (
            <ItemStyles>
              <img
                src={`${item.image.asset.url}?w=500&h=400&fit=crop`}
                alt={item.pizzachefname}
                style={{
                  background: `url(${item.image.asset.metadata.lqip})`,
                  backgroundSize: 'cover',
                }}
              />
              <p>{item.pizzachefname}</p>
            </ItemStyles>
          ))}
        </ItemsGrid>
      )}
    </div>
  );
};

const HotPizzas = ({ pizzas }) => {
  return (
    <div>
      <p>Our hot pizzas</p>
      {!pizzas && <LoadingGrid count={2} />}
      {pizzas?.length && (
        <ItemsGrid>
          {pizzas.map((item) => (
            <ItemStyles>
              <img
                src={`${item.image.asset.url}?w=500&h=400&fit=crop`}
                alt={item.name}
                style={{
                  background: `url(${item.image.asset.metadata.lqip})`,
                  backgroundSize: 'cover',
                }}
              />
              <p>{item.name}</p>
            </ItemStyles>
          ))}
        </ItemsGrid>
      )}
    </div>
  );
};

export default function HomePage() {
  const { hotPizzas, pizzaChefs } = useLatesData();

  return (
    <div className='center'>
      <h1>Welcome to Pizza Masters!</h1>
      <p>The Best pizzas in the world</p>
      <HomePageGrid>
        <CurrentChefs chefs={pizzaChefs}></CurrentChefs>
        <HotPizzas pizzas={hotPizzas}></HotPizzas>
      </HomePageGrid>
    </div>
  );
}
