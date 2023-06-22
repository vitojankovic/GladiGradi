import NavBar from './components/NavBar.jsx'
import HomePage from './components/GladiGradi.jsx'
import ContactPage from './components/ContactPage.jsx'
import AboutPage from './components/AboutPage.jsx'
import Properties from './components/Properties.jsx'
import 'bootstrap/dist/css/bootstrap.css';


import './styles/style.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Router>
        <NavBar />
 
        <Routes>
          <Route path="/GladiGradi" element={<HomePage/>}></Route>
          <Route path="/Contact" element={<ContactPage/>}></Route>
          <Route path="/About" element={<AboutPage/>}></Route>
          <Route path="/Properties" element={<Properties/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;