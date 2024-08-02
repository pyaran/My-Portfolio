import './App.css';
import NewNavbar from './Components/Navbar/Navbar';
import NewMain from './Components/Main/Main';
import NewFooter from './Components/Footer/Footer';
import NewCertificacion from './Components/Certificados/Certificados';
import NewProyecto from './Components/Proyectos/Proyectos';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";



function App() {
  return (
    <Router>
      <div>
        <Routes>
            <Route path='/' element={<NewMain/>}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
