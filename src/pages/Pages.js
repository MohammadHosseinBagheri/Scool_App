import React from 'react';
import LottieView from 'lottie-react-native';
import { createStackNavigator, createAppContainer, createDrawerNavigator } from "react-navigation"
import Login from "./Login";
import Home from "./Home";
import ShowCourses from './ShowCourses';
import Exams from "./Exams";
import Points from "./Points";
import HelpEmail from "./HelpEmail";
import Loading from "./Loading";
import { Icon, Text, View,  } from "native-base";
import {Image} from 'react-native';
export const MyDrawer = createDrawerNavigator({

    Home: {
        screen: Home,
        navigationOptions: {
            drawerLabel: () => (
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <View style={{ flex: 1, flexDirection: 'row-reverse', alignItems: 'center', marginTop: 10 }}>
                        <Icon name={'home'} style={{ color: '#4DB6AC', marginLeft: 10, marginRight: 5, }} />
                        <Text style={{
                            fontSize: 16, fontFamily: 'IRANSansMobile',
                            textAlign: 'right',
                        }}>خانه </Text>

                    </View>
                    <View style={{ margin: 4, marginLeft: 20, marginRight: 20, borderColor: 'gray', borderWidth: 1, opacity: 0.7 }}></View>
                </View>
            ),
        }
    },
    Exams: {
        screen: Exams,
        navigationOptions: {
            drawerLabel: () => (
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <View style={{ flex: 1, flexDirection: 'row-reverse', alignItems: 'center', marginTop: 10 }}>
                        <Icon name={'school'} style={{ color: '#4DB6AC', marginLeft: 10, marginRight: 5, }} />
                        <Text style={{
                            fontSize: 16, fontFamily: 'IRANSansMobile',
                            textAlign: 'right',
                        }}>امتحانات </Text>

                    </View>
                    <View style={{ margin: 4, marginLeft: 20, marginRight: 20, borderColor: 'gray', borderWidth: 1, opacity: 0.7 }}></View>
                </View>
            ),
        }
    },
    Points: {
        screen: Points,
        navigationOptions: {
            drawerLabel: () => (
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <View style={{ flex: 1, flexDirection: 'row-reverse', alignItems: 'center', marginTop: 10 }}>
                        <Icon name={'paper'} style={{ color: '#4DB6AC', marginLeft: 10, marginRight: 5, }} />
                        <Text style={{
                            fontSize: 16, fontFamily: 'IRANSansMobile',
                            textAlign: 'right',
                        }}> نمرات و کارنامه</Text>

                    </View>
                    <View style={{ margin: 4, marginLeft: 20, marginRight: 20, borderColor: 'gray', borderWidth: 1, opacity: 0.7 }}></View>
                </View>

            ),
        }
    },
    HelpEmail: {
        screen: HelpEmail,
        navigationOptions: {
            drawerLabel: () => (
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <View style={{ flex: 1, flexDirection: 'row-reverse', alignItems: 'center', marginTop: 10 }}>
                        <Icon name={'mail'} style={{ color: '#4DB6AC', marginLeft: 10, marginRight: 5, }} />
                        <Text style={{
                            fontSize: 16, fontFamily: 'IRANSansMobile',
                            textAlign: 'right',
                        }}> ایمیل و پشتیبانی</Text>

                    </View>
                    <View style={{ margin: 4, marginLeft: 20, marginRight: 20, borderColor: 'gray', borderWidth: 1, opacity: 0.7 }}></View>
                </View>
            ),
        }
    },
    ShowCourses: {
        screen: ShowCourses,
        navigationOptions: {
            drawerLabel: () => (
                <LottieView source={require('../animation/book2.json')} style={{width:'100%',height:'100%',flexDirection:'column-reverse'}} autoPlay />
            ),
        }
    }
}
)
const Pages = createStackNavigator({
    Loading: {
        screen: Loading
    },
    Login: {
        screen: Login
    },
    MyDrawer: {
        screen: MyDrawer,

    }
},
    {
        headerMode: 'none'
    },

)

export default createAppContainer(Pages)