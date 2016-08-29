'use strict';
import React, { Component, View, Text, StyleSheet,TextInput,TouchableHighlight, ScrollView, PixelRatio, Animated, Navigator, Dimensions, Platform, AsyncStorage, ToolbarAndroid, ListView} from 'react-native';

import RebInput from './RebInput';

class RebChat extends Component {

  constructor(props) {
    super(props);
    let height = (Dimensions.get('window').height);
    let textInputHeight = 0;
    if (Platform.OS === 'android'){
      textInputHeight = 40;
    }
    this.viewMaxHeight = height;
    this.state = {
       isLoading: true,
       reloading: false,
       nbItems: 0,
       isOnBoarding: true,
       width: Dimensions.get('window').width,
       height: new Animated.Value(this.viewMaxHeight),
       dataSource: new ListView.DataSource({
         rowHasChanged: (row1, row2) => row1 !== row2
       })
    };
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  onKeyboardDidShow(e) {
    Animated.timing(this.state.height, {
        toValue: this.viewMaxHeight - e.endCoordinates.height,
        duration: 200,
      }).start();
  }

  onKeyboardDidHide(e){
    Animated.timing(this.state.height, {
        toValue: this.viewMaxHeight,
        duration: 200,
      }).start();

  }

  render(){
    return (
      <Animated.View
        style={{
          height: this.state.height,
          justifyContent: 'flex-end'
        }}
      >
        <View style={styles.container}>
        <ScrollView
        onKeyboardDidShow={this.onKeyboardDidShow.bind(this)}
        onKeyboardDidHide={this.onKeyboardDidHide.bind(this)}
        >

          <View style={{flex:1, flexDirection: 'row',}}>
            <View style={{flex:1, flexDirection: 'column',}}>
              <Text style={styles.leftRebus}>💡-dea+t do🍳-gg+snt m⚛-om+ter 💡-dea+f 🏋-ight 🐹-mster+ve ✖-y+e h🏝-land+tory </Text>
              <View style={styles.triangleLeftCorner} />
            </View>
            <View style={{width:60}}/>
          </View>

          <View style={{height: 5, backgroundColor: '#FFFFFF'}}></View>

          <View style={{flex:1, flexDirection: 'row',}}>
            <View style={{flex:1, flexDirection: 'column',}}>
              <Text style={styles.leftRebus}>👡-ndal+y so🍈-lon+thing re♌-o+vant </Text>
              <View style={styles.triangleLeftCorner} />
            </View>
            <View style={{width:60}}/>
          </View>

          <View style={{height: 5, backgroundColor: '#FFFFFF'}}></View>

          <View style={{flex:1, flexDirection: 'row',}}>
            <View style={{width:60}}/>
            <View style={{flex:1, flexDirection: 'column',}}>
              <Text style={styles.rebus}>👌 </Text>
              <View style={styles.triangleCorner} />
            </View>
          </View>

          <View style={{height: 5, backgroundColor: '#FFFFFF'}}></View>

        </ScrollView>
        <RebInput
        
        />
        </View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },
  leftRebus: {
    fontSize: 30,
    alignSelf: 'stretch',
    marginTop: 5,
    marginRight: 5,
    color: 'black',
    borderRadius: 15,
    paddingLeft: 14,
    paddingRight: 5,
    paddingBottom: 10,
    paddingTop: 8,
    marginLeft: 20,
    justifyContent: 'center',
    backgroundColor: '#f4f4f4',
  },
  rebus: {
    fontSize: 30,
    alignSelf: 'stretch',
    marginTop: 5,
    marginRight: 5,
    color: 'black',
    borderRadius: 15,
    paddingLeft: 14,
    paddingRight: 5,
    paddingBottom: 10,
    paddingTop: 8,
    marginLeft: 20,
    justifyContent: 'center',
    backgroundColor: '#FDF058',
  },
  triangleCorner: {
    alignSelf: 'flex-end',
    marginRight: 20,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 20,
    borderTopWidth: 20,
    borderRightColor: 'transparent',
    borderTopColor: '#FDF058',
    transform: [
      {rotate: '90deg'}
    ]
  },
  triangleLeftCorner: {
    alignSelf: 'flex-start',
    marginLeft: 35,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 20,
    borderTopWidth: 20,
    borderRightColor: 'transparent',
    borderTopColor: '#f4f4f4'
  },
})

export default RebChat;
