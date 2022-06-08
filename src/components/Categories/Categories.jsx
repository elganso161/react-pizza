import React, { useState } from 'react';
import style from './Categories.module.scss';

const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ];

  const onClickCategory = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <div className={style.categories}>
        <ul>
          {categories.map((value, index) => (
            <li
              key={index}
              onClick={() => onClickCategory(index)}
              className={activeIndex === index ? style.active : ''}>
              {value}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Categories;
