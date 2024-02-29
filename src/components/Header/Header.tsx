import { ThemeSwitcher } from 'components/ThemeSwitcher';
import s from './Header.module.scss';

export const Header = () => (
  <div className={s.header} data-testid="Header">
    <div className={s.logo}>devfinder</div>
    <ThemeSwitcher />
  </div>
);
