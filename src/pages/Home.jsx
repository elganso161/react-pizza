import React, { useEffect, useState } from 'react';
import Categories from '../components/Categories/Categories';
import Sort from '../components/Sort/Sort';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import PizzaBlockSkeleton from '../components/PizzaBlock/PizzaBlockSkeleton';
import Pagination from '../components/Pagination/Pagination';
import { useContext } from 'react';
import { searchContext } from '../App';
import { useSelector, useDispatch } from 'react-redux';
import { setCotegoriId, setSortType } from '../redux/slices/filterSlice';
import { setItems } from '../redux/slices/pizzasSlice';

const Home = () => {
  const dispatch = useDispatch();
  const categoriId = useSelector((state) => state.filters.categoriId);
  const sortType = useSelector((state) => state.filters.sort);
  const items = useSelector((state) => state.pizzas.items);
  //   const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const { searchValue } = useContext(searchContext);

  const onChangeCategori = (id) => {
    dispatch(setCotegoriId(id));
  };

  const onChangeSort = (i) => {
    dispatch(setSortType(i));
  };

  useEffect(() => {
    setIsLoading(true);

    const sortBy = sortType.sortProperty.replace('-', '');
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const category = categoriId > 0 ? `category=${categoriId}` : '';
    const search = searchValue ? `search=${searchValue}` : '';

    fetch(
      `https://62a1b7b3cd2e8da9b0f86c11.mockapi.io/items?${category}&page=${currentPage}&limit=4&sortBy=${sortBy}&order=${order}&${search}`
    )
      .then((res) => res.json())
      .then((arr) => {
        dispatch(setItems(arr));
        // setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoriId, sortType, searchValue, currentPage, dispatch]);

  return (
    <>
      <div className="content">
        <Categories
          categoriId={categoriId}
          onClickCategori={onChangeCategori}
        />
        <Sort sortType={sortType} onClickSort={onChangeSort} />
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
