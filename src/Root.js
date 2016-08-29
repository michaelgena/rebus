'use strict';
import React, { Component, NavigatorIOS, TabBarIOS, ToolbarAndroid, StyleSheet, Navigator, Platform } from 'react-native';

import RebList from './components/app/RebList';
import NewReb from './components/app/NewReb';
import Reb from './components/app/Reb';
import Icon from 'react-native-vector-icons/Ionicons';
import RealtimeRCT from './components/app/RealtimeRCT';
import RebChat from './components/app/RebChat';

class Root extends Component{

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'Rebs'
    };
  }

  _renderContent() {
    if(this.state.selectedTab === 'Chats'){
      return (
        <RebChat/>
      );
    }
    return (
      <RealtimeRCT/>
    );
  }

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
        <TabBarIOS>
          <TabBarIOS.Item
          title="Contacts"
          systemIcon="contacts"
          selected={this.state.selectedTab === 'Contacts'}
          onPress={() => {
            this.setState({
              selectedTab: 'Contacts',
            });
          }}>
          {this._renderContent()}
          </TabBarIOS.Item>
          <Icon.TabBarItemIOS
          title="Chats"
          selected={this.state.selectedTab === 'Chats'}
          iconName="ios-chatbubbles-outline"
          iconSize={28}
          selectedIconColor="blue"
          onPress={() => {
            this.setState({
              selectedTab: 'Chats',
            });
          }}>
          {this._renderContent()}
          </Icon.TabBarItemIOS>
          <Icon.TabBarItemIOS
          title="Rebs"
          selected={this.state.selectedTab === 'Rebs'}
          iconName="ios-list-outline"
          iconSize={28}
          selectedIconColor="blue"
          onPress={() => {
            this.setState({
              selectedTab: 'Rebs',
            });
          }}>
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
                    component: NewReb
                  });}
              }}
              itemWrapperStyle={styles.itemWrapper}
            />
          </Icon.TabBarItemIOS>
          <Icon.TabBarItemIOS
          selected={this.state.selectedTab === 'Settings'}
          title="Settings"
          iconName="ios-settings-outline"
          iconSize={28}
          selectedIconColor="blue"
          onPress={() => {
            this.setState({
              selectedTab: 'Settings',
            });
          }}>
          {this._renderContent()}
          </Icon.TabBarItemIOS>
        </TabBarIOS>
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
      case 'realtimeRCT':
          return (<RealtimeRCT navigator={navigator} title="RealtimeRCT" {...route.passProps}/>);
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
