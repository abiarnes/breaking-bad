import { Container } from '@mui/material';
import Header from './components/Header';
import List from './components/List';
import { CharactersProvider } from './context/CharactersProvider';


function App() {
  return (
      <CharactersProvider>
        <Header />
        <Container>
          <List />
        </Container>
      </CharactersProvider>
  );
}

export default App;
