import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container:{
        
        borderBottomWidth:1,
        backgroundColor:'#eeeeee',
        margin:5,
        flexDirection:'row',
    },
    image:{
        backgroundColor:'white',
        resizeMode:'contain',
        margin:5,
        width:100,
       minHeight:100
    },
    bodyContainer:{
        flex:1,
        justifyContent:'space-between',
    },
    title:{
        fontSize:17,
        fontWeight:'800',
        margin:5,
    },
    price:{
        textAlign:'right',
        margin:5,
    },
})