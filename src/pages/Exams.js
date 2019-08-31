import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

class Exams extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[],
        };
    }
    componentWillMount() {

        this.fetchExamsApi()

    }
    render() {

        return (
            <FlatList data={this.state.data} renderItem={({item})=>(
                <View>
                    <Text>{item.name}</Text>
                    <Text>{item.date}</Text>
                </View>
            )} />
        );
    }
    async fetchExamsApi() {
        const property=this.props
        //console.log(property)
        let response = await fetch('http://192.168.1.51:80/proj/api/api.php?method=GetExams');
        let responseJson = await response.json();
        await console.log(responseJson)
        await responseJson.forEach(element => {
            //nemidoonam vaghti barane save beshe hey biyad push kone
            if(element.klass_id===property.navigation.state.params.userInfo.klass_id){
                this.state.data.push(element)
            }
        });
        await console.log(this.state.data)
        //await console.log(this.state.data)
    }
}

export default Exams;
