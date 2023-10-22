import './App.css';
import { SearchBar } from './SearchBar';
import { Lyrics } from './Lyrics';
import {Container} from 'react-bootstrap';
import Footer from './component/Footer.js';

function App() {
  return (
    <>
    <div className='App' style={{overflowY: 'scroll', marginBottom: '80px'}} >
      <Container>
      <div>
        <SearchBar/>
      </div>
      <div>
        <Lyrics/>
      </div>
      </Container>
      
    </div>
    </>
    
  );
}

export default App;
