import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserDetail from "../view/pages/user/details/user.detail";
import UserList from "../view/pages/user/list/user.list";



export type RootStackParamList = {
  UserList: any
  UserDetail: {
    id: number
  }
}



const Stack = createNativeStackNavigator<RootStackParamList>();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="UserList">
      <Stack.Screen
        name="UserList"
        component={UserList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UserDetail"
        component={UserDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  )
}

export default Router;