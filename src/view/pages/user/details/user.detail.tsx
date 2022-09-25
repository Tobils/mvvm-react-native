import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect } from "react"
import { Image, StyleSheet, Text, View } from "react-native"
import { RootStackParamList } from "../../../../router";
import useViewModel from "./ViewModel";


type UserDetailProps = NativeStackScreenProps<RootStackParamList, 'UserDetail'>;


function UserDetail({route, navigation}: UserDetailProps ){
  const {id} = route.params

  const {getUserDetail, user} = useViewModel()


  useEffect(() => {
    getUserDetail(id)
  }, [])

  return (<View style={styles.container}>
    <Image  style={styles.profile}
          source={{uri: user?.avatar}}/>
    <Text style={{color: 'black'}}>{user?.first_name} {user?.last_name}</Text>
    <Text style={{color: 'black'}}>{user?.email}</Text>
  </View>)
}


const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: 'column',
    alignItems: 'center',
    margin: 10,
    padding: 10,
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

export default UserDetail