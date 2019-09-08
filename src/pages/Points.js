import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Card, CardItem, Icon, Picker } from 'native-base';
import MyHeader from '../components/MyHeader';
class Points extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            pickerValue: 0,

        };
    }
    async componentWillMount() {
        await this.fetchPoints();
        await console.log(this.state.data)
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#455A64', flexDirection: 'column' }} >
                <StatusBar hidden />
                <MyHeader
                    left={<Icon name={'arrow-back'} style={{ color: 'white' }} onPress={() => {
                        this.props.navigation.goBack()
                    }} />}
                    right={<Icon name={'book'} style={{ color: 'white' }} onPress={() => {
                        this.props.navigation.openDrawer()
                    }} />}
                    body={<Text style={{ fontFamily: 'IRANSansMobile', color: 'white', fontSize: 16 }} >نمرات و کارنامه  </Text>}
                />
                <View style={{ flex: 0.1, flexDirection: 'row-reverse', justifyContent: 'center', alignItems: 'center', marginRight: 10 }} >
                    <Text style={{ color: 'white', fontFamily: 'IRANSansMobile', fontSize: 16, textAlign: 'center', marginRight: 10 }}>
                        تفکیک نمرات به صورت ماه
                    </Text>
                    <Picker
                        placeholderIconColor={'red'}
                        selectedValue={this.state.pickerValue}
                        style={{ height: 50, width: 70, fontFamily: 'IRANSansMobile', color: 'white', borderColor: 'white', borderBottomWidth: 2 }}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ pickerValue: itemValue })}
                    >
                        <Picker.Item label={'تمام نمرات'} value={0} />
                        <Picker.Item label={'مهر'} value={7} />
                        <Picker.Item label={'ابان'} value={8} />
                        <Picker.Item label={'آذر'} value={9} />
                        <Picker.Item label={'دی'} value={10} />
                        <Picker.Item label={'بهمن'} value={11} />
                        <Picker.Item label={'اسفند'} value={12} />
                        <Picker.Item label={'فروردین'} value={1} />
                        <Picker.Item label={'اردیبهشت'} value={2} />
                        <Picker.Item label={'خرداد'} value={3} />
                        <Picker.Item label={'شهریور'} value={5} />

                    </Picker>
                </View>
                <View style={{ flex: 1 }} >
                    {
                        this.state.pickerValue == 0 ? (
                            <FlatList
                                data={this.state.data}

                                renderItem={
                                    ({ item, index }) => (
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
                                                    <View style={[{ flex: 1, flexDirection: 'column', justifyContent: 'center', }, (index % 2 == 0) ? { backgroundColor: '#FF7043' } : { backgroundColor: '#26A69A' }]} >
                                                        <Text style={styles.cardBodyText}>  نمره :  {item.grade} </Text>
                                                        <Text style={styles.cardBodyText}>  سال :  {item.year} </Text>
                                                        <Text style={styles.cardBodyText}>  ماه :  {item.month} </Text>
                                                        <Text style={styles.cardBodyText}>  روز :  {item.day} </Text>
                                                        <Text style={styles.cardBodyText}>  نام ارزیابی :  {item.exam_name} </Text>
                                                    </View>
                                                </CardItem>
                                            </Card>
                                        </View>
                                    )
                                }
                                keyExtractor={() => (Math.floor(Math.random() * 10000).toString())}
                            />
                        )
                            :
                            this.state.pickerValue == 7 ? (
                                <FlatList
                                    data={this.state.data}
                                    keyExtractor={() => (Math.floor(Math.random() * 10000).toString())}
                                    renderItem={
                                        ({ item, index }) => (
                                            (item.month == 7 ? (
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
                                                            <View style={[{ flex: 1, flexDirection: 'column', justifyContent: 'center', }, (index % 2 == 0) ? { backgroundColor: '#FF7043' } : { backgroundColor: '#26A69A' }]} >
                                                                <Text style={styles.cardBodyText}>  نمره :  {item.grade} </Text>
                                                                <Text style={styles.cardBodyText}>  سال :  {item.year} </Text>
                                                                <Text style={styles.cardBodyText}>  ماه :  {item.month} </Text>
                                                                <Text style={styles.cardBodyText}>  روز :  {item.day} </Text>
                                                                <Text style={styles.cardBodyText}>  نام ارزیابی :  {item.exam_name} </Text>
                                                            </View>
                                                        </CardItem>
                                                    </Card>
                                                </View>
                                            )
                                                :
                                                (null)
                                            )
                                        )
                                    }
                                />
                            )
                                :
                                this.state.pickerValue == 8 ?
                                    (
                                        <FlatList
                                            data={this.state.data}
                                            keyExtractor={() => (Math.floor(Math.random() * 10000).toString())}
                                            renderItem={
                                                ({ item, index }) => (
                                                    (item.month == 8 ? (
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
                                                                    <View style={[{ flex: 1, flexDirection: 'column', justifyContent: 'center', }, (index % 2 == 0) ? { backgroundColor: '#FF7043' } : { backgroundColor: '#26A69A' }]} >
                                                                        <Text style={styles.cardBodyText}>  نمره :  {item.grade} </Text>
                                                                        <Text style={styles.cardBodyText}>  سال :  {item.year} </Text>
                                                                        <Text style={styles.cardBodyText}>  ماه :  {item.month} </Text>
                                                                        <Text style={styles.cardBodyText}>  روز :  {item.day} </Text>
                                                                        <Text style={styles.cardBodyText}>  نام ارزیابی :  {item.exam_name} </Text>
                                                                    </View>
                                                                </CardItem>
                                                            </Card>
                                                        </View>
                                                    )
                                                        :
                                                        (null)
                                                    )
                                                )
                                            }
                                        />
                                    )
                                    :
                                    this.state.pickerValue == 9 ? (
                                        <FlatList
                                            data={this.state.data}
                                            keyExtractor={() => (Math.floor(Math.random() * 10000).toString())}
                                            renderItem={
                                                ({ item, index }) => (
                                                    (item.month == 9 ? (
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
                                                                    <View style={[{ flex: 1, flexDirection: 'column', justifyContent: 'center', }, (index % 2 == 0) ? { backgroundColor: '#FF7043' } : { backgroundColor: '#26A69A' }]} >
                                                                        <Text style={styles.cardBodyText}>  نمره :  {item.grade} </Text>
                                                                        <Text style={styles.cardBodyText}>  سال :  {item.year} </Text>
                                                                        <Text style={styles.cardBodyText}>  ماه :  {item.month} </Text>
                                                                        <Text style={styles.cardBodyText}>  روز :  {item.day} </Text>
                                                                        <Text style={styles.cardBodyText}>  نام ارزیابی :  {item.exam_name} </Text>
                                                                    </View>
                                                                </CardItem>
                                                            </Card>
                                                        </View>
                                                    )
                                                        :
                                                        (null)
                                                    )
                                                )
                                            }
                                        />
                                    )
                                        :
                                        this.state.pickerValue == 10 ? (
                                            <FlatList
                                                data={this.state.data}
                                                keyExtractor={() => (Math.floor(Math.random() * 10000).toString())}
                                                renderItem={
                                                    ({ item, index }) => (
                                                        (item.month == 10 ? (
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
                                                                        <View style={[{ flex: 1, flexDirection: 'column', justifyContent: 'center', }, (index % 2 == 0) ? { backgroundColor: '#FF7043' } : { backgroundColor: '#26A69A' }]} >
                                                                            <Text style={styles.cardBodyText}>  نمره :  {item.grade} </Text>
                                                                            <Text style={styles.cardBodyText}>  سال :  {item.year} </Text>
                                                                            <Text style={styles.cardBodyText}>  ماه :  {item.month} </Text>
                                                                            <Text style={styles.cardBodyText}>  روز :  {item.day} </Text>
                                                                            <Text style={styles.cardBodyText}>  نام ارزیابی :  {item.exam_name} </Text>
                                                                        </View>
                                                                    </CardItem>
                                                                </Card>
                                                            </View>
                                                        )
                                                            :
                                                            (null)
                                                        )
                                                    )
                                                }
                                            />
                                        )
                                            :
                                            this.state.pickerValue == 11 ? (
                                                <FlatList
                                                    data={this.state.data}
                                                    keyExtractor={() => (Math.floor(Math.random() * 10000).toString())}
                                                    renderItem={
                                                        ({ item, index }) => (
                                                            (item.month == 11 ? (
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
                                                                            <View style={[{ flex: 1, flexDirection: 'column', justifyContent: 'center', }, (index % 2 == 0) ? { backgroundColor: '#FF7043' } : { backgroundColor: '#26A69A' }]} >
                                                                                <Text style={styles.cardBodyText}>  نمره :  {item.grade} </Text>
                                                                                <Text style={styles.cardBodyText}>  سال :  {item.year} </Text>
                                                                                <Text style={styles.cardBodyText}>  ماه :  {item.month} </Text>
                                                                                <Text style={styles.cardBodyText}>  روز :  {item.day} </Text>
                                                                                <Text style={styles.cardBodyText}>  نام ارزیابی :  {item.exam_name} </Text>
                                                                            </View>
                                                                        </CardItem>
                                                                    </Card>
                                                                </View>
                                                            )
                                                                :
                                                                (null)
                                                            )
                                                        )
                                                    }
                                                />
                                            )
                                                :
                                                this.state.pickerValue == 12 ? (
                                                    <FlatList
                                                        data={this.state.data}
                                                        keyExtractor={() => (Math.floor(Math.random() * 10000).toString())}
                                                        renderItem={
                                                            ({ item, index }) => (
                                                                (item.month == 12 ? (
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
                                                                                <View style={[{ flex: 1, flexDirection: 'column', justifyContent: 'center', }, (index % 2 == 0) ? { backgroundColor: '#FF7043' } : { backgroundColor: '#26A69A' }]} >
                                                                                    <Text style={styles.cardBodyText}>  نمره :  {item.grade} </Text>
                                                                                    <Text style={styles.cardBodyText}>  سال :  {item.year} </Text>
                                                                                    <Text style={styles.cardBodyText}>  ماه :  {item.month} </Text>
                                                                                    <Text style={styles.cardBodyText}>  روز :  {item.day} </Text>
                                                                                    <Text style={styles.cardBodyText}>  نام ارزیابی :  {item.exam_name} </Text>
                                                                                </View>
                                                                            </CardItem>
                                                                        </Card>
                                                                    </View>
                                                                )
                                                                    :
                                                                    (null)
                                                                )
                                                            )
                                                        }
                                                    />
                                                )
                                                    :
                                                    this.state.pickerValue == 1 ? (
                                                        <FlatList
                                                            data={this.state.data}
                                                            keyExtractor={() => (Math.floor(Math.random() * 10000).toString())}
                                                            renderItem={
                                                                ({ item, index }) => (
                                                                    (item.month == 1 ? (
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
                                                                                    <View style={[{ flex: 1, flexDirection: 'column', justifyContent: 'center', }, (index % 2 == 0) ? { backgroundColor: '#FF7043' } : { backgroundColor: '#26A69A' }]} >
                                                                                        <Text style={styles.cardBodyText}>  نمره :  {item.grade} </Text>
                                                                                        <Text style={styles.cardBodyText}>  سال :  {item.year} </Text>
                                                                                        <Text style={styles.cardBodyText}>  ماه :  {item.month} </Text>
                                                                                        <Text style={styles.cardBodyText}>  روز :  {item.day} </Text>
                                                                                        <Text style={styles.cardBodyText}>  نام ارزیابی :  {item.exam_name} </Text>
                                                                                    </View>
                                                                                </CardItem>
                                                                            </Card>
                                                                        </View>
                                                                    )
                                                                        :
                                                                        (null)
                                                                    )
                                                                )
                                                            }
                                                        />
                                                    )
                                                        :
                                                        this.state.pickerValue == 2 ? (
                                                            <FlatList
                                                                data={this.state.data}
                                                                keyExtractor={() => (Math.floor(Math.random() * 10000).toString())}
                                                                renderItem={
                                                                    ({ item, index }) => (
                                                                        (item.month == 2 ? (
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
                                                                                        <View style={[{ flex: 1, flexDirection: 'column', justifyContent: 'center', }, (index % 2 == 0) ? { backgroundColor: '#FF7043' } : { backgroundColor: '#26A69A' }]} >
                                                                                            <Text style={styles.cardBodyText}>  نمره :  {item.grade} </Text>
                                                                                            <Text style={styles.cardBodyText}>  سال :  {item.year} </Text>
                                                                                            <Text style={styles.cardBodyText}>  ماه :  {item.month} </Text>
                                                                                            <Text style={styles.cardBodyText}>  روز :  {item.day} </Text>
                                                                                            <Text style={styles.cardBodyText}>  نام ارزیابی :  {item.exam_name} </Text>
                                                                                        </View>
                                                                                    </CardItem>
                                                                                </Card>
                                                                            </View>
                                                                        )
                                                                            :
                                                                            (null)
                                                                        )
                                                                    )
                                                                }
                                                            />
                                                        )
                                                            :
                                                            this.state.pickerValue == 3 ? (
                                                                <FlatList
                                                                    data={this.state.data}
                                                                    keyExtractor={() => (Math.floor(Math.random() * 10000).toString())}
                                                                    renderItem={
                                                                        ({ item, index }) => (
                                                                            (item.month == 3 ? (
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
                                                                                            <View style={[{ flex: 1, flexDirection: 'column', justifyContent: 'center', }, (index % 2 == 0) ? { backgroundColor: '#FF7043' } : { backgroundColor: '#26A69A' }]} >
                                                                                                <Text style={styles.cardBodyText}>  نمره :  {item.grade} </Text>
                                                                                                <Text style={styles.cardBodyText}>  سال :  {item.year} </Text>
                                                                                                <Text style={styles.cardBodyText}>  ماه :  {item.month} </Text>
                                                                                                <Text style={styles.cardBodyText}>  روز :  {item.day} </Text>
                                                                                                <Text style={styles.cardBodyText}>  نام ارزیابی :  {item.exam_name} </Text>
                                                                                            </View>
                                                                                        </CardItem>
                                                                                    </Card>
                                                                                </View>
                                                                            )
                                                                                :
                                                                                (null)
                                                                            )
                                                                        )
                                                                    }
                                                                />
                                                            )
                                                                :
                                                                this.state.pickerValue == 5 ?
                                                                    (
                                                                        <FlatList
                                                                            data={this.state.data}
                                                                            keyExtractor={() => (Math.floor(Math.random() * 10000).toString())}
                                                                            renderItem={
                                                                                ({ item, index }) => (
                                                                                    (item.month == 5 ? (
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
                                                                                                    <View style={[{ flex: 1, flexDirection: 'column', justifyContent: 'center', }, (index % 2 == 0) ? { backgroundColor: '#FF7043' } : { backgroundColor: '#26A69A' }]} >
                                                                                                        <Text style={styles.cardBodyText}>  نمره :  {item.grade} </Text>
                                                                                                        <Text style={styles.cardBodyText}>  سال :  {item.year} </Text>
                                                                                                        <Text style={styles.cardBodyText}>  ماه :  {item.month} </Text>
                                                                                                        <Text style={styles.cardBodyText}>  روز :  {item.day} </Text>
                                                                                                        <Text style={styles.cardBodyText}>  نام ارزیابی :  {item.exam_name} </Text>
                                                                                                    </View>
                                                                                                </CardItem>
                                                                                            </Card>
                                                                                        </View>
                                                                                    )
                                                                                        :
                                                                                        (null)
                                                                                    )
                                                                                )
                                                                            }
                                                                        />
                                                                    )
                                                                    :
                                                                    null
                    }
                </View>
            </View>
        );
    }
    async fetchPoints() {
        let response = await fetch('http://amir7amiri.ir/amir7amiri/api.php?method=GetStuCorses')
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
