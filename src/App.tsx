import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Aufgabe from './components/index';
import Acceuil from './components/react';

// Import Data
import { data } from './data/data';

// Redux
import { Provider } from 'react-redux';
import Store from './store';

function App() {
  useEffect(() => {
    console.log('resultat', data());
  }, []);

  return (
    <Provider store={Store}>
      <Router>
        <Switch>
          <Route exact path='/' component={Acceuil} />
          <Route exact path='/aufgaben' component={Aufgabe} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
