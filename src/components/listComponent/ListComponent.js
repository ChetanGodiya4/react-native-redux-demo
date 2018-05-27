import React, { Component } from 'react';
import { 
        Text,TouchableOpacity,View
      } from 'react-native';

    console.ignoredYellowBox=true

import styles from '@theme/styles'
class ListComponent extends Component {
  render() {
    return (
      <View 
        style={styles.listContainer}
        key={this.props.kid}
        
        >
        <Text style={styles.listItem}>{this.props.item}</Text>
        <TouchableOpacity 
            onPress={this.props.onPress}
            style={styles.listButtonStyle}
            >
            <Text style={styles.listButtonTextSStyle}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ListComponent;
