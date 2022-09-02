import './App.css';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Reservations from './component/reservations/reservations';
import Sessions from './component/sessions/sessions';
import Rooms from './component/rooms/rooms';
import Header from './component/header/header';
import Login from './component/auth/login/login';
import Signup from './component/auth/sign up/signup';
import Details from './component/rooms/roomDetail';


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <div className='app_container'>
            <Routes>
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Signup />} />
              <Route path='/' element={<Rooms />} />
              <Route path='/sessions' element={<Sessions />} />
              <Route path='/reservations' element={<Reservations />} />
              <Route path='/room/:id' element={<Details />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
