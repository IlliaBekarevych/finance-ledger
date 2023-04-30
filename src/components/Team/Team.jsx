import s from './index.module.css';
import Container from 'components/Container/Container';
import person1 from '../../images/images/team/person1.jpg';
import person2 from '../../images/images/team/person2.jpg';
import person3 from '../../images/images/team/person3.jpg';
import Socials from 'components/Socials/Socials';

export default function Team() {
  return (
    <section className={s.team}>
      <Container>
        <div className={s.team_pre_list}>
          <h4 className={s.pre_title}>Who we are</h4>
          <h3 className={s.title}>Our Professional Team</h3>
          <p className={s.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            sapiente!
          </p>
        </div>
        <ul className={s.team_list}>
          <li className={s.item}>
            <img src={person1} alt="People" className={s.img} />
            <div className={s.overlay}>
              <Socials />
            </div>
            <div className={s.text_list}>
              <h3 className={s.team_title}>John Doe</h3>
              <p className={s.team_text}>President</p>
            </div>
          </li>
          <li className={s.item}>
            <img src={person2} alt="People" className={s.img} />
            <div className={s.text_list}>
              <h3 className={s.team_title}>Jane Doe</h3>
              <p className={s.team_text}>Vice President</p>
            </div>
          </li>
          <li className={s.item}>
            <img src={person3} alt="People" className={s.img} />
            <div className={s.text_list}>
              <h3 className={s.team_title}>Steve Smith</h3>
              <p className={s.team_text}>Marketing Head</p>
            </div>
          </li>
        </ul>
      </Container>
    </section>
  );
}
