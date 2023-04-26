import React from 'react';
import s from './index.module.css';

export default function Nav({ toggle }) {
  return (
    <nav className={s.nav}>
      <ul className={s.List}>
        <li className={s.Item} onClick={toggle}>
          <a href="#Home">Home</a>
        </li>
        <li className={s.Item} onClick={toggle}>
          <a href="#About">About</a>
        </li>
        <li className={s.Item} onClick={toggle}>
          <a href="#Cases">Cases</a>
        </li>
        <li className={s.Item} onClick={toggle}>
          <a href="#Blog">Blog</a>
        </li>
        <li className={s.Item} onClick={toggle}>
          <a href="#Contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
