import s from './index.module.css';

export default function Btn({ active = false, children }) {
  return (
    <button type="button" className={active ? s.Active : s.Btn}>
      {children}
    </button>
  );
}
