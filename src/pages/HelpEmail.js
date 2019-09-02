import React, { Component } from 'react';
import { View, Text ,StyleSheet} from 'react-native';
import { Card, CardItem, Thumbnail,Icon } from 'native-base';
import { FlatList } from 'react-native-gesture-handler';
import MyHeader from '../components/MyHeader';
class HelpEmail extends Component {
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
            <View style={{ flex: 1,backgroundColor:'#455A64' }}>
                <MyHeader
                    left={<Icon name={'arrow-back'} style={{ color: 'white' }} onPress={() => {
                        this.props.navigation.goBack()
                    }} />}
                    right={<Icon name={'mail'} style={{ color: 'white' }} />}
                    body={<Text style={{ fontFamily: 'IRANSansMobile', color: 'white', fontSize: 16 }} > پشتیبانی و ایمیل    </Text>}
                />
                <FlatList data={this.state.Teachers}
                    renderItem={({ item, index }) => (
                        <Card>
                            <CardItem header bordered style={{backgroundColor:'#FFF59D'}} >
                                <Thumbnail source={{uri:'https://pickaface.net/assets/images/slides/slide2.png'}} />
                                <View style={{ flex: 1 }}>
                                    <Text style={[styles.cardBodyText,{ fontFamily: 'IRANSansMobile_Light', elevation: 5 }]}>
                                        آقای {item.first_name} {item.last_name}
                                    </Text>
                                </View>
                            </CardItem>
                            <CardItem cardBody style={{backgroundColor:'#FF8A65'}}>
                                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                    <Text style={styles.cardBodyText}>
                                        ایمیل : {item.email}
                                    </Text>
                                </View>
                            </CardItem>
                        </Card>
                    )}
                    keyExtractor={({ item, index }) => (index)}
                />
            </View>
        );
    }
    async fetchTecherEmail() {
        let response = await fetch('http://192.168.1.51:80/proj/api/api.php?method=GetTeachers')
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
