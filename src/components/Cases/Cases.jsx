import Gallery from 'components/Gallery/Gallery';
import s from './index.module.css';
import Container from 'components/Container/Container';

export default function Cases() {
  return (
    <section className={s.cases} id='cases'>
      <Container>
        <h4 className={s.pre_title}>This is what we do</h4>
        <h3 className={s.title}>Business Cases</h3>
        <p className={s.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          sapiente!
        </p>
        <Gallery />
      </Container>
    </section>
  );
}
