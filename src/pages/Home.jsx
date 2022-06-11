import React, { useEffect, useState } from 'react';

import Categories from '../components/Categories/Categories';
import Sort from '../components/Sort/Sort';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import PizzaBlockSkeleton from '../components/PizzaBlock/PizzaBlockSkeleton';

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoriId, setCotegoriId] = useState(0);
  const [sortType, setSortType] = useState({
    name: 'популярность(DESC)',
    sortProperty: 'rating',
  });

  useEffect(() => {
    setIsLoading(true);

    const sortBy = sortType.sortProperty.replace('-', '');
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const category = categoriId > 0 ? `category=${categoriId}` : '';
    fetch(
      `https://62a1b7b3cd2e8da9b0f86c11.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoriId, sortType]);
  return (
    <>
      <div className="content">
        <Categories
          categoriId={categoriId}
          onClickCategori={(id) => setCotegoriId(id)}
        />
        <Sort sortType={sortType} onClickSort={(i) => setSortType(i)} />
      </div>
      <div className="contentPizzaBlock">
        {isLoading
          ? [...new Array(8)].map((_, index) => {
              return <PizzaBlockSkeleton key={index} />;
            })
          : items.map((obj) => {
              return <PizzaBlock key={obj.id} {...obj} />;
            })}
      </div>
    </>
  );
};

export default Home;
