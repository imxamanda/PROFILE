import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// ROTAS
import Home from "../screens/home/Home";
import Post from "../screens/post/Post";
import User from "../screens/usuario/User";

const Stack = createStackNavigator();

export default function Router() {
    return (
        <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
         <Stack.Screen name="Post" component={Post} /> 
        <Stack.Screen name="User" component={User} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}