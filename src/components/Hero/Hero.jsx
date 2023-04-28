import Button from 'components/Button/Button';
import Container from 'components/Container/Container';
import Logo from 'components/Logo/Logo';
import Nav from 'components/Nav/Nav';
import React from 'react';
import s from './index.module.css';

export default function Hero() {
  return (
    <section className={s.hero}>
      <Container>
        <Logo />
        <Nav />
        <h1 className={s.tittle}>The Sky Is The Limit</h1>
        <h3 className={s.avter_tittle}>
          We provide world class financial assistance
        </h3>
        <Button>Read More</Button>
      </Container>
    </section>
  );
}
