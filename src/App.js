import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import { Route} from 'react-router'
import './App.css';

function App() {
  const URL = 'https://enigmatic-woodland-47053.herokuapp.com/';
  return (
    <div className="App">
      <Header />
      <Route path='/'>
        <Home />
      </Route>
      <Route path="/projects">
        <Projects URL={URL} />
      </Route>
      <Route path="/about">
        <About URL={URL} />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
