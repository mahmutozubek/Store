import { TouchableOpacity ,Text,View} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
export default function Logout({ onPressLogout,onpressMenu }) {
  return (
    <View
      style={{
        alignItems:'center',
        width: 400,
        flexDirection: "row",
        marginVertical: 20,
        justifyContent: "space-between",
      }}
      
    >
      <TouchableOpacity onPress={onpressMenu}>

      <Text style ={{fontSize:40,marginLeft:10,fontWeight:'bold',color:'orange'}}>Store</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressLogout}>

      <Icon name="logout" size={30} color ='orange'/>
      </TouchableOpacity>
      
    </View>
  );
}
