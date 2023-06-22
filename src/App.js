import './App.css';
import NewNavbar from './Components/Navbar/Navbar';
import NewMain from './Components/Main/Main';
import NewFooter from './Components/Footer/Footer';
import NewCertificacion from './Components/Certificados/Certificados';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";



function App() {
  return (
    <Router>
      <div>
        <NewNavbar/>
        <div>
        <Routes>
            <Route path='/' element={<NewMain/>}/>
          </Routes>
          <Routes>
           <Route path='/Certificaciones' element={<NewCertificacion/>}/>
          </Routes>
        </div>
        <NewFooter/>
      </div>
    </Router>
  );
}

export default App;
