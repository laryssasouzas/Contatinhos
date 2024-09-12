import { View, Alert } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { theme } from "@/theme/index"
import { styles } from './styles'
import { Input } from '@/app/components/input'
import { useState, useEffect } from 'react'
import { Contact } from "../components/contact"
import * as Contacts from 'expo-contacts'

async function fetchContacts() {
    try {
        const { status } = await Contacts.requestPermissionsAsync()
        if (status === Contacts.PermissionStatus.GRANTED){
            const { data } = await Contacts.getContactsAsync()
            console.log(data)
        }
    } catch(error){
        console.log(error)
        Alert.alert("Contatos", "Não foi possível carregar os contatos...")
    }
}

export function Home(){
    const [name, setName] = useState("")

    useEffect(() => {
        fetchContacts()
    },[])

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
            <Contact contact={{
                name: "Laryssao",
                image: require("@/assets/avatar.jpeg")
            }} />
        </View>
    )
}