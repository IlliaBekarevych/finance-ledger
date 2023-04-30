import s from './index.module.css';
import Container from 'components/Container/Container';
import Logo from 'components/Logo/Logo';
import Nav from 'components/Nav/Nav';
import { useState } from 'react';

export default function Header({ navbarLinks }) {
  const [navbar, setNavbar] = useState(false);

  const changeBacground = () => {
    if (window.scrollY >= 70) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener('scroll', changeBacground);

  const navBg = navbar ? s.active : s.list;
  return (
    <section className={s.header}>
      <div className={navBg}>
        <Container>
          <div className={s.list}>
            <Logo />
            <Nav />
          </div>
        </Container>
      </div>
    </section>
  );
}
