'use strict';
import React, { Component, View, Text, StyleSheet,TextInput,TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';
var json = {

           "a" : [
                    {'name':'alarm', 'value':'\u{23F0}'},
                    {'name':'alembic', 'value':'\u{2697}'},
                    {'name':'anchor', 'value':'\u{2693}'},
                    {'name':'aquarius', 'value':'\u{2652}'},
                    {'name':'aries', 'value':'\u{2648}'},
                    {'name':'atom', 'value':'\u{269B}'}
                  ],
            "b" : [
                    {'name':'baseball', 'value':'\u{26BE}'},
                    {'name':'black', 'value':'\u{25AA}'},
                    {'name':'black', 'value':'\u{25FC}'},
                    {'name':'black', 'value':'\u{25FE}'}
                  ],
            "c" : [
                    {'name':'cancer', 'value':'\u{264B}'},
                    {'name':'capricorn', 'value':'\u{2651}'},
                    {'name':'check', 'value':'\u{2611}'},
                    {'name':'circle', 'value':'\u{26AA}'},
                    {'name':'circle', 'value':'\u{26AB}'},
                    {'name':'cloud', 'value':'\u{2601}'},
                    {'name':'cloudy', 'value':'\u{26C5}'},
                    {'name':'clubs', 'value':'\u{2663}'},
                    {'name':'coffee', 'value':'\u{2615}'},
                    {'name':'coffin', 'value':'\u{26B0}'},
                    {'name':'comet', 'value':'\u{2604}'},
                    {'name':'copyright', 'value':'\u{00A9}'}
                  ],

            "d" : [
                    {'name':'diamond', 'value':'\u{2666}'}
                  ],

            "e" : [
                    {'name':'eject', 'value':'\u{23CF}'}
                  ],

            "f" : [
                    {'name':'forward', 'value':'\u{23E9}'}
                  ],

            "g" : [
                    {'name':'gear', 'value':'\u{2699}'},
                    {'name':'gemini', 'value':'\u{264A}'},
                    {'name':'gray', 'value':'\u{25FD}'}
                  ],

            "h" : [
                    {'name':'hammer', 'value':'\u{2692}'},
                    {'name':'hat', 'value':'\u{1F3A9}'},
                    {'name':'heart', 'value':'\u{2665}'},
                    {'name':'hot', 'value':'\u{2668}'},
                    {'name':'hourglass', 'value':'\u{231B}'}
                  ],

            "i" : [
                    {'name':'information', 'value':'\u{2139}'}
                  ],

            "j" : [

                  ],

            "k" : [
                    {'name':'keyboard', 'value':'\u{2328}'}
                  ],

            "l" : [
                    {'name':'left', 'value':'\u{25C0}'},
                    {'name':'leo', 'value':'\u{264C}'},
                    {'name':'libra', 'value':'\u{264E}'},
                    {'name':'lily', 'value':'\u{269C}'}
                  ],

            "m" : [
                    {'name':'m', 'value':'\u{24C2}'},
                    {'name':'muslim', 'value':'\u{262A}'}
                  ],

            "n" : [
                    {'name':'northeast', 'value':'\u{2197}'},
                    {'name':'northwest', 'value':'\u{2196}'}
                  ],

            "o" : [
                    {'name':'orthodox', 'value':'\u{2626}'}
                  ],

            "p" : [
                    {'name':'pause', 'value':'\u{23F8}'},
                    {'name':'peace', 'value':'\u{262E}'},
                    {'name':'pisces', 'value':'\u{2653}'},
                    {'name':'playpause', 'value':'\u{23EF}'}
                  ],

            "q" : [

                  ],

            "r" : [
                    {'name':'radioactive', 'value':'\u{2622}'},
                    {'name':'record', 'value':'\u{23FA}'},
                    {'name':'recycle', 'value':'\u{267B}'},
                    {'name':'registered', 'value':'\u{00AE}'},
                    {'name':'rewind', 'value':'\u{23EA}'},
                    {'name':'right', 'value':'\u{25B6}'}
                  ],

            "s" : [
                    {'name':'sad', 'value':'\u{2639}'},
                    {'name':'sagittarius', 'value':'\u{2650}'},
                    {'name':'scales', 'value':'\u{2696}'},
                    {'name':'scorpius', 'value':'\u{264F}'},
                    {'name':'shamrock', 'value':'\u{2618}'},
                    {'name':'skull', 'value':'\u{2620}'},
                    {'name':'smile', 'value':'\u{263A}'},
                    {'name':'snowman', 'value':'\u{2603}'},
                    {'name':'snowman', 'value':'\u{26C4}'},
                    {'name':'soccer', 'value':'\u{26BD}'},
                    {'name':'southeast', 'value':'\u{2198}'},
                    {'name':'southwest', 'value':'\u{2199}'},
                    {'name':'spades', 'value':'\u{2660}'},
                    {'name':'stop', 'value':'\u{23F9}'},
                    {'name':'stopwatch', 'value':'\u{23F1}'},
                    {'name':'sun', 'value':'\u{2600}'},
                    {'name':'swords', 'value':'\u{2694}'}
                  ],

            "t" : [
                    {'name':'taurus', 'value':'\u{2649}'},
                    {'name':'telephone', 'value':'\u{260E}'},
                    {'name':'thunder', 'value':'\u{26C8}'},
                    {'name':'timer', 'value':'\u{23F2}'},
                    {'name':'trademark', 'value':'\u{2122}'}
                  ],

            "u" : [
                    {'name':'up', 'value':'\u{2B06}'},
                    {'name':'umbrella', 'value':'\u{2602}'},
                    {'name':'umbrella', 'value':'\u{2614}'}
                  ],

            "v" : [
                    {'name':'vase', 'value':'\u{26B1}'},
                    {'name':'virgo', 'value':'\u{264D}'},
                    {'name':'voltage', 'value':'\u{26A1}'}
                  ],

            "w" : [
                    {'name':'warning', 'value':'\u{26A0}'},
                    {'name':'watch', 'value':'\u{231A}'},
                    {'name':'wheelchair', 'value':'\u{267F}'},
                    {'name':'white', 'value':'\u{25AB}'},
                    {'name':'white', 'value':'\u{25FB}'}
                  ],

            "x" : [

                  ],

            "y" : [
                    {'name':'yinyang', 'value':'\u{262F}'}
                  ],

            "z" : [

                  ]
          }

class Rebus extends Component {

  constructor(opts) {
    super(opts);
    this.state = {
       text: "",
       rebus:"",
       previousText:"",
       currentText:"",
       rebusArray:[]
    };
  }

  buttonClicked() {
      console.log(this.state.rebus);
  }

  render() {
    return (
      <View style={this.styles.textInputContainer}>
        <Text style={{fontSize: 30}}> {this.generate(this.state.text)}</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({text})}
          placeholder="Type your text here..."
          autoCorrect={false}
          multiline={true}
        />
        <Button
          style={this.styles.sendButton}
          styleDisabled={this.styles.sendButtonDisabled}
          onPress={this.onSend}
          disabled={this.state.disabled}
        >
          {this.props.sendButtonText}
        </Button>
        <TouchableHighlight
          style={styles.button}
          onPress={this.buttonClicked.bind(this)}>
          <View>
            <Text style={styles.buttonText}>Send Rebus</Text>
          </View>
        </TouchableHighlight>
      </View>
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
    for(var j = 0; j < json[char].length; j++){
      if(json[char][j].name.startsWith(rebusObj.word.toLowerCase()) == true){
          //are we building the rebus on the go
          if(this.state.rebusArray.length>0 && this.state.rebusArray[this.state.rebusArray.length-1].nbSpace == rebusObj.nbSpace && this.state.currentText.length >= this.state.previousText.length){
              this.state.rebusArray.splice(-1,1);
          }
          rebusObj.rebus = json[char][j].value;

          var delta = json[char][j].name.replace(rebusObj.word.toLowerCase(), "");
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
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FDF058',
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
    height: 44,
    borderTopWidth: 1 / PixelRatio.get(),
    borderColor: '#b2b2b2',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
  },
  textInput: {
    alignSelf: 'center',
    height: 30,
    width: 100,
    backgroundColor: '#FFF',
    flex: 1,
    padding: 0,
    margin: 0,
    fontSize: 15,
  },
  sendButton: {
    marginTop: 11,
    marginLeft: 10,
  },
})

export default Rebus;
