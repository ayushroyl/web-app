import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { FiSearch, FiMenu } from 'react-icons/fi';
import { FaWrench, FaBolt, FaCar, FaBuilding, FaPhoneAlt, FaWhatsapp, FaUser, FaHome, FaShoppingCart, FaClipboardList } from 'react-icons/fa';
import { MdTrendingUp } from 'react-icons/md';

const Home = () => {
    return (
        <div className="container">
            <header className="app-header">
                <div className="header-icons">
                    <FiMenu className="icon" />
                </div>
                <div className="logo">Service App</div>
                <div className="header-icons">
                    <FiSearch className="icon" />
                </div>
            </header>
            {/* Image Carousel */}
            <div className="carousel">
                <div className="carousel-images">
                    <div className="carousel-item">
                        <img src="/images/img1.jpg" alt='img1' />
                    </div>
                    <div className="carousel-item">
                        <img src="images/img2.jpg" alt='img2' />
                    </div>
                    <div className="carousel-item">
                        <img src="images/img3.jpg" alt='img3' />
                    </div>
                </div>
                <section className="booking-section">
                    <button className="booking-btn"><FaPhoneAlt /> Call for Fixing</button>
                    <a href='https://wa.me/917255071097?text=hii_im_from_app' className='whatsapp-btn'><FaWhatsapp /></a>
                </section>
            </div>

            <main>
                <section className="services">
                    <div className="service-card">
                        <img src="/images/card1.jpg" alt="Quick Services" className="service-img" />
                        <div className="service-content">
                            <FaBolt className="service-icon" />
                            <p>Quick Services</p>
                        </div>
                    </div>
                    <div className="service-card">
                        <img src="/images/card2.jpg" alt="All Services" className="service-img" />
                        <div className="service-content">
                            <FaWrench className="service-icon" />
                            <Link to="/services">
                                <p>All Services</p>
                            </Link>
                        </div>
                    </div>
                    <div className="service-card">
                        <img src="/images/card3.jpg" alt="Flat Booking" className="service-img" />
                        <div className="service-content">
                            <FaBuilding className="service-icon" />
                            <p>Flat Booking</p>
                        </div>
                    </div>
                    <div className="service-card">
                        <img src="/images/card4.jpg" alt="Car Booking" className="service-img" />
                        <div className="service-content">
                            <FaCar className="service-icon" />
                            <p>Car Booking</p>
                        </div>
                    </div>
                </section>

                <section className="trending-services">
                    <h2><MdTrendingUp /> Trending Services</h2>
                    <div className="service-item">
                        <p>Plumber</p>
                        <button className="book-btn">Book</button>
                    </div>
                    <div className="service-item">
                        <p>Electrician</p>
                        <button className="book-btn">Book</button>
                    </div>
                    <div className="service-item">
                        <p>Cleaner</p>
                        <button className="book-btn">Book</button>
                    </div>
                    <div className="service-item">
                        <p>Flat</p>
                        <button className="book-btn">Book</button>
                    </div>
                    <div className="service-item">
                        <p>Car</p>
                        <button className="book-btn">Book</button>
                    </div>
                </section>
            </main>

            <footer className="tab-bar">
                <button className="tab-icon"><FaHome /> Home</button>
                <button className="tab-icon"><FaClipboardList /> Services</button>
                <button className="tab-icon"><FaShoppingCart /> My Orders</button>
                <button className="tab-icon"><FaUser /> Profile</button>
            </footer>
        </div>
    );
};

export default Home;
