import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Card, CardItem, Icon } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import MyHeader from '../components/MyHeader';
class Points extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []

        };
    }
    async componentWillMount() {
        await this.fetchPoints();
    }
    render() {
        const property = this.props
        return (
            <View style={{ flex: 1, backgroundColor: '#455A64' }} >
                <MyHeader
                    left={<Icon name={'arrow-back'} style={{ color: 'white' }} onPress={() => {
                        this.props.navigation.goBack()
                    }} />}
                    right={<Icon name={'book'} style={{ color: 'white' }} />}
                    body={<Text style={{ fontFamily: 'IRANSansMobile', color: 'white', fontSize: 16 }} >نمرات و کارنامه  </Text>}
                />
                <FlatList
                    data={this.state.data}
                    keyExtractor={({ item, index }) => (index)}
                    renderItem={
                        ({ item }) => (
                            <View>
                                <Card>

                                    <CardItem header bordered style={{ backgroundColor: '#ECEFF1' }} >
                                        <View style={{ flex: 1, flexDirection: 'row-reverse', justifyContent: 'space-between' }}>
                                            <Text style={[styles.cardBodyText, { fontFamily: 'IRANSansMobile_Light', elevation: 5 }]}> نام درس : {item.Corse_name} </Text>
                                            <Text style={[styles.cardBodyText, { fontFamily: 'IRANSansMobile_Light', elevation: 5 }]}>  نوع : {item.type} </Text>
                                            <Text style={[styles.cardBodyText, { fontFamily: 'IRANSansMobile_Light', elevation: 5 }]}>   کلید :  {item.exam_id} </Text>
                                        </View>
                                    </CardItem>

                                    <CardItem cardBody style={{ flex: 1 }}>
                                        <LinearGradient colors={['#FF7043','#FFF176','#66BB6A']} style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', }} >
                                                <Text style={styles.cardBodyText}>  نمره :  {item.grade} </Text>
                                                <Text style={styles.cardBodyText}>  سال :  {item.year} </Text>
                                                <Text style={styles.cardBodyText}>  ماه :  {item.month} </Text>
                                                <Text style={styles.cardBodyText}>  روز :  {item.day} </Text>
                                                <Text style={styles.cardBodyText}>  نام ارزیابی :  {item.exam_name} </Text>
                                        </LinearGradient>
                                    </CardItem>
                                </Card>
                            </View>
                        )
                    }
                />
            </View>
        );
    }
    async fetchPoints() {
        let response = await fetch('http://192.168.1.51:80/proj/api/api.php?method=GetStuCorses')
        let responseJson = await response.json();
        await console.log(responseJson)
        this.auth(responseJson)
    }
    auth(data) {
        const property = this.props;
        data.forEach(element => {
            if (element.stu_national_id == property.navigation.state.params.userInfo.national_id) {
                this.state.data.push(element)
            }
        });
    }
}
const styles = StyleSheet.create({
    cardBodyText: {
        fontFamily: 'IRANSansMobile',
        fontSize: 15,
        color: 'black'
    }
})
export default Points;
