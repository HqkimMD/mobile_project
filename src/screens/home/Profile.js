import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  Input,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  FlatList
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React, { Component, useState, useEffect } from 'react';
import { COLORS, ROUTES } from '../../constants';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';


const Profile = ({ navigation }) => {
  const [fname, setFName] = useState('');
  const [lname, setLName] = useState('');
  const [nname, setNName] = useState('');
  const [email, setEmail] = useState('');
  const [data, setData] = useState([])

  useEffect(() => {
    firestore()
      .collection('Users')
      // .where('UserID', '==', auth().currentUser.uid)
      // .get()
      .onSnapshot(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          setFName(documentSnapshot.data().fname);
          setLName(documentSnapshot.data().lname);
          setNName(documentSnapshot.data().nname)
          setEmail(documentSnapshot.data().email);
          setData(documentSnapshot.id)
        });
      });
  }, []);

  const signOut = () => {
    auth()
    .signOut()
    .then(() => console.log('User signed out!'));
    navigation.navigate(ROUTES.LOGIN);
}

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.rowContainer}>
          <TouchableOpacity style={styles.banner} onPress={() => navigation.navigate(ROUTES.HOME_TAB)}>
            <Text style={styles.texts04}>กลับ</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.head}>
          <Text style={styles.texts05}>PROFILE</Text>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.views}>
            <TextInput
              style={styles.input}
              onChangeText={value => setEmail(value)}
              value={email}
              editable={false}

            />
            <TextInput
              style={styles.input}
              onChangeText={value => setNName(value)}
              value={nname}
              editable={false}

            />
            <TextInput
              style={styles.input}
              onChangeText={value => setFName(value)}
              value={fname}
              editable={false}

            />
            <TextInput
              style={styles.input}
              onChangeText={value => setLName(value)}
              value={lname}
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
                      navigation.navigate(ROUTES.PROFILE_DETAIL, {
                        userID: data,
                        fname: fname
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
                    onPress={signOut}
                    containerStyle={{ marginTop: 10 }}
                    activeOpacity={0.7}
                    style={styles.loginBtn}>
                    <Text style={styles.loginText}>ออกจากระบบ</Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>

            </View>
            {/* <View style={styles.loginBtnWrapper}>
              <LinearGradient
                colors={[COLORS.gradientForm, COLORS.primary]}
                style={styles.linearGradient}
                start={{ y: 0.0, x: 0.0 }}
                end={{ y: 1.0, x: 0.0 }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate(ROUTES.PROFILE_DETAIL, {
                      userID: data,
                      fname: fname
                    });
                  }}
                  containerStyle={{ marginTop: 10 }}
                  activeOpacity={0.7}
                  style={styles.loginBtn}>
                  <Text style={styles.loginText}>แก้ไข</Text>
                </TouchableOpacity>
              </LinearGradient>
              <LinearGradient
                colors={[COLORS.gradientForm, COLORS.primary]}
                style={styles.linearGradient}
                start={{ y: 0.0, x: 0.0 }}
                end={{ y: 1.0, x: 0.0 }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate(ROUTES.LOGIN)}
                  containerStyle={{ marginTop: 10 }}
                  activeOpacity={0.7}
                  style={styles.loginBtn}>
                  <Text style={styles.loginText}>ออกจากระบบ</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View> */}

          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    padding: 17,
    margin: 10,
    borderRadius: 5,
    fontSize: 18,
    width: 180,
    alignSelf: "center",
  },
  head: {
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
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
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
    height: 60,
    width: 380,
    paddingVertical: 0,
    backgroundColor: COLORS.white,
    color: COLORS.black,
    fontSize: 20,
    alignItems: 'center',
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

