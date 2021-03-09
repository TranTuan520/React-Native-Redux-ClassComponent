import React, {Component} from 'react';
import {Text, View, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
export class Filter extends Component {
  getTextStyle(statusName) {
    if (statusName === this.props.myFilterStatus) return styles.buttonStyle2;
    return styles.buttonStyle;
  }
  setFilterStatus(actionType) {
    this.props.dispatch({type: actionType});
  }
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          margin: 6,
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={() => { 
            this.setFilterStatus('FILTER_SHOW_ALL');
          }}
          style={this.getTextStyle('SHOW_ALL')}>
          <Text style={{color: 'white', fontSize: 22}}>Show All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.setFilterStatus('FILTER_MEMORIZED');
          }}
          style={this.getTextStyle('MEMORIZED')}>
          <Text style={{color: 'white', fontSize: 22}}>Memorized</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.setFilterStatus('FILTER_NEED_PRACTICE');
          }}
          style={this.getTextStyle('NEED_PRACTICE')}>
          <Text style={{color: 'white', fontSize: 22}}>NP</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
function mapStateToProps(state) {
  return {
    myFilterStatus: state.filterStatus,
  };
}
const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: 'gray',
    height: 50,
    borderRadius: 3,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle2: {
    backgroundColor: 'green',
    height: 50,
    borderRadius: 3,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default connect(mapStateToProps)(Filter);
