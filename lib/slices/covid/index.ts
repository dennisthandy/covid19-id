import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import { getCovid } from '../../api'
import { LoadingThunk } from '../../types'

//Define interface fot initial state
interface CovidState {
  data: null
  loading: LoadingThunk
  error: boolean
}

// Define async thunk
export const getData = createAsyncThunk(
  'covid/getData',
  async () => {
    const response = await getCovid();
    return response
  }
)

// Define the initial state using that type
export const initialState: CovidState = {
  data: null,
  loading: 'idle',
  error: false
}

export const covidSlice = createSlice({
  name: 'school',
  initialState,
  reducers: {
    resetLoading: (state) => {
      state.loading = 'idle'
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state) => {
      state.loading = 'pending';
    });

    builder.addCase(getData.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.loading = 'success';
    });

    builder.addCase(getData.rejected, (state) => {
      state.loading = 'failed';
      state.error = true
    });

  }
})

export const { resetLoading } = covidSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCovid = (state: RootState): null => state.covid.data;


export default covidSlice.reducer
