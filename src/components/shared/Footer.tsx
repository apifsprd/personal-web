import React from 'react';

function Footer() {
  return (
    <footer className="w-[100%] h-[5%] flex justify-center items-center">
      <p className="text-sm font-montserrat text-gray-600">
        &copy; {new Date().getFullYear()} Apif Supriadi
      </p>
    </footer>
  );
}

export default Footer;
