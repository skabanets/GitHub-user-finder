import { LocalGithubUser } from 'types';
import s from './UserStat.module.scss';

export interface UserStatProps
  extends Pick<LocalGithubUser, 'repos' | 'followers' | 'followings'> {}

export const UserStat = ({ repos, followers, followings }: UserStatProps) => (
  <div className={s.userStat}>
    <div className={s.info}>
      <div className={s.infoTitle}>Repos</div>
      <div className={s.infoNumber}>{repos}</div>
    </div>
    <div className={s.info}>
      <div className={s.infoTitle}>Followers</div>
      <div className={s.infoNumber}>{followers}</div>
    </div>
    <div className={s.info}>
      <div className={s.infoTitle}>Followings</div>
      <div className={s.infoNumber}>{followings}</div>
    </div>
  </div>
);
