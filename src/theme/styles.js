import {StyleSheet} from 'react-native'
import colors from '@theme/colors'


export default StyleSheet.create({
    textInputStyle:{
        height:50,
        borderRadius:5,
        backgroundColor:colors.lightGrey,
        width:'100%',
        fontSize:16,
        paddingLeft:'5%',
        elevation:1,
    },
    listContainer:{
        padding: 10,
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius:5,
        marginBottom: 5,
        borderBottomWidth: 0.5,
        elevation:1,
        backgroundColor:colors.lightGrey,
        justifyContent:'space-between'
    },
    listButtonStyle:{
        padding: 5,
        borderRadius:5,
        backgroundColor:colors.AppColor,
        elevation:1,
        
        borderBottomColor: colors.bottomBorderColor,
    },
    listButtonTextStyle:{
        color:colors.btnTextColor,
        fontWeight:'600'
    },
    listItem:{

        color:colors.btnTextColor,
        fontWeight:'600'
    },
    primaryButton:{
        backgroundColor:colors.buttonColor,
        marginBottom:5,
        elevation:1,
        flex:1,
        borderRadius:3,
        justifyContent:'center',
        alignItems:'center',
    },
    primaryButtonTextStyle:{
        color:colors.primaryButtonTextColor
    },
    container:{
        height:50,
        elevation:5,
        backgroundColor:colors.buttonColor,
        alignItems:'center',
        justifyContent:'center',
    },
    textView:{
        fontSize:18,
        color:colors.headerColor,
        fontWeight:'800'

    },
    btnTextColor:{
        color:colors.buttonTextColor,
        fontSize:14
    }
})


