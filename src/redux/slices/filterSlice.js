import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoriId: 0,
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
  },
});

export const { setCotegoriId, setSortType } = filterSlice.actions;

export default filterSlice.reducer;
