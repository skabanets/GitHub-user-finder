import { ReactNode } from 'react';
import s from './Container.module.scss';

interface ContainerProps {
  children: ReactNode;
}

export const Container = ({ children }: ContainerProps) => (
  <div className={s.container}>{children}</div>
);
