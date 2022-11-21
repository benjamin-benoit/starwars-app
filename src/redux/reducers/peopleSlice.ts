import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import swapiService from '../../api/swapi';
import { People } from '../../api/types';

interface PeopleState {
  data: People | null;
  loading: string;
  error: string;
}

const initialState: PeopleState = {
  data: null,
  loading: 'idle',
  error: '',
};

export const fetchPeople = createAsyncThunk('fetchPeople', async (page: string) => {
  return swapiService.getPeople(page);
});

const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder.addCase(fetchPeople.pending, state => {
      state.loading = 'loading';
    });
    builder.addCase(fetchPeople.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = 'loaded';
    });
    builder.addCase(fetchPeople.rejected, (state, action) => {
      state.loading = 'error';
      state.error = String(action.error.message);
    });
  },
});

// export const { getPeople } = peopleSlice.actions;

export default peopleSlice.reducer;
