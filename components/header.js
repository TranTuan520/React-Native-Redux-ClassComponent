import React, {Component} from 'react';
import {Text, View, TouchableOpacity, TextInput, Modal} from 'react-native';
import {connect} from 'react-redux'
export class header extends Component {
  onAdd() {
    const {en, vn} = this.state;
    this.props.dispatch({
      type: 'ADD_WORD',
      en,
      vn,
    });
  }
  constructor(props) {
    super(props);
    this.state = {
      en: '',
      vn: '',
    };
  }
  onAdd() {
    const { en, vn } = this.state
    this.props.dispatch({
        type: 'ADD_WORD',
        en,
        vn,
        
    })
}
  render() {
    return (
      <View
        style={{
          height: 200,
          justifyContent: 'space-around',
          width: '100%',
          alignItems: 'center',
        }}>
        <TextInput
          placeholder="en"
          value={this.state.en}
          onChangeText={(en) => this.setState({en})}
          style={{
            width: '90%',
            height: 50,
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 3,
          }}
        />
        <TextInput
          placeholder="vn"
          value={this.state.vn}
          onChangeText={(vn) => this.setState({vn})}
          style={{
            width: '90%',
            height: 50,
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 3,
          }}
        />
            <TouchableOpacity
                onPress  = {()=>{this.onAdd()}}
          disabled={this.state.en === '' || this.state.vn === '' ? true : false}
          style={{
            width: '90%',
            height: 50,
            backgroundColor:
              this.state.en === '' || this.state.vn === '' ? 'gray' : 'green',

            borderRadius: 3,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 18}}>Add This Word</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect()(header);
