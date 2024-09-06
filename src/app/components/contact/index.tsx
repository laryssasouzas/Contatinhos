import { Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { Avatar } from '../avatar'

export function Contact(){
    return <TouchableOpacity style={styles.container}>
        <Avatar name="Laryssao" image={require("@/assets/avatar.jpeg")}/>
        <Text style={styles.name}>Laryssa</Text>
    </TouchableOpacity>
}