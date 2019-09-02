import { createStackNavigator, createAppContainer } from "react-navigation"
import Login from "./Login";
import Home from "./Home";
import ShowCourses from './ShowCourses';
import Exams from "./Exams";
import Points from "./Points";
import HelpEmail from "./HelpEmail";
import Loading from "./Loading";
const Pages = createStackNavigator({
    Loading:{
        screen:Loading
    },
    Login: {
        screen: Login
    },
    Home: {
        screen: Home,
    },
    ShowCourses: {
        screen: ShowCourses
    },
    Exams: {
        screen: Exams
    },
    Points: {
        screen: Points
    },
    HelpEmail: {
        screen: HelpEmail
    }
},
    {
        headerMode: 'none'
    },

)
export default createAppContainer(Pages)