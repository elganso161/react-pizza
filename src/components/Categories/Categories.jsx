import React from 'react';
import style from './Categories.module.scss';

const Categories = ({ categoriId, onClickCategori }) => {
  const categories = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ];

  return (
    <>
      <div className={style.categories}>
        <ul>
          {categories.map((categoryName, index) => (
            <li
              key={index}
              onClick={() => onClickCategori(index)}
              className={categoriId === index ? style.active : ''}>
              {categoryName}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Categories;
