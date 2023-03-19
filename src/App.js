import './App.css';
import Home from './pages/homepage/Home';
import TopBar from './components/topbar/TopBar';
import Single from './pages/single/Single';
import Write  from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import {BrowserRouter as Router, Switch,Route,Link} from "react-router-dom";
function App() {
const user = true; // if it is false then it show register page
  return (
    <Router>
  <TopBar/>
  <Switch>
    <Route exact path='/'>
      <Home/>
    </Route>
    <Route path='/register'>
      {user ? <Home/> : <Register/>}
    </Route>
    <Route path='/login'>
    {user ? <Home/> : <Login/>}
    </Route>
    <Route path='/write'>
    {user ? <Write/> : <Register/>} 
    {/* //if there is no user login then it will go to the register page otherwise Write page// */}
    </Route>
    <Route path='/settings'>
    {user ?  <Settings/> : <Register/>} 
    {/* same as write page */}
    </Route>
    <Route path='/post/:postId'>
      <Single/>
    </Route>
  </Switch>

    </Router>
  );
}

export default App;
