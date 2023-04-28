import Container from 'components/Container/Container';
import s from './index.module.css';
import facebook from '../../images/images/facebook.svg';
import tweeter from '../../images/images/tweeter.svg';
import youtube from '../../images/images/youtube.svg';
import linkedin from '../../images/images/linkedin.svg';
export default function Footer() {
  return (
    <section className={s.footer}>
      <Container>
        <ul className={s.footer_list}>
          <li className={s.item}>
            <img src={facebook} alt="facebook" className={s.img} />
          </li>
          <li className={s.item}>
            <img src={tweeter} alt="tweeter" className={s.img} />
          </li>
          <li className={s.item}>
            <img src={youtube} alt="youtube" className={s.img} />
          </li>
          <li className={s.item}>
            <img src={linkedin} alt="linkedin" className={s.img} />
          </li>
        </ul>
        <p className={s.text}>Copyright © 2021 - FinanceLedger</p>
      </Container>
    </section>
  );
}
