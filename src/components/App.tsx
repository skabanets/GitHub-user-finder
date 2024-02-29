import { defaultUser } from 'mock';
import { Container } from './Container';
import { Header } from './Header';
import { Search } from './Search';
import { UserCard } from './UserCard';

function App() {
  return (
    <Container>
      <Header />
      <Search hasError onSubmit={() => {}} />
      <UserCard {...defaultUser} />
    </Container>
  );
}

export default App;
