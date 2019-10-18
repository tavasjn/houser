import React from 'react';
import { HashRouter } from 'react-router-dom';

// import Dashboard from './Components/Dashboard/Dashboard';
// import Wizard from './Components/Wizard/Wizard';
import Header from './Components/Header/Header';


import './App.css';
import routes from './routes';


function App() {
  return (
    <HashRouter >
      <div className='page'>
        <Header />
        {routes}
      </div>
    </HashRouter>
  );
}

export default App;
