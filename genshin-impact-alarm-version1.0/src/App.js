import React from 'react';
import MainPage from './pages/mainPage.js'
import {HashRouter, Route} from "react-router-dom"

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={MainPage}></Route>
    </HashRouter>
  );
}

export default App;
