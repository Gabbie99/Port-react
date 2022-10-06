// import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Fashion from './components/Fashion';
import Port from './components/Port';

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path='/port' element={<Port/>}/>
          <Route path='/fashion' element={<Fashion/>}/>
          <Route path='*' element={<Port/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
