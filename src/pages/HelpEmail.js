import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, CardItem, Thumbnail, Icon, Button } from 'native-base';
import { FlatList } from 'react-native-gesture-handler';
import LottieView from 'lottie-react-native';
import MyHeader from '../components/MyHeader';
class HelpEmail extends Component {
    static navigationOptions = ({ navigation }) => (
        this.props
    )
    constructor(props) {
        super(props);
        this.state = {
            Teachers: []
        };
    }
    componentWillMount() {
        this.fetchTecherEmail()
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#455A64' }}>
                <MyHeader
                    left={<Icon name={'arrow-back'} style={{ color: 'white' }} onPress={() => {
                        this.props.navigation.goBack()
                    }} />}
                    right={
                        <LottieView style={{ width: 40 }} source={require('../animation/email.json')} autoPlay loop/>}
                    body={<Text style={{ fontFamily: 'IRANSansMobile', color: 'white', fontSize: 16 }} > پشتیبانی و ایمیل    </Text>}
                />
                {
                    this.state.Teachers.length == 0
                        ?
                        (<LottieView style={{ flex: 1 }} source={require('../animation/loading2.json')} autoPlay loop />)
                        :
                        (<FlatList data={this.state.Teachers}
                            renderItem={({ item, index }) => (
                                <Card>
                                    <CardItem header bordered style={{ backgroundColor: '#FFF59D' }} >
                                        <Thumbnail source={{ uri: 'https://pickaface.net/assets/images/slides/slide2.png' }} />
                                        <View style={{ flex: 1 }}>
                                            <Text style={[styles.cardBodyText, { fontFamily: 'IRANSansMobile_Light', elevation: 5 }]}>
                                                آقای {item.first_name} {item.last_name}
                                            </Text>
                                        </View>
                                    </CardItem>
                                    <CardItem cardBody style={{ backgroundColor: '#FF8A65' }}>
                                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={styles.cardBodyText}>
                                                ایمیل : {item.email}
                                            </Text>
                                        </View>
                                    </CardItem>
                                </Card>
                            )}
                            keyExtractor={({ item }) => (item)}
                        />)
                }
            </View>
        );
    }
    async fetchTecherEmail() {
        let response = await fetch('http://amir7amiri.ir/amir7amiri/api.php?method=GetTeachers')
        let responseJson = await response.json();
        await this.setState({
            Teachers: responseJson
        })
        await console.log(this.state.Teachers)
    }
}
const styles = StyleSheet.create({
    cardBodyText: {
        fontFamily: 'IRANSansMobile',
        fontSize: 15,
        color: 'black'
    }
})

export default HelpEmail;
