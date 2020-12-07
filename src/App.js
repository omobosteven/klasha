import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from './components';
import { Balances } from './pages';

const App = () => {
  return (
    <Router>
      <Switch>
        <Layout>
          <></>
          <Route exact path="/balances">
            <Balances />
          </Route>
        </Layout>
      </Switch>
    </Router>
  );
};

export default App;
