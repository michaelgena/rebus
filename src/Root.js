'use strict';
import React, { Component, NavigatorIOS, StyleSheet } from 'react-native';

import RebList from './components/app/RebList';
import NewReb from './components/app/NewReb';

class Root extends Component{

  render() {
    return (
      <NavigatorIOS
        ref="nav"
        style={styles.container}
        initialRoute={{
          title: 'Home',
          component: RebList,
          passProps: this.props,
          rightButtonTitle: "New",
          onRightButtonPress: () => {
            this.refs.nav.navigator.push({
              title: "New",
              component: NewReb,
              rightButtonTitle: 'Cancel',
              onRightButtonPress: () => { this.refs.nav.navigator.pop(); }
            });}
        }}

        itemWrapperStyle={styles.itemWrapper}
        />
    );
  }
}
var styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#FDF058',
    },
    itemWrapper: {
      flex: 1,
    }
  });
//export default Root;
module.exports = Root;
