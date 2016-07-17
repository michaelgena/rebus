'use strict';
import React, { Component, NavigatorIOS, StyleSheet, Navigator, Platform } from 'react-native';

import RebList from './components/app/RebList';
import NewReb from './components/app/NewReb';
import Reb from './components/app/Reb';

class Root extends Component{

  render() {
    if (Platform.OS === 'android'){
      return (
        <Navigator
          style={styles.container}
          initialRoute={{id: 'rebList'}}
          renderScene={this.navigatorRenderScene}/>
      );
    }else{
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

  navigatorRenderScene(route, navigator) {
    //_navigator = navigator;
    switch (route.id) {
      case 'rebList':
        return (<RebList navigator={navigator} title="Home"/>);
      case 'newReb':
        return (<NewReb navigator={navigator} title="New" {...route.passProps}/>);
      case 'reb':
        return (<Reb navigator={navigator} title="Reb" {...route.passProps}/>);
    }
  }

}
var styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#FFFFFF',
    },
    itemWrapper: {
      flex: 1,
    }
  });

module.exports = Root;
