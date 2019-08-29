import { createStackNavigator, createAppContainer } from "react-navigation"
import Login from "./Login";
import Home from "./Home";
const Pages = createStackNavigator({
    Login: {
        screen: Login
    },
    Home: {
        screen: Home,
        
    }
},
{headerMode:'none'},
)
export default createAppContainer(Pages)