import {StyleSheet} from 'react-native'
import colors from '@theme/colors'

export default StyleSheet.create({
    mainContainer:{
        backgroundColor:colors.AppColor,
        marginTop:'5%',
        flex:1,
        margin:'2%',
        padding:'2%',
        elevation:2,
        borderRadius:5,
    },
    btnView:{
        marginTop:'5%',
        flexDirection:'row',
        height:50,
        justifyContent:'space-around'
    },
    resultContainer:{
        flex:1,
        elevation:1,

        paddingBottom: 10,
        marginBottom: 10,
        borderRadius:5,
        padding:10,
        backgroundColor:colors.resultColor
    },
})