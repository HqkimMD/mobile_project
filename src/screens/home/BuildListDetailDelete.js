import {
    StyleSheet,
    Text,
    View,
    TextInput,
    SafeAreaView,
    TouchableOpacity,
    KeyboardAvoidingView,

} from 'react-native';
import { COLORS, ROUTES } from '../../constants';
import React, { useState, useEffect } from 'react';
import firestore  from '@react-native-firebase/firestore';
import LinearGradient from 'react-native-linear-gradient';
import { ListItem } from 'react-native-elements';

const BuildList = ({ navigation, route }) => {
    const [data, setData] = useState([])
    const [food_name, setFoodName] = useState('');
    const [place, setPlace] = useState('');
    const [price, setPrice] = useState('');

    useEffect(() => {
        firestore()
            .collection('buildList')
            .where('food_name', '==', route.params.food_name)
            .onSnapshot(querySnapshot => {
                querySnapshot.forEach(document => {
                    setFoodName(document.data().food_name);
                    setPlace(document.data().place);
                    setPrice(document.data().price);
                    setData(document.id)
                })
            })
        
    }, [])


    return (
        // <Text>Hi</Text>
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView>
                <View style={styles.wrapper}>
                <View style={styles.rowContainer}>
                    <TouchableOpacity
                        style={styles.banner}
                        onPress={() => navigation.navigate(ROUTES.BUILD_LIST_DETAIL)}>
                        <Text style={styles.texts04}>กลับ</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.head}>
                <Text style={styles.texts05}>รายละเอียด</Text>
                </View>
                <View style={styles.rowContainer}>
                    <View style={styles.views}>
                        <TextInput
                            style={styles.input}
                            onChangeText={value => setFoodName(value)}
                            value={food_name}
                            editable={false}
                            
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={value => setPlace(value)}
                            value={place}
                            editable={false}
                            
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={value => setPrice(value)}
                            value={price}
                            editable={false}
                            
                        />
                    </View>
                </View>
            </View>
            </KeyboardAvoidingView>
            
        </SafeAreaView>
    );
};

export default BuildList;

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.ptpurple,
        // backgroundColor:'#BFC6FF',
        height: '100%',
    },
    wrapper: {
        padding: 5,
        // justifyContent:"center",
        height: '90%',
    },
    views: {
        flex: 0.35,
        padding: 10,
    },
    views03: {
        justifyContent: 'space-around',
        paddingTop: 0,
    },
    banner: {
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,
        marginBottom: 1,
        //borderWidth: 1,
        height: '70%',
        borderRadius: 50,
        width: '35%',
        backgroundColor: 'white',
    },
    add: {
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,
        marginBottom: 1,
        height: '70%',
        borderRadius: 50,
        backgroundColor: 'white',
    },
    rowContainer: {
        flex: 0.15,
        justifyContent: 'space-between',
        flexDirection: 'row',
        gap: '1rem',
        flexWrap: 'wrap',
    },
    texts04: {
        margin: 8,
        fontSize: 20,
        alignSelf: 'center',
        color: 'black',
        fontWeight: 'bold',
    },
    text01: {
        marginTop: 20,
        marginLeft: 40,
        marginBottom: 20,
        fontSize: 15,
        color: 'black',
    },
    head:{
        paddingTop: 20,
        alignItems: 'center',
        alignContent: 'center',
    },
    texts05: {
        alignContent: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        color: 'black',
    },
    scroll: {
        padding: 50,
        // width: 255,
        height: 450,
    },
    input: {
        borderWidth: 1,
    borderColor: COLORS.grayLight,
    padding: 20,
    marginVertical: 10,
    borderRadius: 5,
    height: 65,
    width: 380,
    paddingVertical: 0,
    backgroundColor: COLORS.white,
    color:COLORS.black,
    fontSize:20,
    alignItems: 'center',
    },
    loginContinueTxt: {
        fontSize: 21,
        textAlign: 'center',
        color: COLORS.black,
        marginBottom: 20,
        marginTop: 50,
        fontWeight: 'bold',
    },
    loginBtnWrapper: {
        height: 55,
        marginTop: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        alignItems: 'center',
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 5,
    },
    linearGradient: {
        width: '100%',
        borderRadius: 50,
    },
    loginBtn: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 55,
    },
    loginText: {
        color: COLORS.white,
        fontSize: 16,
        fontWeight: '400',
    },
});
