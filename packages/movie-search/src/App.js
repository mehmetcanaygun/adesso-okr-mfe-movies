import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import SearchPage from './pages/SearchPage';

const generateClassName = createGenerateClassName({
  productionPrefix: 'ms',
});

const App = ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={SearchPage} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};

export default App;
