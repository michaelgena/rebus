'use strict';

import React, { AppRegistry, Component } from 'react-native'
//import Root from './src/Root';
import Main from './src/components/app/Main';

class Rebus extends Component {
  render() {
    return (
      <Main />
    );
  }
}

AppRegistry.registerComponent('Rebus', () => Rebus);
