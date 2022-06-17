import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../redux/slices/cartSlice';
import style from './PizzaBlock.module.scss';

const typeNames = ['тонкое', 'традиционное'];

const PizzaBlock = ({ title, price, imageUrl, sizes, types, id }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) =>
    state.cart.items.find((obj) => obj.id === id)
  );
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAdd = () => {
    const item = {
      id,
      title,
      price,
      imageUrl,
      type: typeNames[activeType],
      size: sizes[activeSize],
    };

    dispatch(addItem(item));
  };

  return (
    <>
      <div className={style.pizzaBlock}>
        <img
          className={style.pizzaBlockImage}
          src={imageUrl}
          alt="PizzaImage"
        />
        <h4 className={style.pizzaBlockTitle}>{title}</h4>
        <div className={style.pizzaBlockSelector}>
          <ul>
            {types.map((typeIndex) => (
              <li
                key={typeIndex}
                onClick={() => setActiveType(typeIndex)}
                className={activeType === typeIndex ? style.active : ''}>
                {typeNames[typeIndex]}
              </li>
            ))}
          </ul>
          <ul>
            {sizes.map((size, index) => (
              <li
                key={index}
                onClick={() => setActiveSize(index)}
                className={activeSize === index ? style.active : ''}>
                {size} см.
              </li>
            ))}
          </ul>
        </div>
        <div onClick={onClickAdd} className={style.pizzaBlockBottom}>
          <div className={style.pizzaBlockPrice}>от {price}р.</div>
          <div className={style.button}>
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
            {addedCount > 0 && <i>{addedCount}</i>}
          </div>
        </div>
      </div>
    </>
  );
};

export default PizzaBlock;
