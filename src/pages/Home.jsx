import React, { useEffect, useState } from 'react';

import Categories from '../components/Categories/Categories';
import Sort from '../components/Sort/Sort';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import PizzaBlockSkeleton from '../components/PizzaBlock/PizzaBlockSkeleton';
import Pagination from '../components/Pagination/Pagination';

const Home = ({ searchValue }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoriId, setCotegoriId] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState({
    name: 'популярность(DESC)',
    sortProperty: 'rating',
  });

  useEffect(() => {
    setIsLoading(true);

    const sortBy = sortType.sortProperty.replace('-', '');
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const category = categoriId > 0 ? `category=${categoriId}` : '';
    const search = searchValue ? `search=${searchValue}` : '';

    fetch(
      `https://62a1b7b3cd2e8da9b0f86c11.mockapi.io/items?${category}page=${currentPage}&limit=4&sortBy=${sortBy}&order=${order}&${search}`
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoriId, sortType, searchValue, currentPage]);
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
          ? [...new Array(4)].map((_, index) => {
              return <PizzaBlockSkeleton key={index} />;
            })
          : items.map((obj) => {
              return <PizzaBlock key={obj.id} {...obj} />;
            })}
      </div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </>
  );
};

export default Home;

// .filter((obj) => obj.title.toLowerCase().includes(searchValue.toLowerCase()))
