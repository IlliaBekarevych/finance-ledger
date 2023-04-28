import Button from 'components/Button/Button';
import Container from 'components/Container/Container';

import s from './index.module.css';
import Header from 'components/Header/Header';

export default function Hero() {
  return (
    <section className={s.hero}>
      <Header />
      <Container>
        <h1 className={s.tittle}>The Sky Is The Limit</h1>
        <h3 className={s.avter_tittle}>
          We provide world class financial assistance
        </h3>
        <Button>Read More</Button>
      </Container>
    </section>
  );
}
