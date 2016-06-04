import React, { View, Text, StyleSheet, Image, ScrollView, ListView,TouchableHighlight, ActivityIndicatorIOS } from "react-native";
import Button from "react-native-button";
import { Actions } from "react-native-router-flux";

import loginInfo from '../../utils/loginInfo';

class DrawerContent extends React.Component {
  constructor(opts) {
    super(opts);
    this.state = {
   		isLoading: true,
       	dataSource: new ListView.DataSource({
           	rowHasChanged: (row1, row2) => row1 !== row2
       	})
    };
  }

  _signOut() {
    loginInfo.removeLoginInfo().then(() => {
      Actions.login();
    }).done();
  }

  componentDidMount() {
    	//this.fetchData();
   	}


  render(){
    const drawer = this.context.drawer;

    return (
      <View style={styles.container}>
      <View style={styles.menuItem}>
        <Image style={styles.itemImage} source={require('../../img/settings.png')} />
        <Button style={styles.itemLabel} onPress={() => { drawer.close();}}><Text style={styles.text}>Settings</Text></Button>
      </View>
      </View>
    );
  }
}

DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#896968',
  },
  backgroundImage: {
    width: 300,
    height: 150,
  },
  menuItem: {
    flexDirection: 'row',
    padding: 10
  },
  glancerItem: {
    flexDirection: 'row',
    padding: 10
  },
  itemImage: {
    marginTop: 1,
    width: 18,
    height: 18,
  },
  itemLabel: {
    paddingLeft: 2
  },
  item: {
    fontSize: 16,
    color: "#FFFFFF"
  },
  loading: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center'
   },
   menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: '#896968',
    paddingTop: 20,
  },
  text: {
    fontSize: 16,
    color: "#000000"
  }
});

export default DrawerContent;
