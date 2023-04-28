import React from 'react';
import s from './index.module.css';

export default function Button({ active = false, children, onClick }) {
  return (
    <div className={s.button}>
      <button
        type="button"
        className={active ? s.Active : s.Btn}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}
