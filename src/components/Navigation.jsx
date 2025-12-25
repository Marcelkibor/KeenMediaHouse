import React,{ useEffect } from 'react';
import '../App.css';
import { Link } from "react-router-dom";

export function Navigation() {

  useEffect(() => {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    const backToTop = document.getElementById('backToTop');
    const navbar = document.getElementById('navbar');

    if (!mobileMenuBtn || !navLinks || !backToTop || !navbar) return;

    const toggleMenu = () => {
      navLinks.classList.toggle('active');
      mobileMenuBtn.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
    };

    const closeMenu = () => {
      navLinks.classList.remove('active');
      mobileMenuBtn.textContent = '☰';
    };

    const onScroll = () => {
      if (window.pageYOffset > 300) {
        backToTop.classList.add('active');
      } else {
        backToTop.classList.remove('active');
      }

      if (window.pageYOffset > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    const scrollTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    mobileMenuBtn.addEventListener('click', toggleMenu);
    document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', closeMenu));
    window.addEventListener('scroll', onScroll);
    backToTop.addEventListener('click', scrollTop);

    return () => {
      mobileMenuBtn.removeEventListener('click', toggleMenu);
      document.querySelectorAll('.nav-links a').forEach(link => link.removeEventListener('click', closeMenu));
      window.removeEventListener('scroll', onScroll);
      backToTop.removeEventListener('click', scrollTop);
    };
  }, []);

  return (
    <>
      <nav id="navbar">
        <div className="nav-content">
          <div className="logo">KEEN STUDIO</div>
          <button className="mobile-menu-btn" id="mobileMenuBtn">☰</button>
          <ul className="nav-links" id="navLinks">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Packages</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#team">Our Team</a></li>
            <li><a href="#testimonials">Reviews</a></li>
            <li><a href="#booking">Book Now</a></li>
           <li>
        <Link to="/admin-login">Admin Login</Link>
      </li>
          </ul>
        </div>
      </nav>

      <div className="back-to-top" id="backToTop">↑</div>
    </>
  );
}
