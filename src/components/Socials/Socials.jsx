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
          <svg width="35" height="35" className={s.svg}>
            <use href={facebook}></use>
          </svg>
        </a>
      </li>
      <li className={s.item}>
        <a href="http://www.twitter.com" aria-label="twitter">
          <svg width="35" height="35" className={s.svg}>
            <use href={tweeter}></use>
          </svg>
        </a>
      </li>
      <li className={s.item}>
        <a href="http://www.youtube.com" aria-label="youtube">
          <svg width="40" height="35" className={s.svg}>
            <use href={youtube}></use>
          </svg>
        </a>
      </li>
      <li className={s.item}>
        <a href="http://www.linkedin.com" aria-label="linkedin">
          <svg width="31" height="35" className={s.svg}>
            <use href={linkedin}></use>
          </svg>
        </a>
      </li>
    </ul>
  );
}
