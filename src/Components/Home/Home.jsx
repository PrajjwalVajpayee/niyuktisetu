import React from 'react'
import './Home.css'
import logo from '../../assets/logo1-removebg-preview.png'
import ndacoaching from '../../assets/ndacoachingindelhi.jpg'
import indarmy from '../../assets/-Indian-Army-Agniveer-Recruitment-2024 (1).png'
import source from '../../assets/Source-The-Week.jpeg';
import photo4 from '../../assets/1684907245697.jpeg'
import photo5 from '../../assets/photo5.webp'
import { Swiper, SwiperSlide } from "swiper";
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import { EffectCoverflow,Pagination,Navigation } from 'swiper/modules'

const Home = () => {
  return (
    <div>
      <div className="container">
        <h1 className="heading">UPCOMING EXAMS</h1>
      </div>

      <footer className="footer">
        <div className="footer-container">
            <div className="footer-logo">
                <img src={logo} alt="Logo" className="logo-image"/>
                <h2>NiyuktiSetu</h2>
            </div>
           
            <div className="footer-links">
                <div className="footer-column">
                    <h3>Community</h3>
                    <ul>
                        <li>About Us</li>
                        <li>Guidelines and how to</li>
                        <li>Quote from the best</li>
                        <li>Exam 2024</li>
                        <li>How to give interview</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Getting Started</h3>
                    <ul>
                        <li>About Us</li>
                       
                        <li>DRDO</li>
                        <li>How to setup</li>
                        <li>Training</li>
                        <li>Speech Recognition</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Resources</h3>
                    <ul>
                        <li>Accessibility</li>
                        <li>Usability</li>
                        <li>Marketplace</li>
                        <li>Design & Dev</li>
                        <li>Marketplace</li>
                    </ul>
                </div>
                </div>
            </div>
            
            <div className="footer-bottom">
                <p>2024 NIYUKTISETU. All Rights Reserved</p>
                <ul className="footer-bottom-links">
                    <li>Terms of service</li>
                    <li>Privacy Policy</li>
                    <li>Security</li>
                    <li>Sitemap</li>
                </ul>
                <div className="footer-social-icons">
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-dribbble"></i>
                    <i className="fab fa-github"></i>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Home
