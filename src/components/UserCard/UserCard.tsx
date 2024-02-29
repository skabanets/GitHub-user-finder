import { UserStat } from 'components/UserStat';
import s from './UserCard.module.scss';
import { LocalGithubUser } from 'types';

interface UserCardProps extends LocalGithubUser {}

export const UserCard = (props: UserCardProps) => (
  <div className={s.userCard}>
    <UserStat repos={props.repos} followers={props.followers} followings={props.followings} />
  </div>
);
