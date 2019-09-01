import { createStackNavigator, createAppContainer } from "react-navigation"
import Login from "./Login";
import Home from "./Home";
import ShowCourses from './ShowCourses';
import Exams from "./Exams";
import Points from "./Points";
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
    },
    Points:{
        screen:Points
    }
},
    {
        headerMode: 'none'
    },
)
export default createAppContainer(Pages)