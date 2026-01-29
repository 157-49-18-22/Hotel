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
                            { title: "Romantic Getaways", img: "/Hotle pics/WhatsApp Image 2026-01-29 at 12.46.08 PM.jpeg", subtitle: "Cherish moments together" },
                            { title: "Royal Retreats", img: "/Hotle pics/WhatsApp Image 2026-01-29 at 12.56.54 PM.jpeg", subtitle: "Live like a Maharaja" },
                            { title: "Wellness Sanctuaries", img: "/Hotle pics/WhatsApp Image 2026-01-29 at 12.46.10 PM (1).jpeg", subtitle: "Rejuvenate your senses" }
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
