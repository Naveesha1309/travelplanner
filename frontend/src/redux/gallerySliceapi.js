import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchGalleryItems = createAsyncThunk(
    'gallery/fetchGalleryItems',
    async () => {
        const response = await axios.post('https://travel-places.p.rapidapi.com/', {
            query: `
                query MyQuery {
                    getPlaces {
                        id
                        name
                        country
                        lat
                        lng
                    }
                }
            `
        }, {
            headers: {
                'x-rapidapi-key': 'enteryourkey',
                'x-rapidapi-host': 'travel-places.p.rapidapi.com',
                'Content-Type': 'application/json'
            }
        });
        return response.data.data.getPlaces;
    }
);

const gallerySlice = createSlice({
    name: 'gallery',
    initialState: {
        items: [],
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGalleryItems.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchGalleryItems.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchGalleryItems.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export const selectGalleryItems = (state) => state.gallery.items;

export default gallerySlice.reducer;
