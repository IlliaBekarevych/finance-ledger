import s from './index.module.css';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import Cases1 from '../../images/images/cases/cases1.jpg';
import Cases2 from '../../images/images/cases/cases2.jpg';
import Cases3 from '../../images/images/cases/cases3.jpg';
import Cases4 from '../../images/images/cases/cases4.jpg';
import Cases5 from '../../images/images/cases/cases5.jpg';
import Cases7 from '../../images/images/cases/cases7.jpg';

export default function Gallery() {
  const onBeforeSlide = detail => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };
  return (
    <div className={s.gallery}>
      <LightGallery
        elementClassNames="custom-wrapper-class"
        onBeforeSlide={onBeforeSlide}
      >
        <a href={Cases1}>
          <img alt="img1" src={Cases1} className={s.photo} />
        </a>
        <a href={Cases2}>
          <img alt="img1" src={Cases2} className={s.photo} />
        </a>
        <a href={Cases3}>
          <img alt="img1" src={Cases3} className={s.photo} />
        </a>
        <a href={Cases5}>
          <img alt="img1" src={Cases5} className={s.photo} />
        </a>
        <a href={Cases7}>
          <img alt="img1" src={Cases7} className={s.photo} />
        </a>
        <a href={Cases4}>
          <img alt="img1" src={Cases4} className={s.photo} />
        </a>
      </LightGallery>
    </div>
  );
}
