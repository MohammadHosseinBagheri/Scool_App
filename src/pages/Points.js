import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Card, CardItem } from 'native-base';

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
            <View style={{ flex: 1 }} >
                <FlatList
                    data={this.state.data}
                    keyExtractor={({ item, index }) => index}
                    renderItem={
                        ({ item }) => (
                            <View>
                                <Card>
                                    <CardItem header bordered>
                                        <View style={{flex:1,flexDirection:'row-reverse',justifyContent:'space-between'}}>
                                            <Text> نام درس : {item.Corse_name} </Text>
                                            <Text>  نوع : {item.type} </Text>
                                            <Text>   کلید :  {item.exam_id} </Text>
                                        </View>
                                    </CardItem>
                                    <CardItem cardBody>
                                        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', }} >

                                            <Text>  نمره :  {item.grade} </Text>
                                            <Text>  سال :  {item.year} </Text>
                                            <Text>  ماه :  {item.month} </Text>
                                            <Text>  روز :  {item.day} </Text>
                                            <Text>  نام ارزیابی :  {item.exam_name} </Text>

                                        </View>
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
        //await console.log(responseJson)
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

export default Points;
