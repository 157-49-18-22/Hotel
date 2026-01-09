import React from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/home/Hero';
import AwardBanner from '../components/home/AwardBanner';
import ExclusiveSection from '../components/home/ExclusiveSection';
import DiningSection from '../components/home/DiningSection';
import EventsSection from '../components/home/EventsSection';
import Footer from '../components/layout/Footer';

const Home = () => {
    return (
        <>
            <Navbar />
            <main>
                <Hero />

                <AwardBanner />

                {/* Placeholder for Offers Grid inspired by screenshots */}
                <section className="container" style={{ padding: '80px 20px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <div style={{ width: '60px', height: '1px', background: '#999', margin: '0 auto 20px' }}></div>
                        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', color: '#333' }}>EXPLORE MORE</h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
                        {[
                            { title: "Romantic Getaways", img: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80", subtitle: "Cherish moments together" },
                            { title: "Royal Retreats", img: "https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&w=600&q=80", subtitle: "Live like a Maharaja" },
                            { title: "Wellness Sanctuaries", img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80", subtitle: "Rejuvenate your senses" }
                        ].map((item, index) => (
                            <div key={index} style={{ boxShadow: '0 5px 15px rgba(0,0,0,0.08)', background: 'white' }}>
                                <div style={{ height: '300px', overflow: 'hidden' }}>
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                                        onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                                        onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                                    />
                                </div>
                                <div style={{ padding: '25px', textAlign: 'center' }}>
                                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', marginBottom: '10px' }}>{item.title}</h3>
                                    <p style={{ color: '#666', fontSize: '0.9rem' }}>{item.subtitle}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <ExclusiveSection />

                <DiningSection />

                <EventsSection />

                <Footer />
            </main>
        </>
    );
};

export default Home;
