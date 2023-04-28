import s from './index.module.css';
import Container from 'components/Container/Container';
import Logo from 'components/Logo/Logo';
import Nav from 'components/Nav/Nav';

export default function Header() {
  return (
    <section className={s.header}>
      <Container>
        <div className={s.list}>
          <Logo />
          <Nav />
        </div>
      </Container>
    </section>
  );
}
