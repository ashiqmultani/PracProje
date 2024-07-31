import React from 'react';
import './media.css';
import insta from '../component/insta.png'; // Adjust the path as necessary
import fb from '../component/fb.png'; // Adjust the path as necessary
import linkedin from '../component/linkedin.png'; // Adjust the path as necessary
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      <div className="insta">
      <h1>About TextUtils</h1>
      <p>Welcome to TextUtils, your go-to online tool for all your text modification needs! Designed to be simple yet powerful, TextUtils offers essential features to help you manipulate and analyze your text with ease.</p>

      <h1>Our Mission</h1>
       <p>Our mission at TextUtils is to provide a straightforward and efficient platform for text modification. We strive to make your text processing tasks quick and hassle-free, enhancing your productivity and ensuring accuracy.</p>
      </div>
      <div className="instag">
        <img src={insta} alt="Instagram" />
        <Link href="https://www.instagram.com/" className='insta-link'>@instagram</Link>
      </div>
      <div className="instag">
        <img src={fb} alt="facebook" />
        <Link href="https://www.facebook.com/" className='insta-link'>@facebook</Link>
      </div>
      <div className="instag">
        <img src={linkedin} alt="Iinkedin" />
        <Link href="https://www.linkedin.com/" className='insta-link'>@linkedin</Link>
      </div>
      <footer className="foot">All Copyright reserved</footer>
</>
   )
};