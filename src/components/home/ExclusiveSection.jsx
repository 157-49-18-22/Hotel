import React, { useState, useRef, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './ExclusiveSection.css';

const ExclusiveSection = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const offers = [
    {
      id: 1,
      title: "LUXURY DAYCATIONS",
      image: "/Hotle pics/WhatsApp Image 2026-01-29 at 12.46.11 PM.jpeg",
      description: "Escape for a day of luxury in our elegant halls and corridors.",
      link: "MORE"
    },
    {
      id: 2,
      title: "ROYAL STAYS",
      image: "/Hotle pics/WhatsApp Image 2026-01-29 at 12.46.10 PM (2).jpeg",
      description: "Enjoy exclusive savings on signature stays and celebrate new beginnings.",
      link: "MORE"
    },
    {
      id: 3,
      title: "ELITE PRIVILEGES",
      image: "/Hotle pics/WhatsApp Image 2026-01-29 at 12.46.09 PM (1).jpeg",
      description: "Unlock a world of rewards and royal privileges with us.",
      link: "MORE"
    }
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? offers.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === offers.length - 1 ? 0 : prev + 1));
  };

  // Logic to determine which items to show based on activeIndex
  // For a simple 3-item static display matching the screenshot:
  // We can just hardcode the positions or use a proper circular buffer.
  // Given only 3 items, let's just render them in order but style the active one differently.

  const containerRef = useRef(null);
  const itemRefs = useRef([]);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  // Scroll to active item on mobile
  useEffect(() => {
    if (window.innerWidth <= 768 && containerRef.current && itemRefs.current[activeIndex]) {
      const container = containerRef.current;
      const card = itemRefs.current[activeIndex];

      const cardLeft = card.offsetLeft;
      const cardWidth = card.offsetWidth;
      const containerWidth = container.offsetWidth;

      // Calculate centered position
      const targetScroll = cardLeft - (containerWidth / 2) + (cardWidth / 2);

      container.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  }, [activeIndex]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="exclusive-section">
      <div className="exclusive-container" ref={containerRef}>
        {offers.map((offer, index) => {
          let position = 'side';
          if (index === activeIndex) position = 'center';

          return (
            <div
              key={offer.id}
              ref={el => itemRefs.current[index] = el}
              className={`offer-card ${position}`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="offer-image-container">
                <img src={offer.image} alt={offer.title} />
                <div className="dark-overlay"></div>
                <h3 className="side-title">{offer.title}</h3>
              </div>

              <div className="offer-details">
                <div className="offer-details-content">
                  <h3>{offer.title}</h3>
                  <p>{offer.description}</p>
                  <span className="offer-link">{offer.link} &gt;</span>
                </div>
              </div>
            </div>
          );
        })}

        <button className="nav-btn prev" onClick={handlePrev}><FaChevronLeft /></button>
        <button className="nav-btn next" onClick={handleNext}><FaChevronRight /></button>
      </div>

      {/* Mobile Pagination Dots */}
      <div className="carousel-dots">
        {offers.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default ExclusiveSection;
