import { createStackNavigator, createAppContainer } from "react-navigation"
import Login from "./Login";
import Home from "./Home";
import ShowCourses from './ShowCourses';
const Pages = createStackNavigator({
    Login: {
        screen: Login
    },
    Home: {
        screen: Home,
    },
    ShowCourses:{
        screen:ShowCourses
    }
},
    {
        headerMode: 'none'
    },
)
export default createAppContainer(Pages)