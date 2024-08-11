import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Itineraries = () => {
  const [itineraries, setItineraries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  

  useEffect(() => {
    const fetchItineraries = async () => {
      try {
        const response = await axios.get('http://localhost:5097/api/itinerary');
        setItineraries(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch itineraries');
        setLoading(false);
      }
    };

    fetchItineraries();
  }, []);

  const handleBook = async (itineraryId) => {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      navigate('/login');
      return;
    }

    try {
      await axios.post('http://localhost:5097/api/Booking', {
        userId: parseInt(userId),
        itineraryId: itineraryId,
        status: 'Booked',
        bookingDate: new Date().toISOString().split('T')[0]
      });
      navigate('/bookings');
    } catch (err) {
      setError('Failed to book itinerary');
      console.error('Booking error:', err.response ? err.response.data : err.message);
    }
  };

  const handleItinerary = (itineraryId) => {
    navigate(`/itinerary/${itineraryId}`);
  };


  
  if (loading) return <div className="text-center mt-8">Loading...</div>;
  if (error) return <div className="text-center mt-8 text-red-500">{error}</div>;

  return (
    <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: 'url(https://cdn.pixabay.com/photo/2023/10/27/23/10/mountain-8346389_1280.jpg)' }}>
  <div className="container mx-auto px-4 py-12">
    <div className="bg-black bg-opacity-50 rounded-lg p-8 mb-12">
      <h1 className="text-5xl font-bold text-white text-center mb-4">Discover Your Next Adventure</h1>
      <p className="text-xl text-gray-200 text-center">Embark on unforgettable journeys with our handcrafted itineraries</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {itineraries.map((itinerary) => (
        <div key={itinerary.itineraryId} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
          <div className="h-48 bg-gray-300 relative">
            <img 
              src={itinerary.imageUrl || 'https://via.placeholder.com/400x400'} //pending - add url to database
              alt={itinerary.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <h2 className="text-2xl font-bold text-white">{itinerary.name}</h2>
            </div>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <p className="text-sm text-gray-600">
                {new Date(itinerary.startDate).toLocaleDateString()} - {new Date(itinerary.endDate).toLocaleDateString()}
              </p>
              <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-full">
              {Math.ceil((new Date(itinerary.endDate) - new Date(itinerary.startDate)) / (1000 * 60 * 60 * 24))} days
              </span>
            </div>
            <p className="text-gray-700 mb-4 line-clamp-3">{itinerary.description}</p>
            <div className="flex justify-between">
              <button 
                onClick={() => handleItinerary(itinerary.itineraryId)} 
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded transition duration-300"
              >
                View Details
              </button>
              <button 
                onClick={() => handleBook(itinerary.itineraryId)} 
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition duration-300"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
  );
};

export default Itineraries;