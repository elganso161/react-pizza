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
    setFilters(state, action) {
      state.sort = action.payload.sort;
      state.currentPage = Number(action.payload.currentPage);
      state.categoriId = Number(action.payload.categoriId);
    },
  },
});

export const { setCotegoriId, setSortType, setCurrentPage, setFilters } =
  filterSlice.actions;

export default filterSlice.reducer;
