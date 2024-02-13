import React from 'react';
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom';

import './App.css';
import introductionPage from './introductionPage/introductionPage';
import joinRoomPage from './joinRoomPage/joinRoomPage';
import roomPage from './roomPage/roomPage';

function App() {
  return (
    <Router>
        <Switch>
          <Route path= '/join-room'>
            <joinRoomPage/>

          </Route>
          <Route path= '/room'>
            <roomPage/>

          </Route>
          <Route path= '/'>
            <introductionPage/>

          </Route>
        </Switch>

    </Router>
  );
}

export default App;
