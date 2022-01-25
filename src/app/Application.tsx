import React, { Component } from 'react';
import { App, View } from 'framework7-react';
import LoginScreen from './screens/login/LoginScreen';

interface AppProps {}
interface AppState {
  name: string;
}

const f7params = {
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  theme: 'auto', // Automatic theme detection
  // store,
  // App routes
  routes: [
    {
      path: '/',
      component: LoginScreen,
    },
  ],
};

export default class Application extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <App {...f7params}>
        <View main url="/" />
      </App>
    );
  }
}
