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

  useEffect(() => {
    const someMovie = [
      {
        id: 0,
        Poster:
          'https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
        Title: 'Star Wars',
        Rated: 'PG',
        Released: '25 May 1977',
        Runtime: '131 min',
        Genre: 'Action, Adventure, Fantasy',
        Plot: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vad",
      },
    ];

    setWatchList(someMovie);
  }, []);

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
            />
          </Route>
          <Route exact path='/watch-list'>
            <WatchList
              odb={odb}
              setOdb={setOdb}
              watchList={watchList}
              setWatchList={setWatchList}
            />
          </Route>
          <Route exact path='/edit'>
            <EditMovie />
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
