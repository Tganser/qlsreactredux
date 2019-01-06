import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import AdminPage from './components/admin/AdminPage';
import InputPage from './components/input/InputPage';
import QueryPage from './components/query/QueryPage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
    <Route path="admin" component={AdminPage} />
    <Route path="input" component={InputPage} />
    <Route path="query" component={QueryPage} />
  </Route>
);
