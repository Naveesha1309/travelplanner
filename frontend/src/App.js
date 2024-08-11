import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { Provider } from 'react-redux';
import store from './redux/store';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Itineraries from './pages/Itinerary';
import Bookings from './pages/Bookings';
import ItineraryDetails from './pages/ItineraryDetails';

function App() {
  return (
    <Provider store={store} >
    <Router>
    <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/destinations" element={
            <div className="container mx-auto">
                <Gallery />
            </div>
          } />
           <Route path="/itineraries" element={<Itineraries />} />
           <Route path="/itinerary/:id" element={<ItineraryDetails />} />
           <Route path="/bookings" element={<Bookings />} />
        </Routes>
        </main>
      </div>
    </Router>
    <Footer />
    </Provider>
  );
}

export default App;


