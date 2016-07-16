'use strict';
import React, { Component, View, Text, StyleSheet,ListView,TouchableHighlight,ActivityIndicatorIOS, AsyncStorage } from 'react-native';

import Reb from './Reb';
import NewReb from './NewReb';

var styles = StyleSheet.create({
    container: {
      flex:1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      paddingTop: 30
    },
    rightContainer: {
        flex: 1,
				backgroundColor: '#FDF058',
    },
    title: {
        fontSize: 20,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 0
    },
    content: {
        color: '#656565',
        margin: 5
    },
    separator: {
       height: 1,
       backgroundColor: '#FFFFFF'
   	},
   	listView: {
       backgroundColor: '#FFFFFF',
			 marginTop: 65
   },
   loading: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center'
   },
   rebus: {
     fontSize: 30,
     alignSelf: 'flex-start',
     marginLeft: 5,
     marginRight: 5
   }
});

class RebList extends Component {

	constructor(props) {
       super(props);

       this.state = {
       		isLoading: true,
          reloading: false,
          dataSource: new ListView.DataSource({
        		rowHasChanged: (row1, row2) => row1 !== row2
        	})
       };
			 this._currentPageIndex = 0;
	     this._hasNextPage = true;
	     this._isFetching = false;
			 this._entries = [];
   	}

    renderHeader() {
    if (this.state.reloading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicatorIOS size='small' />
        </View>
      )
    } else {
      return null
    }
    }
    render() {
      //AsyncStorage.removeItem("myRebs");
    	if (this.state.isLoading) {
           return this.renderLoadingView();
      }

    	return (
       		<ListView
            	dataSource={this.state.dataSource}
            	renderRow={this.renderRebus.bind(this)}
							onEndReached={this._onEndReached.bind(this)}
              onScroll={this.handleScroll.bind(this)}
              renderHeader={this.renderHeader.bind(this)}
            	style={styles.listView}
            	/>
    	);
	}

	renderLoadingView() {
    return (
      	<View style={styles.loading}>
         	 <ActivityIndicatorIOS
         	     size='large'/>
      	</View>
  	);
	}

	renderRebus(rebus) {
    rebus = rebus.replace(/\|/g , ",");
    rebus = rebus.replace(/\\"/g , "\"");
    console.log("rebus:"+rebus);
    var reb = JSON.parse(rebus);
		return (
					<TouchableHighlight onPress={ () => this.navReb(reb)} underlayColor='#dddddd'>
							<View>
									 <View style={styles.rightContainer}>
											<Text style={styles.rebus} numberOfLines={1}>{reb.rebus}</Text>
									</View>
									<View style={styles.separator} />
							</View>
					</TouchableHighlight>
		);
   }

   componentDidMount() {
    	this.fetchData();
  }

  fetchData() {
    AsyncStorage.getItem("myRebs").then((rebs) => {
      if(rebs !== null){
        rebs = rebs.split(",");
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(rebs),
          isLoading: false,
          reloading: false
        });
      }else{
        this.setState({
          isLoading: false,
          reloading: false
        });
      }
    }).done();
  }

  handleScroll(e) {
    if (!this.state.reloading) {
      var PULLDOWN_DISTANCE = 40 // pixels
      if (e.nativeEvent.contentOffset.y < -PULLDOWN_DISTANCE) {
        /*this.setState({
          reloading: true
        });*/

        this.fetchData();
      }
      this.props.onScroll && this.props.onScroll(e)
    }
  }

	async _fetchCurrentPage() {
    if (this._isFetching || !this._hasNextPage) {
	     return;
	  }
	}

	_onEndReached() {
	   this._fetchCurrentPage().done();
	}

  navReb(reb){
    this.props.navigator.push({
      title: 'Reb',
      component: Reb,
      passProps: {rebus:reb.rebus, text:reb.text},
      rightButtonTitle: 'Copy',
      onRightButtonPress: () => {
        this.props.navigator.push({
          title: "New",
          component: NewReb,
          passProps: {rebus:reb.rebus, text:reb.text}
        });}
    })
  }

}
module.exports = RebList;
