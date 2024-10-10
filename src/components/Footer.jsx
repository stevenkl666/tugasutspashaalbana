import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f0f0f0' }}>
      <p>&copy; {currentYear} Your Company Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
