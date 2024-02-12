import React from 'react';
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom'

import './App.css';

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
