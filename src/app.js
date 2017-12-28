import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, { history } from './routers/AppRouter';
import './styles/styles.scss';
import LoadingPage from './components/LoadingPage';

const jsx = (
  <AppRouter/>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

setTimeout( ()=> {
  renderApp();
}, 500);

