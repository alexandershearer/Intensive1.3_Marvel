import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/navbar';
import Home from './Screens/Home/home';
import Footer from './Components/Footer/footer';
import comics from './Comics/comics';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact patch="/comics" component={comics} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
