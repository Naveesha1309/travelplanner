import React from 'react';

const GalleryItem = ({ item, index, openModal }) => {
    return (
        <div
            onClick={() => openModal(index)}
            className="relative cursor-pointer group"
        >
            {/* <img
                src={item.url}
                alt={item.description}
                className="w-full h-auto object-cover transition-transform transform group-hover:scale-105 rounded-lg"
            /> */}
            {/* <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 group-hover:scale-105 flex items-center justify-center transition-opacity rounded-lg">
                <p className="text-white text-sm text-center p-2">
                    {item.description.length > 20
                        ? item.description.substring(0, 20) + '...'
                        : item.description}
                </p> */}

                {/* api */}
                <div className=" flex items-center justify-center rounded-lg bg-yellow-100 p-10 mx-3 my-3">
                <p className="text-black text-sm text-center p-2">
                    {item.name}
                </p>

            </div>
        </div>
    );
};

export default GalleryItem;












// import React from 'react';

// const GalleryItem = ({ item, index, openModal }) => {
//     return (
//         <div onClick={() => openModal(index)} className="cursor-pointer" >
//             <img src={item.url} alt={item.description} className="w-full h-auto object-cover" />
//         </div>
//     );
// };

// export default GalleryItem;
