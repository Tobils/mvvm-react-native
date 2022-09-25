
import { View, Text, ScrollView, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import useViewModel from "./ViewModel"
import { IUser } from '../../../../model/user/user.interface'
import List from '../../../components/List/UserList'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../../router'

type UserListProps = NativeStackScreenProps<RootStackParamList, 'UserList'>;


function UserList ({route, navigation}: UserListProps) {
    const {users, getUser, error} = useViewModel()

    useEffect(() => {
        getUser()
    }, [])


    return (
        <View style={{padding: 10}}>
            <ScrollView>
                {
                    users.map((usr: IUser, index: number) => {
                        return <>
                            <List user={usr} key={index} onClick={() => {
                                console.log(`clicked ${usr.id.toString()}`);
                                navigation.navigate('UserDetail', {id: usr.id})
                            }}/>
                        </>
                    })
                }
                </ScrollView>
        </View>
    )
}

export default UserList