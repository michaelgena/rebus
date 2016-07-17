'use strict';
import React, { Component, View, Text, StyleSheet,TextInput,TouchableHighlight, ScrollView, PixelRatio, Animated, Navigator, Dimensions, Platform, AsyncStorage, ToolbarAndroid} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';
import dismissKeyboard from 'dismissKeyboard';
var ExpandingTextInput = require("./ExpandingTextInput");
var Clipboard = require('react-native-clipboard');
import Radio, {RadioButton} from 'react-native-simple-radio-button';
var KDSocialShare = require('NativeModules').KDSocialShare;
import Toggle from 'react-native-toggle';

var MessageBarAlert = require('react-native-message-bar').MessageBar;
var MessageBarManager = require('react-native-message-bar').MessageBarManager;


var toolbarActions = [
  {title: 'Re-use', show: 'always'}
];
class Reb extends Component {

  constructor(props) {
    super(props);

    let textInputHeight = 0;
    if (Platform.OS === 'android'){
      textInputHeight = 20;
    }
    var STATUS_BAR_HEIGHT = Navigator.NavigationBar.Styles.General.StatusBarHeight;
    this.viewMaxHeight = Dimensions.get('window').height - textInputHeight;
    this.viewMaxWidth = Dimensions.get('window').width

    this.state = {
       finalRebus:this.props.rebus,
       height: new Animated.Value(this.viewMaxHeight),
       hideShare: true,
       hideShareAndroid: true
    };
  }

  componentDidMount() {
    MessageBarManager.registerMessageBar(this.refs.alert);
    this.toggle();
  }

  componentWillUnmount() {
    MessageBarManager.unregisterMessageBar();
  }

  tweet() {
    KDSocialShare.tweet({
        'text':this.state.finalRebus,
        'link':'',
        'imagelink':'',
      },
      (results) => {
        console.log(results);
      }
    );
  }

  shareOnFacebook() {

    KDSocialShare.shareOnFacebook({
        'text':this.state.finalRebus,
        'link':'',
        'imagelink':'https://lh3.googleusercontent.com/Dffl5I2uYfuNhNeT2pMkHzJWjn99lz1uox4dEjRtwXA9OO5sO81h-oO8jmSkOFFFj3vwb7r7Z_qpIsoC3EKtTKc1M1MR',
      },
      (results) => {
        console.log(results);
      }
    );
  }

  copyToClipboard(){
    Clipboard.set(this.state.finalRebus);
    MessageBarManager.showAlert({
      alertType: "info",
      title: "Copied in your clipboard.",
      titleNumberOfLines: 1,
      messageNumberOfLines: 0,
    });
  }

  toggle = () => {
        if (Platform.OS === 'android'){
          this.setState({
              hideShareAndroid: !this.state.hideShareAndroid
          });
        }else{
          this.setState({
              hideShare: !this.state.hideShare
          });
        }
  };

  navNewReb(){
    this.props.navigator.push({
      id: 'newReb',
      passProps: {rebus:this.props.rebus, text:this.props.text, language: this.props.language},
    })
  }

  _onActionSelected(position) {
    if(toolbarActions[position].title == "Re-use"){
      this.navNewReb();
    }
  }

  render() {
    return (
      <Animated.View
        style={{
          height: this.state.height,
          justifyContent: 'flex-end'
        }}
      >

      <View style={styles.container}>
        <View>
          <ToolbarAndroid style={styles.toolbar}
                      title={this.props.title}
                      navIcon={require('./ic_arrow_back_white_24dp.png')}
                      onIconClicked={this.props.navigator.pop}
                      actions={toolbarActions}
                      onActionSelected={this._onActionSelected.bind(this)}
                      titleColor={'black'}/>
        </View>
        <ScrollView>
          <Text style={styles.rebus}> {this.state.finalRebus}</Text>

          <Toggle hidden={this.state.hideShare}>
            <View style={styles.shareContainer}>

              <TouchableHighlight onPress={this.tweet.bind(this)}>
                <View style={{alignItems: 'center',justifyContent:'center', width: this.viewMaxWidth/3, height: 50,backgroundColor:'#00aced'}}>
                 <Text style={{color:'#ffffff',fontWeight:'800',}}>Share on Twitter</Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight onPress={this.shareOnFacebook.bind(this)}>
                <View style={{alignItems: 'center',justifyContent:'center', width: this.viewMaxWidth/3, height: 50,backgroundColor:'#3b5998'}}>
                 <Text style={{color:'#ffffff',fontWeight:'800',}}>Share on Facebook</Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight onPress={this.copyToClipboard.bind(this)}>
                <View style={{alignItems: 'center',justifyContent:'center', width: this.viewMaxWidth/3, height: 50,backgroundColor:'#CCCCCC'}}>
                  <Text style={{color:'#ffffff',fontWeight:'800',}}>Copy to Clipboard</Text>
                </View>
              </TouchableHighlight>

            </View>
          </Toggle>

          <Toggle hidden={this.state.hideShareAndroid}>
            <View style={styles.shareContainer}>

              <TouchableHighlight onPress={this.copyToClipboard.bind(this)}>
                <View style={{alignItems: 'center',justifyContent:'center', width: this.viewMaxWidth, height: 50,backgroundColor:'#CCCCCC'}}>
                  <Text style={{color:'#ffffff',fontWeight:'800',}}>Copy to Clipboard</Text>
                </View>
              </TouchableHighlight>

            </View>
          </Toggle>
          <MessageBarAlert ref="alert" />
          </ScrollView>
        </View>
      </Animated.View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
    backgroundColor: '#FDF058'
  },
  input:{
    height: 50,
    fontSize: 18,
    fontWeight: 'bold',
    /*borderColor: 'gray',
    borderWidth: 1,*/
    backgroundColor: '#FFFFFF',
    marginLeft: 15,
    marginRight: 15
  },
  button:{
    height: 40,
    backgroundColor: '#05ABF1',
    marginLeft: 15,
    marginRight: 15,
    marginTop:10,
  },
  buttonText:{
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    paddingTop:8,
    alignItems: 'center',
    color: "#FFFFFF"
  },

  textInputContainer: {
    alignSelf: 'stretch',
    borderColor: '#b2b2b2',
    borderTopWidth: 1 / PixelRatio.get(),
    flexDirection: 'row',
    backgroundColor: '#FFF',
    paddingLeft: 10,
    paddingRight: 10
  },
  shareContainer: {
    alignSelf: 'stretch',
    flexDirection: 'row',
  },
  textInput: {
    alignSelf: 'center',
    height: 30,
    width: 200,
    backgroundColor: '#FFF',
    flex: 1,
    padding: 0,
    margin: 0,
    fontSize: 15,
  },
  sendButton: {
    alignSelf: 'flex-end',
    marginTop: 8,
    marginLeft: 5,
  },
  rebus: {
    fontSize: 30,
    alignSelf: 'flex-start',
    marginLeft: 5,
    marginRight: 5,
    color: 'black'
  },
  info:{
    paddingTop: 65,
    backgroundColor : '#007bff'
  },
  toolbar: {
    backgroundColor: '#FDF058',
    height: 56,
  }
})
module.exports = Reb;
