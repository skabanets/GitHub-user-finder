import { UserStat } from 'components/UserStat';
import s from './UserCard.module.scss';
import { LocalGithubUser } from 'types';
import { UserTitle } from 'components/UserTitle';
import { UserInfo } from 'components/UserInfo';

interface UserCardProps extends LocalGithubUser {}

export const UserCard = (props: UserCardProps) => (
  <div className={s.userCard}>
    <img src={props.avatar} alt={props.login} className={s.avatar} />
    <UserTitle name={props.name} login={props.login} created={props.created} />
    <p className={`${s.bio}${props.bio ? '' : ` ${s.empty}`}`}>
      {props.bio || 'This profile has no bio'}
    </p>
    <UserStat repos={props.repos} followers={props.followers} followings={props.followings} />
    <UserInfo
      blog={props.blog}
      company={props.company}
      location={props.location}
      twitter={props.twitter}
    />
  </div>
);
