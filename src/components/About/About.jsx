import s from './index.module.css';
import teem from '../../images/images/home/people.jpg';
import Container from 'components/Container/Container';
import Btn from 'components/Btn/Btn';

export default function About() {
  return (
    <section className={s.about}>
      <img src={teem} alt="People" className={s.img} />
      <Container>
        <div className={s.about_text}>
          <h3 className={s.pre_title}>What you are looking for</h3>
          <h2 className={s.title}>We provide bespoke solutions</h2>
          <p className={s.text}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
            ipsum dignissimos quae laudantium asperiores nam aliquid impedit
            harum illum dolore explicabo ab dolores itaque rerum temporibus
            doloribus iste maiores deleniti?
          </p>
          <Btn>Read More</Btn>
        </div>
      </Container>
    </section>
  );
}