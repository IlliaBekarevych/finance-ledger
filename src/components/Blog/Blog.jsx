import s from './index.module.css';
import blog from '../../images/images/home/blog.jpg';
import Container from 'components/Container/Container';
import Btn from 'components/Btn/Btn';

export default function Blog() {
  return (
    <section className={s.blog} id='blog'>
      <img src={blog} alt="Book" className={s.img} />
      <Container>
        <div className={s.blog_list}>
          <h4 className={s.pre_title}>April 16 2020</h4>
          <h3 className={s.title}>Blog Post One</h3>
          <p className={s.text}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
            ipsum dignissimos quae laudantium asperiores nam aliquid impedit
            harum illum dolore explicabo ab dolores itaque rerum temporibus
            doloribus iste maiores deleniti?
          </p>
          <Btn>Read Our Blog</Btn>
        </div>
      </Container>
    </section>
  );
}
