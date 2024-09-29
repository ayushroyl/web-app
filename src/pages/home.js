import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { FiSearch, FiMenu } from 'react-icons/fi';
import { FaWrench, FaBolt, FaPhoneAlt,FaWhatsapp, FaUser, FaHome, FaShoppingCart, FaClipboardList} from 'react-icons/fa';
import { MdTrendingUp} from 'react-icons/md';

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
                        <img src="/images/img1.jpg"/>
                    </div>
                    <div className="carousel-item">
                        <img src="images/img2.jpg"/>
                    </div>
                    <div className="carousel-item">
                        <img src="images/img3.jpg"/>
                    </div>
                </div>
                <section className="booking-section">
                    <button className="booking-btn"><FaPhoneAlt/> Call for Fixing</button>
                    <a href='https://google.com' className='whatsapp-btn'><FaWhatsapp/></a>
                </section>
            </div>

            <main>
                <section className="services">
                    <Link to="/services">
                        <button className="service-btn"><FaBolt /> Quick Services</button>
                    </Link>
                    <button className="service-btn"><FaWrench /> All Services</button>
                </section>

                <section className="trending-services">
                    <h2><MdTrendingUp/> Trending Booked Services</h2>
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
                    <div className="service-item">
                        <p>Car</p>
                        <button className="book-btn">Book</button>
                    </div>
                    <div className="service-item">
                        <p>Car</p>
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
