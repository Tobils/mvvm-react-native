import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { IUser } from '../../../../model/user/user.interface'

export default function UserListViewModel(){
    const [error, setError] = useState("")
    const [users, setUsers] = useState<IUser[]>([])

    async function getUser() {
        await fetch("https://reqres.in/api/users")
            .then(response=> response.json())
            .then(json => {
                console.log({json});
                setUsers(json.data)
            })
    }

    return {users, getUser, error}
}
