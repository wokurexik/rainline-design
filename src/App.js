import './App.css';
import './styles/LoginForm.css';
import './styles/SafeBadges.css'
import './mobile-styles/mobile-style.css'
import './tablet-styles/tablet-style.css'
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import LoginForm from './pages/LoginForm';
import SignForm from './pages/SignForm';
import Dashboard from './pages/Dashboard';


function App() {

  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<LoginForm/>}/>
          <Route path='/sign-up' element={<SignForm/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
    </div>
  );
}

export default App;
