import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import './Menu.css';
import { motion } from 'framer-motion';

const Menu = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const menuData = [
        {
            category: "BREAKFAST",
            image: "/break.jpg",
            items: [
                { id: 1, name: "Aloo Parantha", price: "90/-" },
                { id: 2, name: "Gobhi Parantha", price: "90/-" },
                { id: 3, name: "Onion Parantha", price: "90/-" },
                { id: 4, name: "Aloo Onion Parantha", price: "90/-" },
                { id: 5, name: "Mooli Parantha", price: "90/-" },
                { id: 6, name: "Mix Parantha", price: "100/-" },
                { id: 7, name: "Paneer Parantha", price: "120/-" },
                { id: 8, name: "Butter Toast", price: "60/-" },
                { id: 9, name: "Pooha", price: "150/-" },
                { id: 10, name: "Pav Bhaji (2 pc)", price: "80/-" }
            ]
        },
        {
            category: "SNACKS",
            image: "https://images.unsplash.com/photo-1541529086526-db283c563270?q=80&w=2070&auto=format&fit=crop",
            items: [
                { id: 11, name: "Veg Manchurian", price: "240/-" },
                { id: 12, name: "Paneer Manchurian", price: "280/-" },
                { id: 13, name: "Chilli Paneer", price: "260/-" },
                { id: 14, name: "Aloo Chat", price: "170/-" },
                { id: 15, name: "Paneer Pakoda (12 pcs)", price: "200/-" },
                { id: 16, name: "Mix Pakoda (12 pcs)", price: "180/-" },
                { id: 17, name: "Bread Pakoda (2 pcs)", price: "100/-" },
                { id: 18, name: "Cheese Sandwich", price: "100/-" },
                { id: 19, name: "Veg Cutlet", price: "150/-" },
                { id: 20, name: "Plain Maggi", price: "80/-" },
                { id: 21, name: "Veg Maggi", price: "100/-" },
                { id: 22, name: "Dahi Sholay", price: "180/-" },
                { id: 23, name: "Peanut Masala", price: "150/-" },
                { id: 24, name: "Spring Roll", price: "150/-" },
                { id: 25, name: "Veg Sandwich", price: "80/-" },
                { id: 26, name: "Grill Sandwich", price: "120/-" },
                { id: 27, name: "Paneer Achari Tikka", price: "260/-" },
                { id: 28, name: "Paneer Malai Tikka", price: "280/-" },
                { id: 29, name: "Paneer Haryali Tikka", price: "260/-" }
            ]
        },
        {
            category: "CHINESE",
            image: "/chinese.jpg",
            items: [
                { id: 30, name: "Chilli Gobhi", price: "200/-" },
                { id: 31, name: "Chilli Mushroom", price: "220/-" },
                { id: 32, name: "Fried Rice", price: "180/-" },
                { id: 33, name: "Chilli Patato", price: "240/-" }
            ]
        },
        {
            category: "VASMATI RICE",
            image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=2070&auto=format&fit=crop",
            items: [
                { id: 34, name: "Cheese Pulao", price: "200/-" },
                { id: 35, name: "Mutter Pulao", price: "180/-" },
                { id: 36, name: "Veg Pulao", price: "180/-" },
                { id: 37, name: "Handi Pulao", price: "180/-" },
                { id: 38, name: "Plain Rice", price: "140/-" },
                { id: 39, name: "Jeera Rice", price: "160/-" },
                { id: 40, name: "Veg Biryani", price: "220/-" }
            ]
        },
        {
            category: "TANDOORI STARTERS",
            image: "/kabab.jpg",
            items: [
                { id: 41, name: "Paneer Tikka Masala", price: "260/-" },
                { id: 42, name: "Veg Sick Kabab", price: "280/-" },
                { id: 43, name: "Malai Chaap", price: "260/-" },
                { id: 44, name: "Tandoori Malai Chaap", price: "250/-" },
                { id: 45, name: "Finger Chips", price: "150/-" }
            ]
        },
        {
            category: "PANEER VEGETABLE",
            image: "/paneer.jpg",
            items: [
                { id: 46, name: "Paneer Pasanda", price: "260/-" },
                { id: 47, name: "Paneer Butter Masala", price: "280/-" },
                { id: 48, name: "Paneer Bhaji", price: "260/-" },
                { id: 49, name: "Paneer Kali Mirch", price: "260/-" },
                { id: 50, name: "Paneer Do Pyaza", price: "250/-" },
                { id: 51, name: "Paneer Lababdar", price: "260/-" },
                { id: 52, name: "Kadhai Paneer", price: "250/-" },
                { id: 53, name: "Palak Paneer", price: "240/-" },
                { id: 54, name: "Mutter Paneer", price: "260/-" },
                { id: 55, name: "Khoya Paneer", price: "280/-" },
                { id: 56, name: "Handi Paneer", price: "270/-" },
                { id: 57, name: "Shahi Paneer", price: "260/-" },
                { id: 58, name: "Chole Paneer", price: "200/-" },
                { id: 59, name: "Paneer Methi Malai", price: "270/-" }
            ]
        },
        {
            category: "LUNCH & DINNER",
            image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=2070&auto=format&fit=crop",
            items: [
                { id: 60, name: "Aloo Palak", price: "180/-" },
                { id: 61, name: "Aloo Jeera", price: "180/-" },
                { id: 62, name: "Aloo Onion", price: "180/-" },
                { id: 63, name: "Aloo Matar", price: "170/-" },
                { id: 64, name: "Aloo Kadai", price: "190/-" },
                { id: 65, name: "Aloo Tomato", price: "180/-" },
                { id: 66, name: "Dal Fried", price: "150/-" },
                { id: 67, name: "Dal Tadka", price: "160/-" },
                { id: 68, name: "Dal Makhani", price: "180/-" },
                { id: 69, name: "Dal Handi", price: "160/-" },
                { id: 70, name: "Dum Aloo", price: "180/-" },
                { id: 71, name: "Kashmiri Dum Aloo", price: "100/-" },
                { id: 72, name: "Aloo Gobhi Masala", price: "180/-" },
                { id: 73, name: "Kadhai Gobhi", price: "180/-" },
                { id: 74, name: "Matar Mushroom", price: "260/-" },
                { id: 75, name: "Kadhai Mushroom", price: "260/-" },
                { id: 76, name: "Mushroom Butter Masala", price: "280/-" },
                { id: 77, name: "Kaju Kari", price: "300/-" },
                { id: 78, name: "Step Tomato", price: "200/-" },
                { id: 79, name: "Malai Kofta", price: "260/-" },
                { id: 80, name: "Veg. Jalfrezi", price: "220/-" },
                { id: 81, name: "Mix Veg.", price: "200/-" },
                { id: 82, name: "Chana Masala", price: "190/-" },
                { id: 83, name: "Bhindi Pyoaz Masala", price: "180/-" },
                { id: 84, name: "Gravy Chaap", price: "250/-" }
            ]
        },
        {
            category: "THALI SPECIALS",
            image: "/thali.jpg",
            items: [
                { id: 88, name: "NORMAL THALI", price: "200/-", desc: "1 Dal Tadka, 1 Aloo Gobhi Sabji, Rice, Salad, 2 Butter Roti" },
                { id: 89, name: "SPECIAL THALI", price: "350/-", desc: "1 Dal Makhni, Mix Veg, Shahi Paneer, Jeera Rice, Salad, Raita, 1 Papad, 1 Roti, 1 Nan, 1 Missi Roti" }
            ]
        },
        {
            category: "TANDOORI ROTI",
            image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=2072&auto=format&fit=crop",
            items: [
                { id: 125, name: "Tandoori Roti Plain", price: "12/-" },
                { id: 126, name: "Tandoori Butter Roti", price: "18/-" },
                { id: 127, name: "Tawa Roti", price: "20/-" },
                { id: 128, name: "Tawa Butter Roti", price: "25/-" },
                { id: 129, name: "Missi Roti", price: "30/-" },
                { id: 130, name: "Missi Butter Roti", price: "35/-" },
                { id: 131, name: "Garlic Naan", price: "60/-" },
                { id: 132, name: "Butter Naan", price: "50/-" },
                { id: 133, name: "Plain Naan", price: "40/-" },
                { id: 134, name: "Cheese Naan", price: "80/-" },
                { id: 135, name: "Stuffed Naan", price: "100/-" },
                { id: 136, name: "Laccha Parantha", price: "80/-" }
            ]
        },
        {
            category: "SALAD & RAITA",
            image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop",
            items: [
                { id: 95, name: "Green Salad", price: "80/-" },
                { id: 96, name: "Onion Salad", price: "50/-" },
                { id: 97, name: "Boondi Raita", price: "100/-" },
                { id: 98, name: "Mix Raita", price: "120/-" },
                { id: 99, name: "Aloo Raita", price: "100/-" },
                { id: 100, name: "Onion Raita", price: "100/-" },
                { id: 101, name: "Dahi", price: "60/-" },
                { id: 102, name: "Roasted Papad", price: "20/-" },
                { id: 103, name: "Fried Papad", price: "30/-" },
                { id: 104, name: "Masala Papad (2 pcs)", price: "120/-" },
                { id: 105, name: "Amul Butter (1/4)", price: "25/-" }
            ]
        },
        {
            category: "NOODLES",
            image: "/Noodles.jpg",
            items: [
                { id: 137, name: "Noodles", price: "100/-" },
                { id: 138, name: "Hakka Noodles", price: "120/-" },
                { id: 139, name: "Chilli Garlic Noodles", price: "130/-" },
                { id: 140, name: "Singapuri Noodles", price: "140/-" }
            ]
        },
        {
            category: "BEVERAGES",
            image: "/Beverages.jpg",
            items: [
                { id: 106, name: "Cold Drink", price: "MRP" },
                { id: 107, name: "Sweet Lassi (1 Glass)", price: "80/-" },
                { id: 108, name: "Salted Lassi (1 Glass)", price: "80/-" },
                { id: 109, name: "Lemon Water", price: "30/-" },
                { id: 110, name: "Kullad Tea", price: "30/-" },
                { id: 111, name: "Tea", price: "25/-" },
                { id: 112, name: "Coffee", price: "40/-" },
                { id: 113, name: "Mineral Water (1 Ltr.)", price: "MRP" },
                { id: 114, name: "Ice Cream", price: "MRP" },
                { id: 115, name: "Milk (250ml)", price: "60/-" },
                { id: 116, name: "Ginger Tea", price: "30/-" },
                { id: 117, name: "Black Tea", price: "30/-" },
                { id: 118, name: "Cold Coffee", price: "120/-" },
                { id: 119, name: "Lemon Tea", price: "30/-" },
                { id: 120, name: "Tomato Soup", price: "100/-" },
                { id: 121, name: "Veg Soup", price: "120/-" },
                { id: 122, name: "Hot & Sour Soup", price: "120/-" }
            ]
        },
        {
            category: "SWEETS",
            image: "/sweet.jpg",
            items: [
                { id: 85, name: "Gulab Jamun (1 pcs)", price: "40/-" },
                { id: 86, name: "Rasgulla (1 pcs)", price: "40/-" },
                { id: 87, name: "Rabdi", price: "MRP" }
            ]
        }
    ];

    return (
        <div className="menu-page">
            <Navbar />

            <div className="page-header">
                <div className="page-header-bg">
                    <img src="/dinner.jpg" alt="Royal Dining" />
                    <div className="overlay-dark"></div>
                </div>
                <div className="page-title container">
                    <motion.div
                        initial={{ y: -200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                        className="title-subtitle"
                    >
                        <p className="italic-text">A Symphony of Flavors and Traditions</p>
                    </motion.div>

                    <motion.div
                        className="hanging-sign"
                        initial={{ y: -1000, rotateX: 45 }}
                        animate={{ y: 0, rotateX: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 60,
                            damping: 10,
                            mass: 1.5,
                            delay: 0.2
                        }}
                    >
                        <div className="ribbon-line left"></div>
                        <div className="ribbon-line right"></div>
                        <div className="sign-board">
                            <h1 className="main-title">ROYAL DINING<br />MENU</h1>
                        </div>
                    </motion.div>
                </div>
            </div>

            <section className="menu-container container">
                <div className="menu-intro">
                    <h2>OUR CULINARY DELIGHTS</h2>
                    <div className="gold-divider-center"></div>
                    <p>Discover a rich tapestry of Indian and Continental flavors, crafted with the freshest ingredients and royal traditions.</p>
                </div>

                <div className="menu-grid">
                    {menuData.map((section, idx) => (
                        <div key={idx} className="menu-category-section">
                            <div className="category-header">
                                <div className="category-image">
                                    <img src={section.image} alt={section.category} />
                                    <div className="category-overlay">
                                        <h3>{section.category}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="category-items">
                                {section.items.map((item) => (
                                    <div key={item.id} className="menu-item">
                                        <div className="item-details">
                                            <span className="item-name">{item.name}</span>
                                            {item.desc && <p className="item-desc">{item.desc}</p>}
                                        </div>
                                        <div className="item-dots"></div>
                                        <span className="item-price">{item.price}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <div className="gst-notice container">
                <p>* GST EXTRA AS APPLICABLE</p>
                <p>* ROOM SERVICE CHARGE 10% EXTRA</p>
            </div>

            <Footer />
        </div>
    );
};

export default Menu;
