'use strict';
import React, { Component, View, Text, StyleSheet,TextInput,TouchableHighlight, ScrollView, PixelRatio, Animated, Navigator, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';
import dismissKeyboard from 'dismissKeyboard';
var Clipboard = require('react-native-clipboard');

var dataEN = require("../../data/EN.js");
var dataFR = require("../../data/FR.js");
var json = dataEN.get();
var jsonFR = dataFR.get();

class Main extends Component {

  constructor(opts) {
    super(opts);

    let textInputHeight = 40;
    var STATUS_BAR_HEIGHT = Navigator.NavigationBar.Styles.General.StatusBarHeight;
    this.viewMaxHeight = Dimensions.get('window').height - Navigator.NavigationBar.Styles.General.NavBarHeight - STATUS_BAR_HEIGHT -textInputHeight;
    console.log("initial this.viewMaxHeight "+this.viewMaxHeight);

    this.state = {
       text: "",
       rebus:"",
       previousText:"",
       currentText:"",
       rebusArray:[],
       locale:"EN",
       height:this.viewMaxHeight,
       viewMaxHeight: this.viewMaxHeight
    };
  }

  buttonClicked() {
      Clipboard.set(this.state.rebus);
      dismissKeyboard();
  }

  render() {
    return (
      <Animated.View
        style={{
          height: this.state.height,
          justifyContent: 'flex-end',
          flex:1,
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#FDF058',
          paddingTop: 30
        }}
      >
          <ScrollView>
          <TouchableHighlight onPress={()=>buttonClicked()}>
          <Text style={styles.rebus}> {this.generate(this.state.text)}</Text>
          </TouchableHighlight>
          </ScrollView>

        <View style={styles.textInputContainer}>
          <ScrollView
          onKeyboardDidShow={this.onKeyboardDidShow}
          >
          <TextInput
            ref='myInput'
            style={styles.textInput}
            onChangeText={(text) => this.setState({text})}
            placeholder="Type your text here..."
            autoCorrect={false}
            multiline={true}
          />
          <Button
            style={styles.sendButton}
            onPress={this.buttonClicked.bind(this)}
          >
          Done
          </Button>
          </ScrollView>
        </View>

      </Animated.View>
    );
  }

  generate(text) {
    if(text.length == 0){
      this.state.rebus = "";
      this.state.previousText = "";
      this.state.currentText = "";
      this.state.text = "";
      this.state.rebusArray = [];
      return "";
    }
    this.state.currentText = text;
    this.state.rebus = "";
    var rebusObj = {};
    var textArray = text.split(" ");
    //position of i should be just after the last space
    var i = textArray.length - 1;
    rebusObj.word = textArray[i];
    rebusObj.nbSpace = textArray.length - 1;

    //unless we started removing some characters from the input
    //in this case we start from scratch
    if(text.length < this.state.previousText.length){
      i = 0;
      this.state.rebus = "";
      this.state.rebusArray = [];
      //in case there are other spaces after
      rebusObj.word = textArray[0];
    }

    while (i < textArray.length) {
        if(textArray[i] == ""){
          i++;
          continue;
        }
        rebusObj.word = textArray[i];
        var char = rebusObj.word.toLowerCase().charAt(0);

        //we are deleting values from the input
        if(text.length < this.state.previousText.length){
          this.matchEmoji(rebusObj);
          if(rebusObj.rebus == undefined || rebusObj.rebus.length == 0){
            //try to match the word by removing the last character each time
            rebusObj.left = "";
            for(var n=rebusObj.word.length-1; n>0; n--){
              rebusObj.left += rebusObj.word.charAt(n);
              rebusObj.word = rebusObj.word.substring(0,n-1);
              this.matchEmoji(rebusObj);
              /*if(rebusObj.rebus !== undefined && rebusObj.rebus.length > 0){
                var rebusObjJSON = JSON.parse(JSON.stringify(rebusObj));
                this.state.rebusArray.push(rebusObjJSON);
                rebusObj.word = "";
                rebusObj.delta = "";
                rebusObj.left = "";
                rebusObj.prev = "";
                rebusObj.rebus = "";
                break;
              }*/
            }
          }
        }else{
            this.matchEmoji(rebusObj);
            /*var delta = (rebusObj.delta !== undefined) ? rebusObj.delta.length : 0;
            if(delta > 1 && rebusObj.word.length > 3){
              var rebusObjTemp1,rebusObjTemp2 = {};

              rebusObjTemp1.nbSpace = rebusObj.nbSpace;
              rebusObjTemp1.word = rebusObj.word;
              rebusObjTemp2.nbSpace = rebusObj.nbSpace;
              rebusObjTemp2.word = rebusObj.word;

              rebusObjTemp1.prev = rebusObjTemp1.word.charAt(0);
              rebusObjTemp1.word = rebusObjTemp1.word.substring(1,rebusObjTemp1.word.length);
              this.matchEmoji(rebusObjTemp1);

              rebusObjTemp2.prev = rebusObjTemp2.word.substring(0,1);
              rebusObjTemp2.word = rebusObjTemp2.word.substring(2,rebusObjTemp2.word.length);
              this.matchEmoji(rebusObjTemp2);

              if(rebusObjTemp1.rebus !== undefined && rebusObjTemp1.rebus.length > 0 && rebusObjTemp2.rebus !== undefined && rebusObjTemp2.rebus.length > 0){
                var delta1 = (rebusObjTemp1.delta !== undefined) ? rebusObjTemp1.delta.length+1 : 1;
                var delta2 = (rebusObjTemp2.delta !== undefined) ? rebusObjTemp2.delta.length+2 : 2;
                if (delta1 < delta2 && delta1 < delta){
                  rebusObj.word = rebusObjTemp1.word;
                  rebusObj.delta = rebusObjTemp1.delta;
                  rebusObj.rebus = rebusObjTemp1.rebus;
                  rebusObj.prev = rebusObjTemp1.prev;
                  rebusObj.left = rebusObjTemp1.left;
                }
                if (delta2 < delta1 && delta2 < delta){
                  rebusObj.word = rebusObjTemp2.word;
                  rebusObj.delta = rebusObjTemp2.delta;
                  rebusObj.rebus = rebusObjTemp2.rebus;
                  rebusObj.prev = rebusObjTemp2.prev;
                  rebusObj.left = rebusObjTemp2.left;
                }
              }
            }
            var rebusObjJSON = JSON.parse(JSON.stringify(rebusObj));
            this.state.rebusArray.push(rebusObjJSON);
            rebusObj.word = "";
            rebusObj.delta = "";
            rebusObj.left = "";
            rebusObj.prev = "";
            rebusObj.rebus = "";
            */
        }

      //if there's additional part of the text that didn't much an emoji
      //add it to the rebus

      if(this.state.rebusArray.length>0 && this.state.rebusArray[this.state.rebusArray.length-1].nbSpace == rebusObj.nbSpace ){
        var left = rebusObj.word.replace(this.state.rebusArray[this.state.rebusArray.length-1].word, "");
        this.state.rebusArray[this.state.rebusArray.length-1].left = left;
      }

      i++;
    }

    for(var r=0; r<this.state.rebusArray.length; r++){
      if(this.state.rebus !== ""){
          this.state.rebus += " ";
      }
      if(this.state.rebusArray[r].prev !== undefined && this.state.rebusArray[r].prev.length>0){
        this.state.rebus += this.state.rebusArray[r].prev;
      }
      this.state.rebus += this.state.rebusArray[r].rebus;
      if(this.state.rebusArray[r].left !== undefined && this.state.rebusArray[r].left.length>0){
        if(this.state.rebusArray[r].delta !== undefined && this.state.rebusArray[r].delta.length>0){
          this.state.rebus += this.state.rebusArray[r].delta+"="+this.state.rebusArray[r].left;
        }else{
          this.state.rebus += this.state.rebusArray[r].left;
        }
      }else if(this.state.rebusArray[r].delta !== undefined && this.state.rebusArray[r].delta.length>0){
        this.state.rebus += "-"+this.state.rebusArray[r].delta;
      }
    }

    this.state.previousText = text;
    this.state.text = this.state.rebus;
    return this.state.rebus;
  }

  matchEmoji(rebusObj) {
    if(rebusObj.word.length == 0 || rebusObj.word.toLowerCase().charAt(0) == ""){
      return rebusObj;
    }
    var char = rebusObj.word.toLowerCase().charAt(0);
    for(var j = 0; j < jsonFR[char].length; j++){
      if(jsonFR[char][j].name.startsWith(rebusObj.word.toLowerCase()) == true){
          //are we building the rebus on the go
          if(this.state.rebusArray.length>0 && this.state.rebusArray[this.state.rebusArray.length-1].nbSpace == rebusObj.nbSpace && this.state.currentText.length >= this.state.previousText.length){
              this.state.rebusArray.splice(-1,1);
          }
          rebusObj.rebus = jsonFR[char][j].value;

          var delta = jsonFR[char][j].name.replace(rebusObj.word.toLowerCase(), "");
          if(delta.length>0){
            rebusObj.delta = delta;
          }
          var rebusObjJSON = JSON.parse(JSON.stringify(rebusObj));
          this.state.rebusArray.push(rebusObjJSON);
          rebusObj.word = "";
          rebusObj.delta = "";
          rebusObj.left = "";
          rebusObj.rebus = "";
          break;
      }
    }
    return rebusObj;
  }

  onKeyboardDidShow(e) {
    var newHeight = 464 - e.endCoordinates.height;
    //console.log("this.viewMaxHeight : [" + this.state.viewMaxHeight +"]");
    console.log("e.endCoordinates.height : [" + e.endCoordinates.height +"]");
    console.log("called on keyboard will show: [" + newHeight+"]");
    //this.state.height = newHeight;
    /*Animated.timing(this.state.height, {
        toValue: 464 - e.endCoordinates.height,
        duration: 200,
      }).start();*/
    }
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FDF058',
    paddingTop: 30
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
    alignSelf: 'flex-end'
  }
})

export default Main;
