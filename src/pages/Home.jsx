import React from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/home/Hero';
import AwardBanner from '../components/home/AwardBanner';
import ExclusiveSection from '../components/home/ExclusiveSection';
import DiningSection from '../components/home/DiningSection';
import EventsSection from '../components/home/EventsSection';
import Footer from '../components/layout/Footer';
import { AnimatedSection, AnimatedDiv, AnimatedTitle, fadeInUp, staggerContainer, scaleIn } from '../components/Animations';

import './Home.css';

const Home = () => {
    return (
        <>
            <Navbar />
            <main>
                <Hero />

                <AnimatedSection variant={fadeInUp}>
                    <AwardBanner />
                </AnimatedSection>

                {/* Animated Offers Grid */}
                <AnimatedSection className="container home-offers-section">
                    <div className="offers-header">
                        <div className="header-line"></div>
                        <AnimatedTitle className="section-title">
                            EXPLORE MORE
                        </AnimatedTitle>
                    </div>
                    <AnimatedDiv
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="offers-grid"
                    >
                        {[
                            { title: "Romantic Getaways", img: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80", subtitle: "Cherish moments together" },
                            { title: "Royal Retreats", img: "https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&w=600&q=80", subtitle: "Live like a Maharaja" },
                            { title: "Wellness Sanctuaries", img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80", subtitle: "Rejuvenate your senses" }
                        ].map((item, index) => (
                            <AnimatedDiv
                                key={index}
                                variant={scaleIn}
                                className="offer-card"
                                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            >
                                <div className="offer-card-image-wrapper">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="offer-card-image"
                                    />
                                </div>
                                <div className="offer-card-content">
                                    <h3 className="offer-card-title">{item.title}</h3>
                                    <p className="offer-card-subtitle">{item.subtitle}</p>
                                </div>
                            </AnimatedDiv>
                        ))}
                    </AnimatedDiv>
                </AnimatedSection>

                <AnimatedSection delay={0.2}>
                    <ExclusiveSection />
                </AnimatedSection>

                <AnimatedSection delay={0.2}>
                    <DiningSection />
                </AnimatedSection>

                <AnimatedSection delay={0.2}>
                    <EventsSection />
                </AnimatedSection>

                <Footer />
            </main>
        </>
    );
};

export default Home;
