import { useState } from 'react';
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

  return (
    <div className='App'>
      <Router>
        <NavMenu />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/movie-api'>
            <MovieAPI odb={odb} setOdb={setOdb} />
          </Route>
          <Route exact path='/watch-list'>
            <WatchList odb={odb} setOdb={setOdb} />
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
