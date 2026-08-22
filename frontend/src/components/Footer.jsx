import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{
      background: '#E0F7FA',
      borderTop: '1px solid rgba(0, 121, 107, 0.16)',
      padding: '40px 20px',
      marginTop: 'auto'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '20px'
      }}>
        <div>
          <h3 style={{ color: '#4CAF50', marginBottom: '10px' }}>Shoppy Cart</h3>
          <p style={{ color: '#00796B', fontSize: '0.9rem' }}>Premium E-Commerce Platform.</p>
        </div>
        
        <div style={{ display: 'flex', gap: '20px' }}>
          <Link to="/about" style={{ color: '#00796B', fontSize: '0.9rem' }}>About Us</Link>
          <Link to="/return" style={{ color: '#00796B', fontSize: '0.9rem' }}>Return Policy</Link>
          <Link to="/disclaimer" style={{ color: '#00796B', fontSize: '0.9rem' }}>Disclaimer</Link>
        </div>
        
        <div style={{ color: '#00796B', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} Shoppy Cart. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
