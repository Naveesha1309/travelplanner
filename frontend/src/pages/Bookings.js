import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const userId = localStorage.getItem('userId');
        const response = await axios.get(`http://localhost:5097/api/Booking?userId=${userId}`);
        setBookings(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch bookings');
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const handleCancelBooking = async (bookingId) => {
    try {
      await axios.delete(`http://localhost:5097/api/Booking/${bookingId}`);
      setBookings(bookings.filter(booking => booking.bookingId !== bookingId));
    } catch (err) {
      setError('Failed to cancel booking');
    }
  };

  if (loading) return <div className="text-center mt-8">Loading...</div>;
  if (error) return <div className="text-center mt-8 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto mt-8 px-4">
  <h1 className="text-3xl font-bold mb-6">My Bookings</h1>
  {bookings.length === 0 ? (
    <p className="text-gray-600">You have no bookings.</p>
  ) : (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <ul className="divide-y divide-gray-200">
        {bookings.map((booking) => (
          <li key={booking.bookingId} className="p-6 hover:bg-gray-50 transition duration-150 ease-in-out">
            <div className="flex items-center justify-between">
              <div className="flex-1 min-w-0">
                <h2 className="text-lg font-semibold text-gray-900 truncate">
                  Booking #{booking.bookingId}
                </h2>
                <p className="mt-1 text-sm text-gray-600">
                  Itinerary: {booking.itineraryId}
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  Status: <span className="font-medium">{booking.status}</span>
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  Booked on: {new Date(booking.bookingDate).toLocaleDateString()}
                </p>
              </div>
              <div className="ml-6 flex-shrink-0">
                <button 
                  onClick={() => handleCancelBooking(booking.bookingId)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150 ease-in-out"
                >
                  Cancel Booking
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )}
</div>
  );
};

export default Bookings;