import { createStackNavigator, createAppContainer } from "react-navigation"
import Login from "./Login";
import Home from "./Home";
import ShowCourses from './ShowCourses';
import Exams from "./Exams";
const Pages = createStackNavigator({
    Login: {
        screen: Login
    },
    Home: {
        screen: Home,
    },
    ShowCourses:{
        screen:ShowCourses
    },
    Exams:{
        screen:Exams
    }
},
    {
        headerMode: 'none'
    },
)
export default createAppContainer(Pages)