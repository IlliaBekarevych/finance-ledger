import React from 'react';
import logo from '../../images/images/logo.jpg';
import s from './index.module.css';

export default function Logo() {
  return (
    <div className={s.Logo}>
      <img src={logo} alt="Logo" className={s.img} />
      <span className={s.finance}>
        Finance <span className={s.leader}>Ledger</span>
      </span>
    </div>
  );
}
