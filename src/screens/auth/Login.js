import React, { useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, ROUTES } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const Login = props => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const login = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
        navigation.navigate(ROUTES.HOME);
        setEmail('');
        setPassword('');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('Email มีการใช้งานแล้ว!');
          Alert.alert('Email มีการใช้งานแล้ว!');
        }
        if (error.code === 'auth/invalid-email') {
          console.log('ระบุ Email ผิดพลาด กรุณาระบุใหม่');
          Alert.alert('ระบุ Email ผิดพลาด กรุณาระบุใหม่');

        }
        if (error.code === 'auth/wrong-password') {
          console.log('wrong-password');
          Alert.alert("ระบุรหัสผ่านผิดพลาด กรุณาระบุใหม่");
        }
        if (error.code === 'auth/user-not-found') {
          console.log('user-not-found');
          Alert.alert("ไม่พบผู้ใช้งาน");
        }
      });
  }

  function loginValidation() {
    if (email == "" || password == "") {
      Alert.alert("กรุณาระบุ Email และรหัสผ่าน");
    } else {
      login();
    }
  }

  return (
    <SafeAreaView style={styles.main}>
      <KeyboardAvoidingView>
        <View style={styles.container}>
          <View style={styles.wFull}>
            <View style={styles.row}>
              <Image source={require('../../assets/logo1.png')} style={styles.images} />
            </View>
            <View style={styles.row}>
              <Text style={styles.brandName}>Give Me Back</Text>
            </View>
            <Text style={styles.loginContinueTxt}>เข้าสู่ระบบ</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={email => setEmail(email)}
              placeholder="Email"
            />
            <TextInput
              style={styles.input}
              placeholder="รหัสผ่าน"
              autoCorrect={false}
              secureTextEntry={true}
              textContentType={'password'}
              autoCapitalize={'none'}
              value={password}
              onChangeText={password => setPassword(password)}
            />
            <View style={styles.loginBtnWrapper}>
              <LinearGradient
                colors={[COLORS.gradientForm, COLORS.primary]}
                style={styles.linearGradient}
                start={{ y: 0.0, x: 0.0 }}
                end={{ y: 1.0, x: 0.0 }}>
                {/******************** LOGIN BUTTON *********************/}
                <TouchableOpacity
                  onPress={loginValidation}
                  activeOpacity={0.7}
                  style={styles.loginBtn}>
                  <Text style={styles.loginText}>เข้าสู่ระบบ</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
            {/******************** REGISTER BUTTON *********************/}
            <TouchableOpacity style={styles.footer}
              onPress={() => navigation.navigate(ROUTES.REGISTER)}>
              <Text style={styles.footerText}> ยังไม่มีบัญชี? </Text>
              <Text style={styles.signupBtn}>ลงทะเบียน</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
  },
  container: {
    padding: 15,
    width: '100%',
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    color: COLORS.gray,
    marginBottom: 16,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.grayLight,
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    height: 55,
    paddingVertical: 0,
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
  forgotPassText: {
    color: COLORS.primary,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 15,
    flexDirection: 'row',
  },
  footer: {
    position: 'absolute',
    bottom: -30,
    left: 50,
    textAlign: 'center',
    flexDirection: 'row',
  },
  footerText: {
    color: COLORS.gray,
    fontWeight: 'bold',
  },
  signupBtn: {
    color: COLORS.primary,
    fontWeight: 'bold',
  },
  // utils
  wFull: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  mr7: {
    marginRight: 7,
  },
  images: {
    width: 154,
    height: 154
  },
});
