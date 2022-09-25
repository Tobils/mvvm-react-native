import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { IUser } from '../../../model/user/user.interface'

export interface IUserListProps {
  user: IUser
  onClick: (parameter: any) => any
}

const List: FC<IUserListProps> = ({user, onClick}) : JSX.Element=> {
  return (
    <TouchableOpacity style={styles.container} onPress={onClick}>
      <View>
        <Image 
          style={styles.profile}
          source={{uri: user.avatar}}
        />
      </View>
      <View style={styles.textWrapper}>
        <Text style={{color: 'black'}}>{user.first_name} {user.last_name}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: 'column',
    alignItems: 'center',
    margin: 5,
    padding: 5,
    borderRadius: 10,
    backgroundColor: '#FAFAFA'
  },
  profile: {
    borderRadius: 50,
    width: 100,
    height: 100,
    margin: 10
  },
  textWrapper: {
    flex: 1,
    flexDirection: 'column',
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
  }
})

export default List