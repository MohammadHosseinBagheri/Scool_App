import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MyHeader from '../components/MyHeader';
import { Icon, Card, CardItem, Right, Thumbnail, Body, Left, Button, Spinner, } from 'native-base';
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
    }
    componentWillMount() {
        this.state = {
            data: this.props.navigation.state.params.userData.element,
            Courses: [],
            isLoading: true,
        }
        //console.log(this.props.navigation.state.params.userData.element);

        console.log(this.state.data)
        this.fetchData();

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
                                <Thumbnail style={styles.thumnail} source={{ uri: 'https://pickaface.net/assets/images/slides/slide2.png' }} />
                            </Left>
                            <Body>
                                <Text style={styles.cardBodyText}>اطلاعات درسی دانش آموز</Text>
                                <Text style={styles.cardBodyText} note={true}>{this.props.navigation.state.params.userData.element.first_name + " " + this.props.navigation.state.params.userData.element.last_name}</Text>
                            </Body>
                        </CardItem>
                        <CardItem style={styles.secondCardItem}>
                            <Right>
                                <Text style={styles.secondCardItemRightText}>میانگین دروس : </Text>
                            </Right>
                            <Left>
                                <Text style={styles.secondCardItemLeftText}>
                                    {this.props.navigation.state.params.userData.element.total_Ave}
                                </Text>
                            </Left>
                        </CardItem>
                        <CardItem style={styles.thrCardItem} >
                            <Right>
                                <Text style={styles.thrCardItemRightText}>  شماره موبایل : </Text>
                            </Right>
                            <Left>
                                <Text style={styles.thrCardItemLeftText}>
                                    {this.props.navigation.state.params.userData.element.mobile_phone}
                                </Text>
                            </Left>
                        </CardItem>
                        <CardItem style={styles.fourCardItem} >
                            <Right>
                                <Text style={styles.fourCardItemRightText}>  شماره موبایل پدر : </Text>
                            </Right>
                            <Left>
                                <Text style={styles.fourCardItemLeftText}>
                                    {this.props.navigation.state.params.userData.element.father_mobile}
                                </Text>
                            </Left>
                        </CardItem>
                        <CardItem>

                        </CardItem>
                    </Card>
                </View>
                <View style={{
                    flex: 0.5
                }}>
                    {/* <FlatList
                                data={this.state.Courses}
                                renderItem={({ item }) => {
                                    if (item.stu_national_id == this.props.navigation.state.params.userData.element.national_id) {
                                        return <BasicItem average={item.exam_name} ></BasicItem>
                                    }
                                }}
                            /> */}
                    {
                        this.state.isLoading
                            ?
                            (
                                <Spinner color='yellow' />
                            )
                            :
                            (
                                <Button onPress={this.showInformation.bind(this)}>
                                    <Text>
                                        نمایش اطلاعات کلی 
                                    </Text>
                                </Button>
                            )
                    }
                </View>
            </View>
        );
    }
    showInformation(){
        console.log(this.props)
        this.props.navigation.navigate('ShowCourses')
    }
    async fetchData() {
        let fetchh = await fetch('http://192.168.1.52:80/proj/api/api.php?method=GetStuCorses')
        let response = await fetchh.json()
        //console.log(response)
        this.setState({
            Courses: response,
            isLoading: false
        })
        //console.log(this.state.Courses)
    }
}
const styles = StyleSheet.create({

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
    text: {
        color: "black",
        fontSize: 22
    },
    thumnail: {
        width: 40,
        height: 40
    },
    cardBodyText: {
        fontFamily: 'IRANSansMobile'
    },
    secondCardItem: {
        flexDirection: 'row-reverse'
    },
    secondCardItemRightText: {
        fontFamily: 'IRANSansMobile_UltraLight',
        fontSize: 18,
        marginRight: '2%'
    },
    secondCardItemLeftText: {
        marginLeft: '3%',
        fontFamily: 'IRANSansMobile'
    },
    thrCardItem: {
        flexDirection: 'row-reverse'
    },
    thrCardItemRightText: {
        fontFamily: 'IRANSansMobile_UltraLight',
        fontSize: 18,
        marginRight: '2%'
    },
    thrCardItemLeftText: {
        marginLeft: '3%',
        fontFamily: 'IRANSansMobile'
    },
    fourCardItem: {
        flexDirection: 'row-reverse'
    },
    fourCardItemRightText: {
        fontFamily: 'IRANSansMobile_UltraLight',
        fontSize: 16,
        marginRight: '2%'
    },
    fourCardItemLeftText: {
        marginLeft: '3%',
        fontFamily: 'IRANSansMobile'
    }
})
export default Home;
