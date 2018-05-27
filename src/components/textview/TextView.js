import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from '@theme/styles'
export class TextView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textView}> {this.props.text} </Text>
      </View>
    )
  }
}

export default TextView