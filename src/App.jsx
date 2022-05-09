import { Container } from '@mui/material';
import Header from './components/Header';
import List from './components/List';
import Modal from './components/Modal';

import { CharactersProvider } from './context/CharactersProvider';

function App() {
  return (
      <CharactersProvider>
        <Header />
        <Container>
          <List />
          <Modal />
        </Container>
      </CharactersProvider>
  );
}

export default App;
