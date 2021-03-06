import debounce from 'lodash.debounce';
import React, { useContext, useState } from 'react';
import { useCallback } from 'react';
import { useRef } from 'react';
import { searchContext } from '../../App';

import style from './Search.module.scss';

const Search = () => {
  const [value, setValue] = useState('');
  const { setSearchvalue } = useContext(searchContext);
  const inputRef = useRef();

  const onCllickClear = () => {
    setSearchvalue('');
    inputRef.current.focus();
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateSearchValue = useCallback(
    debounce((str) => {
      setSearchvalue(str);
    }, 500),
    []
  );

  function onChangeInput(e) {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  }

  return (
    <div className={style.root}>
      <svg
        className={style.icon}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20.56,18.44l-4.67-4.67a7,7,0,1,0-2.12,2.12l4.67,4.67a1.5,1.5,0,0,0,2.12,0A1.49,1.49,0,0,0,20.56,18.44ZM5,10a5,5,0,1,1,5,5A5,5,0,0,1,5,10Z"
          fill="#464646"
        />
      </svg>
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={style.input}
        placeholder="Поиск пиццы..."
      />

      {value && (
        <svg
          onClick={onCllickClear}
          className={style.clearIcon}
          data-name="Layer 1"
          height="200"
          id="Layer_1"
          viewBox="0 0 200 200"
          width="200"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
        </svg>
      )}
    </div>
  );
};

export default Search;
