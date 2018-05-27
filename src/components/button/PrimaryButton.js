import React, { Component } from 'react'
import { View,TouchableOpacity,Text} from 'react-native'
import styles from '@theme/styles'
export class PrimaryButton extends Component {
  render() {
    return (
      
          <TouchableOpacity
          style={styles.primaryButton}
          onPress={this.props.onPress}>

            <Text style={styles.primaryButtonTextStyle}>{this.props.text}</Text>

          </TouchableOpacity>
      
    )
  }
}

export default PrimaryButton