import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';

// RF005 & RF007: Busca todos os produtos com suas composições
export const fetchProducts = createAsyncThunk('products/fetch', async () => {
  const response = await api.get('/products');
  return response.data;
});

// RF005 & RF007: Salva um novo produto (incluindo a lista de materiais)
export const saveProduct = createAsyncThunk('products/save', async (product) => {
  const response = await api.post('/products', product);
  return response.data;
});

// RF008: Busca a lógica de sugestão que criamos no Quarkus
export const fetchProductionSuggestion = createAsyncThunk('products/fetchSuggestion', async () => {
  const response = await api.get('/products/suggestion');
  return response.data;
});

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    suggestion: { suggestedProduction: [], totalValue: 0 },
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle fetchProducts
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = 'succeeded';
      })
      // Handle saveProduct
      .addCase(saveProduct.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      // Handle fetchProductionSuggestion
      .addCase(fetchProductionSuggestion.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductionSuggestion.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.suggestion = action.payload;
      })
      .addCase(fetchProductionSuggestion.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;