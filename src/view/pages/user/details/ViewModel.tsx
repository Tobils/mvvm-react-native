import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { IUser } from '../../../../model/user/user.interface'

export default function UserDetailViewModel(){
    const [error, setError] = useState("")
    const [user, setUser] = useState<IUser>()

    async function getUserDetail(id:number) {
        await fetch(`https://reqres.in/api/users/${id}`)
            .then(response=> response.json())
            .then(json => {
                console.log({json});
                setUser(json.data)
            })
    }

    return {user, getUserDetail, error}
}
