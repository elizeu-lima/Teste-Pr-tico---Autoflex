import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';

export const fetchMaterials = createAsyncThunk('materials/fetch', async () => {
  const response = await api.get('/raw-materials');
  return response.data;
});

export const saveMaterial = createAsyncThunk('materials/save', async (material) => {
  const response = await api.post('/raw-materials', material);
  return response.data;
});

const materialSlice = createSlice({
  name: 'materials',
  initialState: { items: [], status: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMaterials.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = 'succeeded';
      })
      .addCase(saveMaterial.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
  },
});

export default materialSlice.reducer;