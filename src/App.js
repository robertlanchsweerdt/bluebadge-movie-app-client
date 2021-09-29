import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavMenu from './components/NavMenu/NavMenu';
import Home from './components/Home/Home';
import MovieAPI from './components/MovieAPI/MovieAPI';
import WatchList from './components/WatchList/WatchList';
import SignIn from './components/SignIn/SignIn';
import AccountIndex from './components/Account/AccountIndex';
import EditMovie from './components/EditMovie/EditMovie';
import APIURL from './helpers/environment';

function App() {
  const [odb, setOdb] = useState(true);
  const [watchList, setWatchList] = useState([]);
  const [addMovie, setAddMovie] = useState([]);
  const [editMovie, setEditMovie] = useState([]);
  const [removeMovie, setRemoveMovie] = useState([]);
  const [refresh, setRefresh] = useState('');
  const [token, settoken] = useState(undefined);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      settoken(localStorage.getItem('token'));
    }
  }, []);

  const updateToken = (newToken) => {
    console.log('Update token');
    localStorage.setItem('token', newToken);
    settoken(newToken);
    console.log(token);
  };

  const clearToken = () => {
    localStorage.clear();
    settoken('');
  };

  // fetching all movies in watch list to display
  useEffect(() => {
    const url = `${APIURL}/movie/`;

    fetch(url, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: token,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setWatchList(data);
      });
  }, [removeMovie, addMovie, refresh]); // renders when a removeMovie state changes

  return (
    <div className='App'>
      <Router>
        <NavMenu
          updateToken={updateToken}
          token={token}
          clearToken={clearToken}
        />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/movie-api'>
            <MovieAPI
              odb={odb}
              setOdb={setOdb}
              setWatchList={setWatchList}
              watchList={watchList}
              setAddMovie={setAddMovie}
              // sessionToken={sessionToken}
              token={token}
            />
          </Route>
          <Route exact path='/watch-list'>
            <WatchList
              odb={odb}
              setOdb={setOdb}
              watchList={watchList}
              setWatchList={setWatchList}
              setEditMovie={setEditMovie}
              removeMovie={removeMovie}
              setRemoveMovie={setRemoveMovie}
              // sessionToken={sessionToken}
              token={token}
            />
          </Route>
          <Route exact path='/edit'>
            <EditMovie
              editMovie={editMovie}
              setEditMovie={setEditMovie}
              setRefresh={setRefresh}
              // sessionToken={sessionToken}
              token={token}
            />
          </Route>
          <Route exact path='/sign-in'>
            <SignIn updateToken={updateToken} token={token} />
          </Route>
          <Route exact path='/account'>
            <AccountIndex token={token} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
