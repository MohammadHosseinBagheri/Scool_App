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
            <View style={{ flex: 1, backgroundColor: '#455A64' }} >
                <MyHeader
                    left={<Icon name={'arrow-back'} style={{ color: 'white' }} onPress={() => {
                        this.props.navigation.goBack()
                    }} />}
                    right={<Icon name={'book'} style={{ color: 'white' }} />}
                    body={<Text style={{fontFamily:'IRANSansMobile',color:'white',fontSize:16}} >برنامه امتحانات</Text>}
                />
                <View style={{ flex: 1 }}>
                    <FlatList
                        data={this.state.data}
                        numColumns={1}
                        renderItem={({ item, index }) => (
                            <View style={[{
                                flex: 1, justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center', elevation: 2,
                                 borderWidth: 2
                                , borderColor: '#FFEE58',
                                borderRadius:10,
                                margin: 5
                            }, (index % 2 == 0) ? { backgroundColor: '#FF7043' } : { backgroundColor: '#26A69A' }]}>
                                <View style={[{ flex: 1, flexDirection: 'row' },]}>
                                    <Text style={{ fontFamily: 'IRANSansMobile_Medium' }} >امتحان {item.name}</Text>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', }}>
                                    <Text style={{ fontFamily: 'IRANSansMobile_Medium' }}>تاریخ {item.date}</Text>
                                </View>
                            </View>
                        )}
                        keyExtractor={(item, index) => index}
                    />
                </View>
            </View>
        );
    }
    async fetchExamsApi() {
        const property = this.props
        //console.log(property)
        let response = await fetch('http://amir7amiri.ir/amir7amiri/api.php?method=GetExams');
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
