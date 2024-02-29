import { defaultUser } from 'mock';
import { Container } from './Container';
import { Header } from './Header';
import { Search } from './Search';
import { UserCard } from './UserCard';
import { useState } from 'react';
import { GithubError, GithubUser, LocalGithubUser } from 'types';
import { isGithubUser } from 'utils/typeguards';
import { extractLocalUser } from 'utils/extract-local-user';

const BASE_URL = 'https://api.github.com/users/';

function App() {
  const [user, setUser] = useState<LocalGithubUser | null>(defaultUser);

  const fetchUser = async (username: string) => {
    const url = BASE_URL + username;

    const res = await fetch(url);
    const user = (await res.json()) as GithubUser | GithubError;

    if (isGithubUser(user)) {
      setUser(extractLocalUser(user));
    } else {
      setUser(null);
    }
  };

  return (
    <Container>
      <Header />
      <Search hasError={!user} onSubmit={fetchUser} />
      {user && <UserCard {...user} />}
    </Container>
  );
}

export default App;
