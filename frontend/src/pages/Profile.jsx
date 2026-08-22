import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Profile = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
    const fetchMyOrders = async () => {
      try {
        const res = await fetch('/api/orders/myorders', {
          headers: { Authorization: `Bearer ${user.token}` }
        });
        const data = await res.json();
        if (res.ok) {
          setOrders(Array.isArray(data) ? data : []);
        } else {
          // Token obsolete or 401: clear and bounce
          if (res.status === 401) {
             logout();
             navigate('/login');
          }
          setOrders([]);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMyOrders();
  }, [user, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const containerStyle = { maxWidth: '1000px', margin: '40px auto', padding: '30px', background: '#FFFFFF', borderRadius: '12px', border: '1px solid rgba(0,121,107,0.16)', color: '#00796B' };
  const badgeStyle = { background: 'rgba(76,175,80,0.14)', color: '#4CAF50', padding: '6px 12px', borderRadius: '8px', fontSize: '0.9rem', fontWeight: 'bold', display: 'inline-block' };

  if (!user) return null;

  return (
    <div style={containerStyle}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid rgba(0,121,107,0.16)', paddingBottom: '30px', marginBottom: '30px' }}>
        <div>
          <h2 style={{ color: '#00796B', fontSize: '2.2rem', marginBottom: '10px' }}>My Profile</h2>
          <p style={{ color: '#00796B', fontSize: '1.2rem', marginBottom: '5px' }}><strong>Name:</strong> {user.name}</p>
          <p style={{ color: '#00796B', fontSize: '1.2rem', marginBottom: '15px' }}><strong>Email:</strong> {user.email}</p>
          <span style={badgeStyle}>Account Type: {user.role.toUpperCase()}</span>
        </div>
        <button onClick={handleLogout} className="btn" style={{ background: '#00796B', boxShadow: 'none' }}>Logout</button>
      </div>

      <h3 style={{ color: '#4CAF50', marginBottom: '20px', fontSize: '1.5rem' }}>Order History</h3>
      {loading ? (
        <p style={{ color: '#00796B' }}>Fetching your orders...</p>
      ) : orders.length === 0 ? (
        <div style={{ background: '#E0F7FA', padding: '30px', borderRadius: '8px', textAlign: 'center', border: '1px solid rgba(0,121,107,0.16)' }}>
          <p style={{ color: '#00796B', marginBottom: '15px' }}>You haven't placed any orders yet.</p>
          <Link to="/shop" className="btn">Start Shopping</Link>
        </div>
      ) : (
        <div style={{ display: 'grid', gap: '20px' }}>
          {orders.map(order => (
            <div key={order._id} style={{ background: '#E0F7FA', padding: '20px', borderRadius: '12px', border: '1px solid rgba(0,121,107,0.16)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
              <div>
                <p style={{ color: '#00796B', fontSize: '0.9rem', marginBottom: '5px' }}>Order ID: <span style={{ color: '#00796B' }}>{order._id}</span></p>
                <p style={{ color: '#00796B', fontSize: '0.9rem', marginBottom: '5px' }}>Placed On: <span style={{ color: '#00796B' }}>{new Date(order.createdAt).toLocaleDateString()}</span></p>
                <p style={{ color: '#00796B', fontSize: '0.9rem' }}>Total: <strong style={{ color: '#4CAF50' }}>₹{order.totalAmount.toFixed(2)}</strong></p>
              </div>
              <div>
                <span style={{ 
                  background: order.status === 'Delivered' ? 'rgba(76,175,80,0.14)' : order.status === 'Shipped' ? 'rgba(0,121,107,0.14)' : 'rgba(165,214,167,0.32)', 
                  color: order.status === 'Delivered' ? '#4CAF50' : order.status === 'Shipped' ? '#00796B' : '#A5D6A7',
                  padding: '8px 16px', borderRadius: '20px', fontWeight: 'bold' 
                }}>
                  {order.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Profile;
