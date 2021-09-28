import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavMenu from './components/NavMenu/NavMenu';
import Home from './components/Home/Home';
import MovieAPI from './components/MovieAPI/MovieAPI';
import WatchList from './components/WatchList/WatchList';
import SignIn from './components/SignIn/SignIn';
import EditMovie from './components/EditMovie/EditMovie';

function App() {
  const [odb, setOdb] = useState(true);
  const [watchList, setWatchList] = useState([]);
  const [addMovie, setAddMovie] = useState([]);
  const [editMovie, setEditMovie] = useState([]);
  const [removeMovie, setRemoveMovie] = useState([]);
  const [refresh, setRefresh] = useState('');

  const [sessionToken, setSessionToken] = useState(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjMyNzU0NTM0LCJleHAiOjE2MzI4NDA5MzR9.tj-Px3nK21nNVoWpuWB-nCc8JpWAkgU3g7f9dcqkJME'
  );

  // fetching all movies in watch list to display
  useEffect(() => {
    console.log('fetch watch list');
    console.log('Add movie from useEffect -->', addMovie);
    const url = 'http://localhost:4000/movie/';

    fetch(url, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: sessionToken,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setWatchList(data);
        console.log('Set watch list -->', data);
      });
  }, [removeMovie, addMovie, refresh]); // renders when a removeMovie state changes

  return (
    <div className='App'>
      <Router>
        <NavMenu />
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
              sessionToken={sessionToken}
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
              sessionToken={sessionToken}
            />
          </Route>
          <Route exact path='/edit'>
            <EditMovie
              editMovie={editMovie}
              setEditMovie={setEditMovie}
              setRefresh={setRefresh}
              sessionToken={sessionToken}
            />
          </Route>
          <Route exact path='/sign-in'>
            <SignIn />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
