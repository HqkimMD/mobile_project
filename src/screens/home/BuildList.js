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



const BuildList =({navigation}) => {
    const [food_name, setFoodName] = useState('');
    const [place, setPlace] = useState('');
    const [price, setPrice] = useState('');


    const addbuildList = () => {
        firestore()
            .collection('buildList')
            .add({
                UserID: auth().currentUser.uid,
                food_name: food_name,
                place: place,
                price: price,
            })
            .then(() => {
                // console.log('Data saved!');
                alert('Data saved!');
                navigation.navigate(ROUTES.BUILD_LIST_DETAIL)

            })
            .catch((error) => {
                alert(error);
            });
    }


    return (
        // <SafeAreaView style={styles.container}>
        //         <View style={styles.wrapper}>
        //             <View style={styles.rowContainer}>
        //                 <TouchableOpacity style={styles.banner} onPress={() => navigation.navigate(ROUTES.LIST_NAME)}>
        //                     <Text style={styles.texts04}>กลับ</Text>
        //                 </TouchableOpacity>
                        
        //             </View>
        //             <Text style={styles.loginContinueTxt}>บันทึกรายการ</Text>
        //             <View style={styles.views} >
        //                 <ScrollView style={styles.scroll}>
        //                 </ScrollView>
        //                 <TextInput 
        //                     style={styles.input} 
        //                     placeholder="รายการอาหาร"
        //                 />
        //                 <TextInput 
        //                     style={styles.input} 
        //                     placeholder="จำนวนเงิน" 
        //                 />
        //                 {/* <TextInput 
        //                     style={styles.input} 
        //                     placeholder="คนที่ต้องจ่าย" 
        //                 /> */}
        //                 <TextInput 
        //                     style={styles.input} 
        //                     placeholder="สถานที่"
        //                 />
        //                 <View style={styles.loginBtnWrapper}>
        //                     <LinearGradient
        //                     colors={[COLORS.gradientForm, COLORS.primary]}
        //                     style={styles.linearGradient}
        //                     start={{y: 0.0, x: 0.0}}
        //                     end={{y: 1.0, x: 0.0}}>
        //                     {/******************** REGISTER BUTTON *********************/}
        //                     <TouchableOpacity
        //                         onPress={() => navigation.navigate(ROUTES.LIST_NAME)}
        //                         activeOpacity={0.7}
        //                         style={styles.loginBtn}>
        //                         <Text style={styles.loginText}>Add</Text>
        //                     </TouchableOpacity>
        //                     </LinearGradient>
        //                 </View>
        //             </View>
        //         </View>
        //     </SafeAreaView>
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView>
                <View style={styles.wrapper}>
                    <View style={styles.rowContainer}>
                        <TouchableOpacity style={styles.banner} onPress={() => navigation.navigate(ROUTES.HOME)}>
                            <Text style={styles.texts04}>กลับ</Text>
                        </TouchableOpacity>
                        <View style={styles.add}>
                            {/* //addFriends// */}
                            <TouchableOpacity  style={styles.imgback} onPress={() => navigation.navigate(ROUTES.BUILD_LIST_DETAIL)} >
                                <Text style={styles.texts05}>รายละเอียด</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.views} >
                        <Text style={styles.loginContinueTxt}>เพิ่มรายการ</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={value => setFoodName(value)}
                            placeholder="ชื่ออาหาร"
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={value => setPlace(value)}
                            placeholder="สถานที่จ่าย"
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={value => setPrice(value)}
                            placeholder="ราคา"
                        />
                        
                        <View style={styles.loginBtnWrapper}>
                            <LinearGradient
                                colors={[COLORS.gradientForm, COLORS.primary]}
                                style={styles.linearGradient}
                                start={{ y: 0.0, x: 0.0 }}
                                end={{ y: 1.0, x: 0.0 }}>
                                {/******************** REGISTER BUTTON *********************/}
                                <TouchableOpacity
                                    onPress={addbuildList}
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
    );
};

export default BuildList;

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
        width: "30%",
        height: "70%",
        borderRadius: 50,
        backgroundColor: "white",
    },
    rowContainer: {
        flex: 0.14,
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
    texts05: {
        margin: 0,
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
