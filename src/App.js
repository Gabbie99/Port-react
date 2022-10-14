// import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Fashion from './components/Fashion';
import Port from './components/Port';
import Services from './components/Services';

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/" element ={<Fashion/>} />
          <Route path='/port' element={<Port/>}/>
          <Route path='/fashion' element={<Fashion/>}/>
          <Route path='/about-us' element={<AboutUs/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='*' element={<h1>404</h1>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
