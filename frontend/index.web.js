import React from 'react';
import { AppRegistry } from 'react-native-web';
import App from './App.web';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);

const rootTag = document.getElementById('root') || document.getElementById('main');
AppRegistry.runApplication(appName, {
  initialProps: {},
  rootTag,
});