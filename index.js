/**
 * @format
 */

 import React from 'react'
import {AppRegistry} from 'react-native';
import { Provider } from 'react-redux';
import App from './App/Components/App';
import {name as appName} from './app.json';
import {store} from './App/Store'
const MainApp = () => {
    return (
      <Provider {...{ store }}>
        <App />
      </Provider>
    )
  }
AppRegistry.registerComponent(appName, () => MainApp);
