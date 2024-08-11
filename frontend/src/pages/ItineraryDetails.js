import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ItineraryDetails = () => {
  const [itinerary, setItinerary] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ rating: 5, comment: '' });
  const [editingReview, setEditingReview] = useState(null);
  const { id } = useParams();
  const currentUserId = parseInt(localStorage.getItem('userId'));
  const [username, setUsername] = useState('');

  useEffect(() => {
    const fetchItinerary = async () => {
      try {
        const response = await axios.get(`http://localhost:5097/api/itinerary/${id}`);
        setItinerary(response.data);
      } catch (error) {
        console.error('Error fetching itinerary:', error);
      }
    };

    const fetchReviews = async () => {
      try {
        const response = await axios.get(`http://localhost:5097/api/review/itinerary/${id}`);
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
        setReviews([]);  
      }
    };

    fetchItinerary();
    fetchReviews();
  }, [id]);


  useEffect(() => {
    const getUserDetails = async () => {
      if (reviews.length > 0) {
        try {
          const response = await axios.get(`http://localhost:5097/api/user/${reviews[0].userId}`);
          setUsername(response.data.username);
        } catch (error) {
          console.error('Error fetching user details:', error);
          setUsername('Unknown User');
        }
      }
    };

    getUserDetails();
  }, [reviews]);

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    const reviewData = {
      userId: currentUserId,
      itineraryId: parseInt(id),
      rating: parseInt(newReview.rating),
      comment: newReview.comment
    };
    console.log('Submitting review:', reviewData);

    try {
      const response = await axios.post('http://localhost:5097/api/review', reviewData);
      console.log('Review submitted successfully:', response.data);
      setReviews([...reviews, response.data]);
      setNewReview({ rating: 5, comment: '' });
    } catch (error) {
      console.error('Error submitting review:', error.response ? error.response.data : error.message);
      console.error('Error details:', error);
    }
  };


  const handleReviewUpdate = async (reviewId, updatedReview) => {
    try {
      await axios.put(`http://localhost:5097/api/review/${reviewId}`, updatedReview);
      setReviews(reviews.map(r => (r.reviewId === reviewId ? updatedReview : r)));
      setEditingReview(null);
    } catch (error) {
      console.error('Error updating review:', error);
    }
  };

  const handleReviewDelete = async (reviewId) => {
    try {
      await axios.delete(`http://localhost:5097/api/review/${reviewId}`);
      setReviews(reviews.filter(r => r.reviewId !== reviewId));
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  };

  const startEditing = (review) => {
    setEditingReview({ ...review });
  };

  const cancelEditing = () => {
    setEditingReview(null);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditingReview({ ...editingReview, [name]: value });
  };

  if (!itinerary) return <div>Loading...</div>;

  return (
    <div className="container mx-auto mt-8 px-4 sm:px-6 lg:px-8">
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <div className="flex flex-col md:flex-row">
  
      <div className="md:w-2/3 h-64 md:h-auto bg-cover bg-center" style={{backgroundImage: 'url(https://cdn.pixabay.com/photo/2023/10/27/23/10/mountain-8346389_1280.jpg)'}}></div>


      <div className="md:w-1/3 p-6">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">{itinerary.name}</h1>
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <p className="text-sm font-semibold text-gray-700 mb-2">Duration: {itinerary.duration} days</p>
          <p className="text-sm text-gray-600 mb-1">Start: {new Date(itinerary.startDate).toLocaleDateString()}</p>
          <p className="text-sm text-gray-600">End: {new Date(itinerary.endDate).toLocaleDateString()}</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Description</h2>
          <p className="text-gray-600">{itinerary.description}</p>
        </div>
      </div>
    </div>

    {/* Reviews section */}
    <div className="p-6 bg-gray-50">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Reviews</h2>
      
      {reviews.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map(review => (
            <div key={review.reviewId} className="bg-white p-4 rounded shadow">
              {editingReview && editingReview.reviewId === review.reviewId ? (
                <form onSubmit={(e) => { e.preventDefault(); handleReviewUpdate(review.reviewId, editingReview); }}>
                  <select 
                    name="rating"
                    value={editingReview.rating} 
                    onChange={handleEditChange}
                    className="w-full mb-2 p-2 border rounded"
                  >
                    {[1, 2, 3, 4, 5].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                  <textarea 
                    name="comment"
                    value={editingReview.comment} 
                    onChange={handleEditChange}
                    className="w-full mb-2 p-2 border rounded"
                    rows="3"
                  />
                  <div className="flex justify-end space-x-2">
                    <button type="submit" className="bg-yellow-500 text-white px-3 py-1 rounded text-sm">Update</button>
                    <button type="button" onClick={cancelEditing} className="bg-gray-300 text-gray-700 px-3 py-1 rounded text-sm">Cancel</button>
                  </div>
                </form>
              ) : (
                <>
                  <div className="flex items-center mb-2">
                    <span className="text-lg font-semibold mr-2">{review.rating}/5</span>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className={`w-4 h-4 ${star <= review.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                  </div>
          
                  <p className="text-sm font-medium text-gray-700 mb-1">By: {username}</p>  
                  <p className="text-sm text-gray-600 mb-2">{review.comment}</p>
                  {review.userId === currentUserId && (
                    <div className="flex justify-end space-x-2">
                      <button onClick={() => startEditing(review)} className="text-blue-500 text-sm">Edit</button>
                      <button onClick={() => handleReviewDelete(review.reviewId)} className="text-red-500 text-sm">Delete</button>
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 italic">No reviews yet.</p>
      )}

      <form onSubmit={handleReviewSubmit} className="mt-8 bg-white p-4 rounded shadow">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Add a Review</h3>
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium text-gray-700">Rating:</label>
          <select 
            value={newReview.rating} 
            onChange={(e) => setNewReview({...newReview, rating: parseInt(e.target.value)})}
            className="w-full p-2 border rounded"
          >
            {[1, 2, 3, 4, 5].map(num => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium text-gray-700">Comment:</label>
          <textarea 
            value={newReview.comment} 
            onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
            className="w-full p-2 border rounded"
            rows="3"
          />
        </div>
        <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded">Submit Review</button>
      </form>
    </div>
  </div>
</div>
  );
};

export default ItineraryDetails;



