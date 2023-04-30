import React from 'react';
import s from './index.module.css';
import { Link } from 'react-scroll';
export default function Nav() {
  return (
    <nav className={s.nav}>
      <ul className={s.List}>
        <li className={s.Item}>
          <Link to="home" href="#home">
            Home
          </Link>
        </li>
        <li className={s.Item}>
          <Link to="about" href="#About">
            About
          </Link>
        </li>
        <li className={s.Item}>
          <Link to="cases" href="#Cases">
            Cases
          </Link>
        </li>
        <li className={s.Item}>
          <Link to="blog" href="#Blog">
            Blog
          </Link>
        </li>
        <li className={s.Item}>
          <Link to="contact" href="#Contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
