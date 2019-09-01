import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import MyHeader from '../components/MyHeader';
import { Icon, Card, CardItem, Right, Thumbnail, Body, Left, Button, Spinner, ScrollView } from 'native-base';
import Modal from 'react-native-modalbox';
import { FlatList } from 'react-native-gesture-handler';

class MyModal extends Component {
    constructor(props) {
        super(props)
    }

    showModal() {
        this.refs.modal.open()
    }
    Exams() {
        const property = this.props.someProp
        const userInfo = property.navigation.state.params
        const klass_id = userInfo.userData.element.klass_id
        //console.log(national_id)
        property.navigation.navigate('Exams', {
            userInfo: {
                klass_id: klass_id
            }
        })
    }
    showPoint() {
        console.log(this.props)
        const national_id = this.props.someProp.navigation.state.params.userData.element.national_id
        console.log(national_id)
        this.props.someProp.navigation.navigate('Points', {
            userInfo: {
                national_id: national_id
            }
        })
    }
    help(){
        console.log(this.props)
        const userInfo=this.props
        this.props.someProp.navigation.navigate('HelpEmail', {
            userInfo: {
                national_id: userInfo
            }
        })
    }
    render() {
        const screen = Dimensions.get('window')
        return (
            <Modal
                style={{
                    backgroundColor: '#263238',
                    borderRadius: 10,
                    marginTop: 10,
                    justifyContent: 'center',
                    width: screen.width - 20,
                }}
                position={'bottom'}
                ref={'modal'}
                backdrop={true}
                onClosed={() => {
                    alert('modal closed')
                }}>
                <View style={{ margin: 5, flex: 1, flexDirection: 'column', backgroundColor: '#455A64' }}>
                    <View style={{ flex: 1, justifyContent: 'space-around', flexDirection: 'row', margin: 7 }}>
                        <Button style={{ elevation: 10, borderRadius: 15, backgroundColor: '#FF7043' }} onPress={this.showPoint.bind(this)} >
                            <Text style={{ padding: 10, fontFamily: 'IRANSansMobile', fontSize: 16 }}>
                                نمرات
                            </Text>
                        </Button>
                        <Button style={{ elevation: 10, borderRadius: 15, backgroundColor: '#FF7043' }} onPress={this.Exams.bind(this)} >
                            <Text style={{ padding: 10, fontFamily: 'IRANSansMobile', fontSize: 16 }}>
                                برنامه امتحانات
                            </Text>
                        </Button>

                    </View>
                    <View style={{ flex: 1, justifyContent: 'space-around', flexDirection: 'row', margin: 7 }}>
                        <Button style={{ elevation: 10, backgroundColor: '#FF7043', borderRadius: 15 }}>
                            <Text style={{ padding: 10, fontFamily: 'IRANSansMobile', fontSize: 16 }}>
                                اطلاعیه ها
                            </Text>
                        </Button>
                        <Button style={{ elevation: 10, borderRadius: 15, backgroundColor: '#FF7043' }} onPress={this.help.bind(this)}>
                            <Text style={{ padding: 10, fontFamily: 'IRANSansMobile', fontSize: 16 }}>
                                پشتیبانی و ایمیل دبیر ها
                            </Text>
                        </Button>
                    </View>
                </View>
            </Modal>
        )
    }
}

class Home extends Component {
    constructor(props) {
        super(props);
        this.showInformation = this.showInformation.bind(this)
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

    render() {

        let username = this.props.navigation.state.params.userData.element.first_name + " " + this.props.navigation.state.params.userData.element.last_name;
        return (
            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#455A64' }}>
                <MyHeader
                    //left={<Icon name={'person'} style={{color:'white'}}></Icon>}
                    body={<Text style={{ color: 'white', fontFamily: 'IRANSansMobile_Medium' }} >{username}</Text>}
                    right={<Icon name={'person'} style={{ color: 'white' }}></Icon>} />
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
                    </Card>
                </View>
                <View style={{
                    flex: 0.5
                }}>
                    <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'center' }}>
                        <Button onPress={this.showInformation}  >
                            <Text style={{ marginLeft: 8, marginRight: 8, fontFamily: 'IRANSansMobile_Light', fontSize: 18 }}>
                                نمایش اطلاعات
                                    </Text>
                        </Button>
                    </View>
                    <View style={{ flex: 1 }}>
                        <MyModal ref={'modal'} someProp={this.props} >

                        </MyModal>
                    </View>
                </View>

            </View>
        );
    }
    showInformation() {
        //console.log(this.props)
        //this.props.navigation.navigate('ShowCourses')
        this.refs.modal.showModal()
    }
    async fetchData() {
        let fetchh = await fetch('http://192.168.1.51:80/proj/api/api.php?method=GetStuCorses')
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
