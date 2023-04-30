import s from './index.module.css';
import facebook from '../../images/images/facebook.svg';
import tweeter from '../../images/images/tweeter.svg';
import youtube from '../../images/images/youtube.svg';
import linkedin from '../../images/images/linkedin.svg';
export default function Socials() {
  return (
    <ul className={s.socials_list}>
      <li className={s.item}>
        <a href="http://www.facebook.com" aria-label="facebook">
        <img src={facebook} alt="facebook" className={s.svg}/>
        </a>
      </li>
      <li className={s.item}>
        <a href="http://www.twitter.com" aria-label="twitter">
          <img src={tweeter} alt="tweeter" className={s.svg}/>
        </a>
      </li>
      <li className={s.item}>
        <a href="http://www.youtube.com" aria-label="youtube">
          <img src={youtube} alt="youtube" className={s.svg}/>
        </a>
      </li>
      <li className={s.item}>
        <a href="http://www.linkedin.com" aria-label="linkedin">
          <img src={linkedin} alt="linkedin" className={s.svg}/>
        </a>
      </li>
    </ul>
  );
}
