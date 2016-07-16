import React, { AppRegistry, Component } from 'react-native'
import Root from './src/Root';
import NewReb from './src/components/app/NewReb';

class Rebus extends Component {
  render() {
    return (
      <Root/>
    );
  }
}

AppRegistry.registerComponent('Rebus', () => Rebus);
