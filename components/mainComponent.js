import React, {Component} from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import Item from './itemFlatlistComponent';
import Filter from './Filter';
import Header from './header';
import {toggleIsAdding} from '../redux/actionsCreator'
export class mainComponent extends Component {
  getWordList() {
    const {myFilter} = this.props;
    if (myFilter === 'MEMORIZED')
      return this.props.myWords.filter((e) => e.memorized);
    if (myFilter === 'NEED_PRACTICE')
      return this.props.myWords.filter((e) => !e.memorized);
    return this.props.myWords;
  }
    
  render() {
    return (
      <View style={{backgroundColor: '#fff', flex: 1, alignSelf: 'stretch'}}>
        <View
          style={{
            alignItems: 'flex-end',
            borderBottomWidth: 0.5,
            borderColor: 'gray',
          }}>
          <TouchableOpacity
            onPress={() => {
              this.props.toggleIsAdding()
            }}
            style={{
              marginVertical: 4,
              marginEnd: 4,
              width: 50,
              height: 50,
              borderRadius: 25,
              borderColor: 'gray',
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 25, fontWeight: 'bold'}}>
              {this.props.myIsAdding ? '-' : '+'}
            </Text>
          </TouchableOpacity>
        </View>
        {this.props.myIsAdding ? <Header /> : null}
        <FlatList
          data={this.getWordList()}
          renderItem={({item}) => <Item item={item} />}
          keyExtractor={(item) => item.id}
        />
        <Filter />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    myIsAdding: state.isAdding,
    myFilter: state.filterStatus,
    myWords: state.arrWords,
  };
}

export default connect(mapStateToProps, {toggleIsAdding})(mainComponent);
