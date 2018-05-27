import React, { Component } from 'react'
import { TextInput, View } from 'react-native'
import styles from '@theme/styles'

export class TextInputWhite extends Component {
  render() {
    return (
      <View >
        <TextInput
            
            style={styles.textInputStyle}
            placeholder={this.props.placeholder}
            underlineColorAndroid={'transparent'}
            onChangeText={this.props.onChangeText}
            value={this.props.value}
        />
      </View>
    )
  }
}

export default TextInputWhite