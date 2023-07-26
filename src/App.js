import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import LandingPage from '../src/Registration/component/LandingPage.jsx'
import VerificationPage from './Registration/component/VerificationPage';


import DashBoard from './dashboard/component/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/verification' element={<VerificationPage/>}/>
          
          <Route path='/dashboard' element={<DashBoard/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
