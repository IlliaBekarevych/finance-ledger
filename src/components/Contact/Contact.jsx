import s from './index.module.css';
import contact from '../../images/images/home/contact.jpg';
import Container from 'components/Container/Container';

export default function Contact() {
  return (
    <section className={s.contact}>
      <img src={contact} alt="People" className={s.img} />
      <Container>
        <h3 className={s.title}>Request Callback</h3>
        <form action="contact" className={s.form}>
          <input
            type="text"
            className={s.input}
            name="name"
            placeholder="Enter your name"
          />
          <input
            type="email"
            className={s.input}
            name="email"
            placeholder="Enter email*"
          />
          <button type="submit" className={s.btn}>
            Send
          </button>
        </form>
      </Container>
    </section>
  );
}
