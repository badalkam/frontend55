import React from 'react'
import { Link } from 'react-router-dom'
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaAndroid,
    FaApple,
    FaLinkedin,
  } from "react-icons/fa"

export default function Footer() {
  return (
    <div className=''>
        
{/* 
<footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800 mb-0">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to={'/'} class="hover:underline">FireFistAce55</Link>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <Link to={'/about'} class="hover:underline me-4 md:me-6">About</Link>
        </li>
        <li>
            <Link to={'/privacy'} class="hover:underline me-4 md:me-6">Privacy Policy</Link>
        </li>
        <li>
            <Link to={'/'} class="hover:underline me-4 md:me-6">Licensing</Link>
        </li>
        <li>
            <Link to={'/about'} class="hover:underline">Contact</Link>
        </li>
    </ul>
    </div>
</footer> */}
 <footer className="footer bg-slate-400 mt-1">
        <a href="/"></a>
        <div>
          <h4>Quick links</h4>
          <a href="/about" className="quick-links">
            <p>About</p>
          </a>
          <a href="/" className="quick-links">
            <p>Contact Us</p>
          </a>
          <a href="/" className="quick-links">
            <p>Terms & Conditions</p>
          </a>
          <a href="/" className="quick-links">
            <p>Home Loan</p>
          </a>
          <a href="/" className="quick-links">
            <p>Privacy-Policy</p>
          </a>
        </div>
        <div className="followus">
          <h4>Follow us on</h4>
          <a href="">
            <FaFacebook />
          </a>
          <a href="">
            <FaTwitter />
          </a>
          <a href="">
            <FaInstagram />
          </a>
          <a href="">
            <FaLinkedin />
          </a>
        </div>
        <div>
          <h4>Our Partners</h4>
          <a href="/" className="partners">
            <p>Housing.com</p>
          </a>
          <a href="/" className="partners">
            <p>Prootiger.com</p>
          </a>
          <a href="/" className="partners">
            <p>Realtor.com</p>
          </a>
          <a href="/" className="partners">
            <p>Rent.com</p>
          </a>
        </div>
        <div>
          <h4>Buyer App|seller App</h4>
          <a href="" className="buyerseller">
            <FaAndroid />
          </a>
          <a href="" className="buyerseller">
            <FaApple />
          </a>
          |
          <a href="" className="buyerseller">
            <FaAndroid />
          </a>
          <a href="" className="buyerseller">
            <FaApple />
          </a>
        </div>
        <hr></hr>
      </footer>
      <div className="bottomline">
        <hr></hr>
        <address>Copywrite&copy; 2023 FireFistAce55.com| All Rights Reserved</address>
      </div>

    </div>
  )
}
