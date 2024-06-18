import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import ThemeSwitcher from './ThemeSwitcher';

ReactDOM.render(
  <Provider store={store}>
    <ThemeSwitcher />
  </Provider>,
  document.getElementById('root')
);