import s from './index.module.css';
import logo from '../../images/images/Vector.svg';

export default function Logo() {
  return (
    <div className={s.logo}>
      <a href="#Home">
        <img src={logo} alt="Logo" className={s.img} />
        <span className={s.finance}>
          Finance <span className={s.leader}>Ledger</span>
        </span>
      </a>
    </div>
  );
}
