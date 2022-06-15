import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoriId: 0,
  currentPage: 1,
  sort: {
    name: 'популярность(DESC)',
    sortProperty: 'rating',
  },
};

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCotegoriId(state, action) {
      state.categoriId = action.payload;
    },
    setSortType(state, action) {
      state.sort = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

export const { setCotegoriId, setSortType, setCurrentPage } =
  filterSlice.actions;

export default filterSlice.reducer;
