import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Main from './components/HomePage/Main';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Signup/>} />
          <Route path="/Sign-Up" element={<Signup/>} />
          <Route path="/Sign-In" element={<Signin/>} />
          <Route path="/Dashboard" element={<Main/>} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
