import React from 'react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-r from-black to-slate-900 shadow-lg py-2 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <p className="text-gray-300">© {currentYear} Travel Planner</p>
                </div>
            </div>
        </footer>
    );
}