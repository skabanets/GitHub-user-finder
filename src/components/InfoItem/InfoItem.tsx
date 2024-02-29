import { ReactNode } from 'react';
import s from './InfoItem.module.scss';

export interface InfoItemProps {
  icon: ReactNode;
  text?: string | null;
  isLink?: boolean;
}

export const InfoItem = ({ icon, text, isLink }: InfoItemProps) => {
  const currentText = text || 'Not Available';
  let currentHref = '';
  if (isLink) {
    currentHref = text && text.startsWith('http') ? text : `https://${text}`;
  }

  return (
    <div className={`${s.infoItem}${text ? '' : ` ${s.empty}`}`}>
      {icon}
      <div>
        {isLink && text ? (
          <a href={currentHref} target="_blank" rel="noreferrer" className={s.link}>
            {currentText}
          </a>
        ) : (
          currentText
        )}
      </div>
    </div>
  );
};
