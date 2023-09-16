import {
    Image,
    StyleSheet,
    Text,
    View,
    TextInput,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    Button,
    Alert,
    Input,
    FlatList,
} from 'react-native';
import { COLORS, ROUTES } from '../../constants';
import React, { useState, useEffect } from 'react';
import firestore  from '@react-native-firebase/firestore';
import LinearGradient from 'react-native-linear-gradient';
import { ListItem } from 'react-native-elements';
import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';

const ListName = ({ navigation, route }) => {
    const [data, setData] = useState([])
    const [borrower_fname, setBorrowerFname] = useState('');
    const [borrower_lname, setBorrowerLname] = useState('');
    const [borrower_nickname, setBorrowerNickname] = useState('');
    const [borrower_phone, setBorrowerPhone] = useState('');

    useEffect(() => {
        firestore()
            .collection('listName')
            .where('borrower_fname', '==', route.params.borrower_fname)
            .onSnapshot(querySnapshot => {
                querySnapshot.forEach(document => {
                    setBorrowerFname(document.data().borrower_fname);
                    setBorrowerLname(document.data().borrower_lname);
                    setBorrowerNickname(document.data().borrower_nickname);
                    setBorrowerPhone(document.data().borrower_phone);
                    setData(document.id)

                })
                
                
            })
    }, [])

    const deleteBorrower = async () => {
        const userRef = firestore().collection('listName').doc(data);
        Alert.alert(
            'Delete User',
            'Are you sure you want to delete this user?',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {
                    text: 'Confirm',
                    onPress: () => {
                        userRef
                            .delete()
                            .then(() => {
                                console.log('User deleted!');
                                alert('Name : ' + borrower_nickname + ' has deleted!');
                                navigation.navigate(ROUTES.LIST_NAME);
                            })
                            .catch(error => {
                                console.log(
                                    'Something went wrong with delete operation',
                                    error,
                                );
                            });
                    },
                },
            ],
            { cancelable: false },
        );
    };


    return (
        // <Text>Hi</Text>
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.rowContainer}>
                    <TouchableOpacity
                        style={styles.banner}
                        onPress={() => navigation.navigate(ROUTES.LIST_NAME)}>
                        <Text style={styles.texts04}>Back</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.head}>
                <Text style={styles.texts05}>รายละเอียด</Text>
                </View>
                <View style={styles.rowContainer}>
                    <View style={styles.views}>
                        <TextInput
                            style={styles.input}
                            onChangeText={value => setBorrowerNickname(value)}
                            value={borrower_nickname}
                            editable={false}
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={value => setBorrowerFname(value)}
                            value={borrower_fname}
                            editable={false}
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={value => setBorrowerLname(value)}
                            value={borrower_lname}
                            editable={false}
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={value => setBorrowerPhone(value)}
                            value={borrower_phone}
                            editable={false}
                        />

                        <View style={styles.loginBtnWrapper}>
                            <View style={styles.views01}>
                                <LinearGradient
                                colors={[COLORS.gradientForm, COLORS.primary]}
                                style={styles.linearGradient}
                                start={{ y: 0.0, x: 0.0 }}
                                end={{ y: 1.0, x: 0.0 }}>
                                <TouchableOpacity
                                    onPress={() => {
                                        navigation.navigate(ROUTES.LIST_NAME_DETAIL_EDIT, {
                                            listNameId: data,
                                            borrower_fname: borrower_fname
                                        });
                                    }}
                                    containerStyle={{ marginTop: 10 }}
                                    activeOpacity={0.7}
                                    style={styles.loginBtn}>
                                    <Text style={styles.loginText}>แก้ไข</Text>
                                </TouchableOpacity>
                            </LinearGradient>
                            </View>
                            <Text></Text>
                            <View style={styles.views01}>
                                <LinearGradient
                                colors={[COLORS.gradientForm, COLORS.danger]}
                                style={styles.linearGradient}
                                start={{ y: 0.0, x: 0.0 }}
                                end={{ y: 1.0, x: 0.0 }}>
                                <TouchableOpacity
                                    onPress={deleteBorrower}
                                    containerStyle={{ marginTop: 10 }}
                                    activeOpacity={0.7}
                                    style={styles.loginBtn}>
                                    <Text style={styles.loginText}>ลบ</Text>
                                </TouchableOpacity>
                            </LinearGradient>
                            </View>
                            
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default ListName;

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
    head:{
        paddingTop: 10,
        alignItems: 'center',
        alignContent: 'center',
    },
    texts05: {
        alignContent: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        color: 'black',
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
        justifyContent: 'space-between',
        flexDirection: 'row',
        gap: '1rem',
        flexWrap: 'wrap',
        flex: 0.14,
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
