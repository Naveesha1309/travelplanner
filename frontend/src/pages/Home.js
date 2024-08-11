import React from 'react';
import { Link} from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gray-100">
  
      <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url(https://cdn.pixabay.com/photo/2023/10/27/23/10/mountain-8346389_1280.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-5xl font-bold mb-4">Welcome to Travel Planner</h1>
          <p className="text-2xl mb-8">Plan your next adventure with ease!</p>
          <Link to="/register" className="px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-white font-bold rounded">Get Started</Link>
        </div>
      </section>

   
      <section className="py-20 bg-yellow-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="https://cdn.pixabay.com/photo/2017/09/04/16/58/passport-2714675_1280.jpg" alt="Feature 1" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-bold mb-2">Well-planned Itineraries</h3>
              <p className="text-gray-700">Pick up travel plans tailored to your interests and preferences.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="https://media.istockphoto.com/id/876456638/photo/travel-booking-hotels-and-flights-reservation.jpg?s=1024x1024&w=is&k=20&c=smo5O73wdaTTFITiUmZVXSoscPYrvbl7Jfqhr6kX-mk=" alt="Feature 2" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-bold mb-2">Easy Booking and Cancellations</h3>
              <p className="text-gray-700">Convinient & Faster Booking and hassle-free Cancellations</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="https://media.istockphoto.com/id/1308610989/photo/shot-of-a-young-female-call-center-agent-working-in-office-stock-photo.jpg?s=1024x1024&w=is&k=20&c=qk8MlwuhO4l5LhvL5B-M_LR1U8Kg1sgAuU2jWLHvenk=" alt="Feature 3" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-bold mb-2">24/7 Support</h3>
              <p className="text-gray-700">Get assistance anytime with our 24/7 customer support service.</p>
            </div>
          </div>
        </div>
      </section>

    
      <section className="bg-gray-800 text-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <p className="mb-4">"Travel Planner made booking my trip so easy and stress-free. Highly recommend!"</p>
              <h3 className="text-2xl font-bold">Jane Cooper</h3>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <p className="mb-4">"The planned itineraries were perfect for our family vacation. We had an amazing time!"</p>
              <h3 className="text-2xl font-bold">Elley Watt</h3>
            </div>
          </div>
        </div>
      </section>

 
      <section className=" bg-yellow-50 text-black py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to start your adventure?</h2>
          <p className="text-xl mb-8">Sign up now and get exclusive access to the best travel deals and itineraries.</p>
          <Link to="/register" className="text-white bg-gray-700 hover:bg-gray-800 ml-2 px-3 py-2 rounded-md text-sm font-medium">Register</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
