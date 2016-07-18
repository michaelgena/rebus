import React, { AppRegistry, Component } from 'react-native'
import Root from './src/Root';

class Rebus extends Component {
  render() {
    return (
      <Root/>
    );
  }
}

AppRegistry.registerComponent('Rebus', () => Rebus);
