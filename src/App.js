import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavMenu from './components/NavMenu/NavMenu';
import Home from './components/Home/Home';
import MovieAPI from './components/MovieAPI/MovieAPI';
import WatchList from './components/WatchList/WatchList';
import SignIn from './components/SignIn/SignIn';
import AccountIndex from './components/Account/AccountIndex';

function App() {
  const [token, settoken] = useState(undefined);
  useEffect(() => {
    if(localStorage.getItem('token')){
      settoken(localStorage.getItem('token'));
    }
  }, [])
  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    settoken(newToken);
    console.log(token);
  }
  const clearToken = () => {
    localStorage.clear();
    settoken('');
  }

  return (
    <div className='App'>
      <Router>
        <NavMenu updateToken={updateToken} token={token} clearToken={clearToken} />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/movie-api'>
            <MovieAPI />
          </Route>
          <Route exact path='/watch-list'>
            <WatchList />
          </Route>
          <Route exact path='/sign-in'>
            <SignIn updateToken={updateToken} token={token} />
          </Route>
          <Route exact path='/account'>
            < AccountIndex token={token} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
