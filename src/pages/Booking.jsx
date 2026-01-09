import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Booking = () => {
    return (
        <>
            <Navbar />
            <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5f5f5' }}>
                <div style={{ background: 'white', padding: '50px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', textAlign: 'center', maxWidth: '600px', width: '90%' }}>
                    <h1 style={{ fontFamily: 'var(--font-heading)', marginBottom: '20px', color: 'var(--primary-gold)' }}>Book Your Stay</h1>
                    <p style={{ marginBottom: '30px', color: '#666' }}>Select your dates and destination to find the perfect luxury experience.</p>

                    <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <input type="text" placeholder="Destination / Hotel Name" style={{ padding: '15px', border: '1px solid #ddd', fontSize: '1rem' }} />
                        <div style={{ display: 'flex', gap: '20px' }}>
                            <input type="date" style={{ flex: 1, padding: '15px', border: '1px solid #ddd', fontSize: '1rem' }} />
                            <input type="date" style={{ flex: 1, padding: '15px', border: '1px solid #ddd', fontSize: '1rem' }} />
                        </div>
                        <select style={{ padding: '15px', border: '1px solid #ddd', fontSize: '1rem' }}>
                            <option>1 Room, 2 Guests</option>
                            <option>2 Rooms, 4 Guests</option>
                        </select>
                        <button style={{
                            backgroundColor: 'var(--primary-gold)',
                            color: 'var(--text-dark)',
                            padding: '20px',
                            fontSize: '1rem',
                            fontWeight: 'bold',
                            letterSpacing: '1px',
                            textTransform: 'uppercase'
                        }}>
                            Search Availability
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Booking;
