import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import qs from 'qs';
import Categories from '../components/Categories/Categories';
import Sort, { sortList } from '../components/Sort/Sort';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import PizzaBlockSkeleton from '../components/PizzaBlock/PizzaBlockSkeleton';
import Pagination from '../components/Pagination/Pagination';
import { useContext } from 'react';
import { searchContext } from '../App';
import { useSelector, useDispatch } from 'react-redux';
import {
  setCotegoriId,
  setSortType,
  setCurrentPage,
  setFilters,
} from '../redux/slices/filterSlice';
import { setItems } from '../redux/slices/pizzasSlice';
import axios from 'axios';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const categoriId = useSelector((state) => state.filters.categoriId);
  const sortType = useSelector((state) => state.filters.sort);
  const currentPage = useSelector((state) => state.filters.currentPage);
  const items = useSelector((state) => state.pizzas.items);
  //   const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { searchValue } = useContext(searchContext);

  const onChangeCategori = (id) => {
    dispatch(setCotegoriId(id));
  };

  const onChangeSort = (i) => {
    dispatch(setSortType(i));
  };

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  const fetchPizzas = () => {
    setIsLoading(true);

    const sortBy = sortType.sortProperty.replace('-', '');
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const category = categoriId > 0 ? `category=${categoriId}` : '';
    const search = searchValue ? `search=${searchValue}` : '';

    axios
      .get(
        `https://62a1b7b3cd2e8da9b0f86c11.mockapi.io/items?${category}&page=${currentPage}&limit=4&sortBy=${sortBy}&order=${order}&${search}`
      )
      .then((res) => {
        dispatch(setItems(res.data));
        // setItems(res.data);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!isSearch.current) {
      fetchPizzas();
    }
    isSearch.current = false;
  }, [categoriId, sortType, currentPage]);

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        categoriId,
        sortType,
        currentPage,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoriId, sortType, currentPage]);

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sort = sortList.find(
        (obj) => obj.sortProperty === params.sortType.sortProperty
      );
      dispatch(
        setFilters({
          ...params,
          sort,
        })
      );
      isSearch.current = true;
    }
  }, []);

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
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </>
  );
};

export default Home;
