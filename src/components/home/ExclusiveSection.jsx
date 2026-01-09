import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './ExclusiveSection.css';

const ExclusiveSection = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const offers = [
    {
      id: 1,
      title: "WOYAGE - DAYCATIONS",
      image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Escape for a day of luxury and relaxation.",
      link: "MORE"
    },
    {
      id: 2,
      title: "NEW BEGINNINGS",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Enjoy exclusive savings on breakfast-inclusive stays and celebrate new beginnings with us.",
      link: "MORE"
    },
    {
      id: 3,
      title: "NEUPASS",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Unlock a world of rewards and privileges.",
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

  return (
    <section className="exclusive-section">
      <div className="exclusive-container">
        {offers.map((offer, index) => {
          let position = 'side';
          if (index === activeIndex) position = 'center';

          return (
            <div key={offer.id} className={`offer-card ${position}`} onClick={() => setActiveIndex(index)}>
              <div className="offer-image-container">
                <img src={offer.image} alt={offer.title} />
                {position !== 'center' && <div className="dark-overlay"></div>}

                {position !== 'center' && (
                  <h3 className="side-title">{offer.title}</h3>
                )}
              </div>

              {position === 'center' && (
                <div className="offer-details">
                  <div className="offer-details-content">
                    <h3>{offer.title}</h3>
                    <p>{offer.description}</p>
                    <span className="offer-link">{offer.link} &gt;</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        <button className="nav-btn prev" onClick={handlePrev}><FaChevronLeft /></button>
        <button className="nav-btn next" onClick={handleNext}><FaChevronRight /></button>
      </div>
    </section>
  );
};

export default ExclusiveSection;
