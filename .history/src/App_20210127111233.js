// import './App.css';
import Navbar from "./components/Navbars";
import Login from "./components/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div>

      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/navbar"  component={Navbar} />
        </Switch>
      </Router>
   
    </div>
  );
}

export default App;
