
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center bg-gray-50 py-20">
        <div className="text-center max-w-md px-4">
          <h1 className="text-6xl font-bold text-youth-purple mb-4">....</h1>
          <p className="text-2xl text-gray-700 mb-6">Awwh! Not Lost, Just Loading Greatness</p>
          <p className="text-gray-600 mb-8">
          This page is on a secret mission. It'll be back soon with amazing stuff!
          </p>
          <Button asChild className="bg-youth-purple hover:bg-youth-purple/90">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
