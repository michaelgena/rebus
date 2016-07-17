'use strict';

import React, { AppRegistry, Component } from 'react-native'
import Root from './src/RootAndroid';

class Rebus extends Component {
  render() {
    return (
      <Root />
    );
  }
}

AppRegistry.registerComponent('Rebus', () => Rebus);
