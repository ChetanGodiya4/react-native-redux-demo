import React, { Component } from 'react'
import { View,ScrollView,Text,ToastAndroid } from 'react-native'
import TextInputWhite from '@components/input/TextInputWhite'
import TextView from '@components/textview/TextView'
import PrimaryButton from "@components/button/PrimaryButton"
import ListComponent from '@components/listComponent/ListComponent'

/**
 * Container Style
 */
import styles from './mainscreen.style'

/**
 * redux imports
 */
console.ignoredYellowBox=true
import { connect } from 'react-redux'
import { ActionsCreator } from '@redux/actions'
import { bindActionCreators } from 'redux'

export class MainScreen extends Component {
    constructor(props) {
        super(props)
        this.state={
            userInput:''
        }
    }

    deleteItem=(i)=>{
        ToastAndroid.show("it is your task now ....Id is : "+i,ToastAndroid.LONG)
    }
    getDataInArray(){
        /**
         * for array convertion
         */
        return Object.keys(this.props.data).map(key => this.props.data[key])
    }

   
    add = () => {
       
        if(this.state.userInput==''){
            ToastAndroid.show("Can't submit an empty data",ToastAndroid.SHORT)
            return
        }
        this.props.addItem(this.state.userInput)
        this.setState({
            userInput:''
        })
    }
    
    render() {
        
        
        return (
            <View style={{flex:1}}>
                <TextView text='Redux Demo' />
                
                <View style={styles.mainContainer}>
                    <TextInputWhite 
                        placeholder="Input"
                        onChangeText={(text)=>this.setState({userInput:text})} 
                        value={this.state.userInput}
                    />
                    <View style={styles.btnView}>
                        <PrimaryButton
                            text="Add Item"
                            onPress={this.add}
                        />
                    </View>
                    <ScrollView style={styles.resultContainer}>
                    {
                        this.getDataInArray().map((item,i)=>{
                            return(
                                <ListComponent
                                    kid={i}
                                    onPress={()=>this.deleteItem(i)}
                                    item={item}
                                />
                                
                            )
                        })
                    }
                    </ScrollView>
                </View>
            </View>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionsCreator, dispatch)
}
function mapStateToProps(state) {
    return {
        data: state.provideToStore.data
    
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)