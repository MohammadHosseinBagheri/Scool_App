import React, { Component } from 'react';
import { View, Text, Image, AsyncStorage } from 'react-native';
import { Button, Icon, Item, } from 'native-base';
import LottieView from 'lottie-react-native';



var userData
class MyMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    homeRender() {
        
        AsyncStorage.getItem('data', (error, data) => {
            if (error) console.log(error)
            userData = JSON.parse(data)
            //console.log(userData)
        })
        this.props.navigation.navigate('Home')
        this.props.navigation.closeDrawer()
    }

    examRender() {
        AsyncStorage.getItem('data', (error, data) => {
            if (error) console.log(error)
            userData = JSON.parse(data)
            //console.log(userData)
            this.props.navigation.navigate('Exams', {
                userInfo: {
                    klass_id: userData.klass_id
                }
            }
            )
            this.props.navigation.closeDrawer()
        })
        
    }
    pointsRender(){
        AsyncStorage.getItem('data', (error, data) => {
            if (error) console.log(error)
            userData = JSON.parse(data)
            //console.log(userData)
            this.props.navigation.navigate('Points', {
                userInfo: {
                    national_id: userData.national_id
                }
            }
            )
            this.props.navigation.closeDrawer()
        })
    }
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <Button style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }} onPress={this.homeRender.bind(this)}>
                    <Text style={{ textAlign: 'center', fontFamily: 'IRANSansMobile', marginRight: 5, fontSize: 14 }}  >
                        خانه
                        </Text>
                    <Icon name={'home'} />
                </Button>

                <Item style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }} onPress={this.examRender.bind(this)}  >
                    <Text style={{ textAlign: 'center', fontFamily: 'IRANSansMobile', marginRight: 5, fontSize: 14 }} >
                        امتحانات
                        </Text>
                    <Icon name={'school'} />
                </Item>
                <Item style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }} onPress={this.pointsRender.bind(this)}  >
                    <Text style={{ textAlign: 'center', fontFamily: 'IRANSansMobile', marginRight: 5, fontSize: 14 }} >
                        نمرات و کارنامه
                        </Text>
                    <Icon name={'paper'} />
                </Item>
                <Item style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }} onPress={this.helpEmailRender.bind(this)} >
                    <Text style={{ textAlign: 'center', fontFamily: 'IRANSansMobile', marginRight: 5, fontSize: 14 }} >
                        ایمیل و پشتیبانی
                        </Text>
                    <Icon name={'mail'} />
                </Item>
                <View style={{ flex: 5, justifyContent: 'center', alignItems: 'center' }} >
                    <LottieView source={require('../animation/book2.json')} style={{ width: '100%', height: '100%', }} autoPlay />
                </View>
            </View>
        );
    }
}

export default MyMenu;
