import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Reservations from './component/reservations/reservations';
import Sessions from './component/sessions/sessions';
import Rooms from './component/rooms/rooms';
import Header from './component/header/header';
import Login from './component/auth/login/login';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/rooms' element={<Rooms />} />
          <Route path='/sessions' element={<Sessions />} />
          <Route path='/reservations' element={<Reservations />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
