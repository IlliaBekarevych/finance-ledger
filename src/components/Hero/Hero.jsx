import Button from 'components/Button/Button';
import Container from 'components/Container/Container';
import Next from '../../images/images/nexxt btn.svg';
import s from './index.module.css';

export default function Hero() {
  return (
    <section className={s.hero} id='home'>
      <Container>
        <h1 className={s.tittle}>The Sky Is The Limit</h1>
        <h3 className={s.avter_tittle}>
          We provide world class financial assistance
        </h3>
        <Button>
          <img src={Next} alt="next" className={s.hero_btn} />
          Read More
        </Button>
      </Container>
    </section>
  );
}
