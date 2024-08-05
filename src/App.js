import './App.css';
import NewMain from './Components/Main/Main';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";



function App() {
  return (
    <Router>
      <Routes>
            <Route path='/' element={<NewMain/>}/>
          </Routes>
    </Router>
  );
}

export default App;
