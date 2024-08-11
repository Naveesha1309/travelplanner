import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';  
// import { selectGalleryItems } from '../redux/gallerySlice';
import {fetchGalleryItems, selectGalleryItems } from '../redux/gallerySliceapi';  //api
import GalleryItem from './GalleryItem';
import ImageModal from './ImageModal';

const Gallery = () => {
    const dispatch = useDispatch(); //api
    const items = useSelector(selectGalleryItems);
    const [selectedItemIndex, setSelectedItemIndex] = useState(null);

    //api
    useEffect(() => {
        dispatch(fetchGalleryItems());
    }, [dispatch]);
    
    const openModal = (index) => {
        console.log(`Opening modal for image index: ${index}`);
        setSelectedItemIndex(index);
    };

    const closeModal = () => {
        setSelectedItemIndex(null);
    };

    const showNextImage = () => {
        setSelectedItemIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const showPreviousImage = () => {
        setSelectedItemIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {items.map((item, index) => (
                <GalleryItem key={item.id} item={item} index={index} openModal={openModal} />
            ))}
            {selectedItemIndex !== null && (
                <ImageModal
                    item={items[selectedItemIndex]}
                    onClose={closeModal}
                    onNext={showNextImage}
                    onPrevious={showPreviousImage}
                />
            )}
        </div>
    );
};

export default Gallery;
