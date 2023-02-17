import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './pages/Login';
import Inicio from './pages/Inicio';
import Provider from './context/Provider'

function App() {
  return (
    <div className="App">
      <Provider>
        <Router>
          <Routes>
            <Route exact path="/login" element={ <Login /> } />
            <Route exact path="/" element={ <Inicio /> }/>
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
