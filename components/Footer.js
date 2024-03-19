import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white py-4 mt-16">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} GoIndianStocks. All rights reserved.</p>
        <div className="mt-4">
          <a href="#" className="text-blue-200 hover:underline mx-2">Privacy Policy</a>
          <span className="text-blue-200">|</span>
          <a href="#" className="text-blue-200 hover:underline mx-2">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
