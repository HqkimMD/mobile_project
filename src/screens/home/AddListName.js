import {
    Image,
    StyleSheet,
    Text,
    View,
    TextInput,
    SafeAreaView,
    TouchableOpacity,
    KeyboardAvoidingView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React, { useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';
import { COLORS, ROUTES } from '../../constants';
import auth from '@react-native-firebase/auth';


const AddListName = ({ navigation }) => {
    const [borrower_fname, setBorrowerFname] = useState('');
    const [borrower_lname, setBorrowerLname] = useState('');
    const [borrower_nickname, setBorrowerNickname] = useState('');
    const [borrower_phone, setBorrowerPhone] = useState('');

    const addlistname = () => {
        firestore()
            .collection('listName')
            .add({
                UserID: auth().currentUser.uid,
                borrower_fname: borrower_fname,
                borrower_lname: borrower_lname,
                borrower_nickname: borrower_nickname,
                borrower_phone: borrower_phone,
            })
            .then(() => {
                // console.log('Data saved!');
                alert('Data saved!');
                navigation.navigate(ROUTES.LIST_NAME);

            })
            .catch((error) => {
                alert(error);
            });
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView>
                <View style={styles.wrapper}>
                    <View style={styles.rowContainer}>
                        <TouchableOpacity style={styles.banner} onPress={() => navigation.navigate(ROUTES.LIST_NAME)}>
                            <Text style={styles.texts04}>กลับ</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.views} >
                        <Text style={styles.loginContinueTxt}>เพิ่มรายชื่อ</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={value => setBorrowerNickname(value)}
                            placeholder="ชื่อเล่น"
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={value => setBorrowerFname(value)}
                            placeholder="ชื่อ"
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={value => setBorrowerLname(value)}
                            placeholder="นามสกุล"
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={value => setBorrowerPhone(value)}
                            placeholder="เบอร์โทรศัพท์"
                        />
                        <View style={styles.loginBtnWrapper}>
                            <LinearGradient
                                colors={[COLORS.gradientForm, COLORS.primary]}
                                style={styles.linearGradient}
                                start={{ y: 0.0, x: 0.0 }}
                                end={{ y: 1.0, x: 0.0 }}>
                                {/******************** REGISTER BUTTON *********************/}
                                <TouchableOpacity
                                    onPress={addlistname}
                                    activeOpacity={0.7}
                                    style={styles.loginBtn}>
                                    <Text style={styles.loginText}>เพิ่ม</Text>
                                </TouchableOpacity>
                            </LinearGradient>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default AddListName;

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.ptpurple,
        // backgroundColor:'#BFC6FF',
        height: "100%",
    },
    wrapper: {
        padding: 5,
        // justifyContent:"center",
        height: "90%",

    },
    views: {
        flex: 0.35,
        padding: 10
    },
    banner: {
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,
        marginBottom: 10,
        //borderWidth: 1,
        height: "70%",
        borderRadius: 50,
        width: "35%",
        backgroundColor: 'white',
    },
    add: {
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,
        marginBottom: 1,
        height: "70%",
        borderRadius: 50,
        backgroundColor: "white",
    },
    rowContainer: {
        flex: 0.10,
        justifyContent: "space-between",
        flexDirection: 'row',
        gap: '1rem',
        flexWrap: "wrap",
    },
    texts04: {
        margin: 8,
        fontSize: 20,
        alignSelf: "center",
        color: "black",
        fontWeight: "bold",
    },

    imgback: {
        width: "100%",
        height: "45%",
        alignItems: 'center',
        borderRadius: 10,
    },
    brandName: {
        fontSize: 42,
        textAlign: 'center',
        fontWeight: 'bold',
        color: COLORS.primary,
        opacity: 0.9,
    },
    loginContinueTxt: {
        fontSize: 21,
        textAlign: 'center',
        color: COLORS.black,
        marginBottom: 20,
        marginTop: 50,
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderColor: COLORS.grayLight,
        padding: 20,
        marginVertical: 10,
        borderRadius: 5,
        height: 55,
        paddingVertical: 0,
        backgroundColor: COLORS.white,
    },
    // Login Btn Styles
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