import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 text-center">
      <div className="footer-links flex justify-center gap-8 mb-4">
        <a href="#" className="hover:text-yellow-500">Home</a>
        <a href="#" className="hover:text-yellow-500">Properties</a>
        <a href="#" className="hover:text-yellow-500">About Us</a>
        <a href="#" className="hover:text-yellow-500">Contact</a>
      </div>
      <div className="social-icons flex justify-center gap-6 mb-4">
        <a href="#" className="fab fa-facebook-f hover:text-yellow-500 text-2xl"></a>
        <a href="#" className="fab fa-twitter hover:text-yellow-500 text-2xl"></a>
        <a href="#" className="fab fa-instagram hover:text-yellow-500 text-2xl"></a>
        <a href="#" className="fab fa-linkedin hover:text-yellow-500 text-2xl"></a>
      </div>
      <div className="copyright">
        &copy; 2024 Real Estate App
      </div>
    </footer>
  );
};

export default Footer;
