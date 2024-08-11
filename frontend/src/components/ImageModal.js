//api
import React, { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { TbWorldLongitude, TbWorldLatitude } from "react-icons/tb";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const ImageModal = ({ item, onClose, onNext, onPrevious }) => {
    const [showMap, setShowMap] = useState(false);

    if (!item) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="relative bg-white rounded-lg overflow-hidden shadow-lg transform transition-all sm:max-w-5xl sm:w-full flex">
                <div className="w-1/3 p-6">
                    <p className="text-gray-700 text-lg font-semibold mb-4 bg-yellow-100 rounded-lg p-2">{item.name}</p>
                    
                    <p className="text-gray-600 flex items-center mb-2">
                        <TbWorldLatitude className="mr-2" /> <span className="font-semibold">Latitude: </span> {item.lat}
                    </p>
                    <p className="text-gray-600 flex items-center mb-2">
                        <TbWorldLongitude className="mr-2" /> <span className="font-semibold">Longitude: </span> {item.lng}
                    </p>
                    <p className="text-gray-600 flex items-center mb-2">
                        <FaMapMarkerAlt className="mr-2" /> <span className="font-semibold">Country: </span> {item.country}
                    </p>
                    <div className="mt-6 flex space-x-4">
                        <button
                            onClick={onClose}
                            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
                        >
                            Close
                        </button>
                        <button
                            onClick={() => setShowMap(!showMap)}
                            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                        >
                            {showMap ? 'Hide Map' : 'Show Map'}
                        </button>
                    </div>
                    {showMap && (
                        <div className="mt-4 h-64 w-full">
                            <MapContainer center={[item.lat, item.lng]} zoom={13} style={{ height: '100%', width: '100%' }}>
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                />
                                <Marker position={[item.lat, item.lng]}>
                                    <Popup>
                                        {item.name}, {item.country}
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </div>
                    )}
                </div>
            </div>
            <button
                onClick={onPrevious}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-r-md hover:bg-gray-700 transition"
            >
                &#9664;
            </button>
            <button
                onClick={onNext}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-l-md hover:bg-gray-700 transition"
            >
                &#9654;
            </button>
        </div>
    );
};

export default ImageModal;



//image
// import React from 'react';
// import { FaCalendarAlt, FaMapMarkerAlt, FaExpandAlt } from 'react-icons/fa';


// const ImageModal = ({ item, onClose, onNext, onPrevious }) => {
//     if (!item) return null;

//     return (
//         <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
//             <div className="relative bg-white rounded-lg overflow-hidden shadow-lg transform transition-all sm:max-w-5xl sm:w-full flex">
//                 <div className="w-2/3">
//                     <img src={item.url} alt={item.description} className="w-full h-auto object-cover lg:h-full" />
//                 </div>
//                 <div className="w-1/3 p-6">
//                     <p className="text-gray-700 text-lg font-semibold mb-4 bg-yellow-100 rounded-lg p-2">{item.description}</p>

                
//                     <p className="text-gray-600 flex items-center mb-2">
//                         <FaMapMarkerAlt className="mr-2" /> <span className="font-semibold">Location:</span> {item.location}
//                     </p>
//                  
//                     <button
//                         onClick={onClose}
//                         className="mt-6 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
//                     >
//                         Close
//                     </button>
//                 </div>
//             </div>
//             <button
//                 onClick={onPrevious}
//                 className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-r-md hover:bg-gray-700 transition"
//             >
//                 &#9664;
//             </button>
//             <button
//                 onClick={onNext}
//                 className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-l-md hover:bg-gray-700 transition"
//             >
//                 &#9654;
//             </button>
//         </div>
//     );
// };

// export default ImageModal;