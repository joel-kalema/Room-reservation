import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Reservations from './component/reservations/reservations';
import Sessions from './component/sessions/sessions';
import Rooms from './component/rooms/rooms';
import Header from './component/header/header';
import Login from './component/auth/login/login';
import Signup from './component/auth/sign up/signup';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Signup />} />
          <Route path='/rooms' element={<Rooms />} />
          <Route path='/sessions' element={<Sessions />} />
          <Route path='/reservations' element={<Reservations />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
