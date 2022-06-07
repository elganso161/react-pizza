import React, { useState } from 'react';

import style from './PizzaBlock.module.scss';

const PizzaBlock = ({ title, price }) => {
  const [count, setCount] = useState(0);

  const countHandler = () => {
    return setCount(count + 1);
  };

  return (
    <>
      <div className={style.pizzaBlock}>
        <img
          className={style.pizzaBlockImage}
          src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
          alt="Pizza"
        />
        <h4 className={style.pizzaBlockTitle}>{title}</h4>
        <div className={style.pizzaBlockSelector}>
          <ul>
            <li className={style.active}>тонкое</li>
            <li>традиционное</li>
          </ul>
          <ul>
            <li className={style.active}>26 см.</li>
            <li>30 см.</li>
            <li>40 см.</li>
          </ul>
        </div>
        <div className={style.pizzaBlockBottom}>
          <div className={style.pizzaBlockPrice}>от {price}р.</div>
          <div className={style.button} onClick={countHandler}>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span> &#160;Добавить&#160;</span>
            <i>{count}</i>
          </div>
        </div>
      </div>
    </>
  );
};

export default PizzaBlock;
