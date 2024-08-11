import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [
        { 
            id: 1, 
            url: 'https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 
            description: 'Beautiful view of the Tokyo skyline at night with Tokyo Skytree', 
            location: 'Tokyo, Japan' 
        },
        { 
            id: 2, 
            url: 'https://images.pexels.com/photos/307007/pexels-photo-307007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 
            description: 'Comunidad de Madrid beach in Spain with group of people enjoying the water',
            location: 'Madrid, Spain',
           
        },
        { 
            id: 3, 
            url: 'https://images.pexels.com/photos/248195/pexels-photo-248195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 
            description: 'Serene Mt. Fuji of Japan',
            location: 'Fuji, Shizuoka, Japan' 
        },
        { 
            id: 4, 
            url: 'https://images.pexels.com/photos/1308940/pexels-photo-1308940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 
            description: 'Paris skyline with Eiffel Tower in view',
            location: 'Paris, France'
        },
        { 
            id: 5, 
            url: 'https://images.pexels.com/photos/2848492/pexels-photo-2848492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 
            description: 'Seoul tower with cherry blossom framing the picture',
            location: 'Seoul, South Korea',
        },
        {
            id: 6, 
            url: 'https://images.pexels.com/photos/17423830/pexels-photo-17423830/free-photo-of-taj-mahal-in-agra.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', 
            description: 'Taj Mahal at sunrise',
            location: 'Agra, India'
        },
        {
            id: 7, 
            url: 'https://images.pexels.com/photos/1141853/pexels-photo-1141853.jpeg?auto=compress&cs=tinysrgb&w=600', 
            description: 'Golden Gate Bridge in fog',
            location: 'San Francisco, USA' 
        },
        {
            id: 8, 
            url: 'https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&w=600', 
            description: 'Louvre Museum with glass pyramid', 
            location: 'Paris, France'
        },
        {
            id: 9, 
            url: 'https://images.pexels.com/photos/1634278/pexels-photo-1634278.jpeg?auto=compress&cs=tinysrgb&w=600', 
            description: 'Times Square street view', 
            location: 'New York, USA'
        },
    
        {
            id: 10, 
            url: 'https://images.pexels.com/photos/301469/pexels-photo-301469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 
            description: 'Neuschwanstein Castle in winter',
            location: 'Bavaria, Germany'
        }
    ]
};



const gallerySlice = createSlice({
    name: 'gallery',
    initialState,
    reducers: {}
});

export const selectGalleryItems = (state) => state.gallery.items;

export default gallerySlice.reducer;
