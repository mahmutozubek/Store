
import{View,Text,Image,TouchableOpacity,TouchableWithoutFeedback} from  'react-native'
import styles from './ProductCard.style'

export default function ProductCard({product,onSelect}){
    
    
    return(
        <TouchableOpacity style ={styles.container} onPress ={onSelect}>

            <Image style ={styles.image} source ={{uri:product.image}}/>
        
        <View style ={styles.bodyContainer}>

            <Text style ={styles.title}>{product.title}</Text>
            <Text style ={styles.price}>{product.price}</Text>
         
        
        </View>
        </TouchableOpacity>
    )
}