import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import MyHeader from '../components/MyHeader';
import { Icon } from 'native-base';

class Exams extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }
    componentWillMount() {

        this.fetchExamsApi()

    }
    render() {

        return (
            <View style={{ flex: 1 }} >
                <MyHeader
                    left={<Icon name={'arrow-back'} style={{ color: 'white' }} onPress={() => {
                        this.props.navigation.goBack()
                    }} />}
                    right={<Icon name={'book'} style={{color:'green'}}/>}

                />
                <View style={{ flex: 1 }}>
                    <FlatList
                        data={this.state.data}
                        numColumns={2}
                        renderItem={({ item }) => (
                            <View style={{
                                flex: 1, justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center', elevation: 2, borderWidth: 2
                                , borderColor: 'blue',
                                margin: 5
                            }}>
                                <View style={{ flex: 1, flexDirection: 'row', }}>
                                    <Text>امتحان {item.name}</Text>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', }}>
                                    <Text>تاریخ {item.date}</Text>
                                </View>
                            </View>
                        )}
                    />
                </View>
            </View>
        );
    }
    async fetchExamsApi() {
        const property = this.props
        //console.log(property)
        let response = await fetch('http://192.168.1.51:80/proj/api/api.php?method=GetExams');
        let responseJson = await response.json();
        await console.log(responseJson)
        await responseJson.forEach(element => {
            //nemidoonam vaghti barane save beshe hey biyad push kone
            if (element.klass_id === property.navigation.state.params.userInfo.klass_id) {
                this.state.data.push(element)
            }
        });
        await console.log(this.state.data)
        //await console.log(this.state.data)
    }
}

export default Exams;
