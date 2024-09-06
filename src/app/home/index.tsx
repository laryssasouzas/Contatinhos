import { View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { theme } from "@/theme/index"
import { styles } from './styles'
import { Input } from '@/app/components/input'
import { useState } from 'react'
import { Contact } from '@/app/components/contact'

export function Home(){
    const [name, setName] = useState("")

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Input style={styles.input}>
                    <Feather name="search" size={16}
                    color={theme.colors.gray_300}></Feather>
                    <Input.Field
                    placeholder="Pesquisar pelo nome..." />
                    <Feather name="x" size={16} 
                    color={theme.colors.gray_300} onPress={() => setName("")}></Feather>
                </Input>
            </View>
            <Contact />
        </View>
    )
}