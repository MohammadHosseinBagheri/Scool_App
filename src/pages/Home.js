import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MyHeader from '../components/MyHeader';
import { Icon, Card, CardItem, Right, Thumbnail, Body, Left, Button, } from 'native-base';
import Modal from 'react-native-modalbox';

import { FlatList } from 'react-native-gesture-handler';

class BasicItem extends Component {
    render() {
        const { average } = this.props
        return (
            <View>
                <Text>{average}</Text>
            </View>
        )
    }
}

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            isDisabled: false,
            swipeToClose: true,
            sliderValue: 0.3,
        }

    }
    componentWillMount() {
        this.state = {
            data: this.props.navigation.state.params.userData.element,

            Courses: []
        }
        //console.log(this.props.navigation.state.params.userData.element);

        console.log(this.state.data)
        this.fetchData();
        console.log(this.state.Courses)

    }

    renderList() {
        var list = [];

        for (var i = 0; i < 50; i++) {
            list.push(<Text style={styles.text} key={i}>Elem {i}</Text>);
        }

        return list;
    }

    render() {

        let username = this.props.navigation.state.params.userData.element.first_name + " " + this.props.navigation.state.params.userData.element.last_name;
        return (
            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#455A64' }}>
                <MyHeader
                    //left={<Icon name={'person'} style={{color:'white'}}></Icon>}
                    body={<Text style={{ color: 'white', fontFamily: 'IRANSansMobile_Medium' }} >{username}</Text>}
                    right={<Icon name={'person'} style={{ color: 'white' }}></Icon>} />
                {/* <BasicItem 
                    average={<Text>{this.props.navigation.state.params.userData.element.total_Ave}</Text>}
                    phone={this.props.navigation.state.params.userData.element.mobile_phone}
                    fatherPhon={this.props.navigation.state.params.userData.element.father_mobile}
                    /> */}

                <View style={{ flex: 0.5 }}>
                    <Card>
                        <CardItem header bordered >
                            <Left>
                                <Thumbnail style={{ width: 40, height: 40 }} source={{ uri: 'https://pickaface.net/assets/images/slides/slide2.png' }} />
                            </Left>
                            <Body>
                                <Text style={{ fontFamily: 'IRANSansMobile' }}>اطلاعات درسی دانش آموز</Text>
                                <Text style={{ fontFamily: 'IRANSansMobile' }} note={true}>{this.props.navigation.state.params.userData.element.first_name + " " + this.props.navigation.state.params.userData.element.last_name}</Text>
                            </Body>
                        </CardItem>
                        <CardItem style={{ flexDirection: 'row-reverse' }}>
                            <Right>
                                <Text style={{ fontFamily: 'IRANSansMobile_UltraLight', fontSize: 18, marginRight: '2%' }}>میانگین دروس : </Text>
                            </Right>
                            <Left>
                                <Text style={{ marginLeft: '3%', fontFamily: 'IRANSansMobile' }}>
                                    {this.props.navigation.state.params.userData.element.total_Ave}
                                </Text>
                            </Left>
                        </CardItem>
                        <CardItem style={{ flexDirection: 'row-reverse' }} >
                            <Right>
                                <Text style={{ fontFamily: 'IRANSansMobile_UltraLight', fontSize: 18, marginRight: '2%' }}>  شماره موبایل : </Text>
                            </Right>
                            <Left>
                                <Text style={{ marginLeft: '3%', fontFamily: 'IRANSansMobile' }}>
                                    {this.props.navigation.state.params.userData.element.mobile_phone}
                                </Text>
                            </Left>
                        </CardItem>
                        <CardItem style={{ flexDirection: 'row-reverse' }} >
                            <Right>
                                <Text style={{ fontFamily: 'IRANSansMobile_UltraLight', fontSize: 16, marginRight: '2%' }}>  شماره موبایل پدر : </Text>
                            </Right>
                            <Left>
                                <Text style={{ marginLeft: '3%', fontFamily: 'IRANSansMobile' }}>
                                    {this.props.navigation.state.params.userData.element.father_mobile}
                                </Text>
                            </Left>
                        </CardItem>
                        <CardItem>

                        </CardItem>
                    </Card>
                </View>
                <View style={{
                    paddingTop: 50,
                    flex: 1
                }}>
                    <Button onPress={() => this.refs.modal1.open()} style={styles.btn}><Text style={styles.text}>نمایش دروس</Text></Button>
                    <Modal style={[styles.modal, styles.modal]} position={"center"} ref={"modal1"} isDisabled={this.state.isDisabled}>
                        <Button onPress={() => this.setState({ isDisabled: !this.state.isDisabled })} style={styles.btn} >
                            <Text>s</Text>
                        </Button>
                        <FlatList
                            data={this.state.Courses}
                            renderItem={({ item }) => {
                                if (item.stu_national_id == this.props.navigation.state.params.userData.element.national_id) {
                                    return <BasicItem average={item.exam_name} ></BasicItem>
                                }
                            }}
                        />
                    </Modal>
                </View>
            </View>
        );
    }
    async fetchData() {
        let fetchh = await fetch('http://192.168.1.53:80/proj/api/api.php?method=GetStuCorses')
        let response = await fetchh.json()
        //console.log(response)
        this.setState({
            Courses: response
        })
        //console.log(this.state.Courses)
    }
}
const styles = StyleSheet.create({
    btn: {
        margin: 10,
        backgroundColor: "#3B5998",
        color: "white",
        padding: 10
    },
    headerTitle: {
        flexDirection: 'row',
        fontSize: 20,
        right: 0,
        color: 'white',
        justifyContent: 'flex-end',
    },
    headerRight: {
        fontSize: 16,
        right: 0,
        color: 'white'
    },
    headerLeft: {
        color: '#00E676',
    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    modal: {
        height: 300,
        width: 300
    },
    text: {
        color: "black",
        fontSize: 22
    }
})
export default Home;
