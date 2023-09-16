import React,{useState, useEffect}from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, ROUTES} from '../../constants';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth';

const Register = props => {
  // const {navigation} = props;
  const route = useRoute();
  const navigation = useNavigation();
  const [user, setUser] = useState();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fname, setFName] = useState('');
  const [lname, setLName] = useState('');
  const [nname, setNName] = useState('');

  const register = () => {
    const user = 
      auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
          console.log('User account created & signed in!');
          console.log('UserID : ' + auth().currentUser.uid);
          firestore()
            .collection('Users')
            .doc(auth().currentUser.uid)
            .set({
                userID: auth().currentUser.uid,
                email: email,
                fname: fname,
                lname: lname,
                nname: nname,
            })
            .then(() => {
                console.log('ลงชื่อเข้าใช้สำเร็จ!');
                Alert.alert('ลงชื่อเข้าใช้สำเร็จ!');
            });
          navigation.navigate(ROUTES.LOGIN);
      })
      .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
              console.log('Email มีการใช้งานแล้ว!');
              Alert.alert('Email มีการใช้งานแล้ว!')
          }

          if (error.code === 'auth/invalid-email') {
              console.log('ระบุ Email ผิดพลาด กรุณาระบุใหม่');
              Alert.alert('ระบุ Email ผิดพลาด กรุณาระบุใหม่');
          }

          console.error(error);
      });

      
  }
  

  return (
    <SafeAreaView style={styles.main}>
      <KeyboardAvoidingView>
      <View style={styles.container}>
        <View style={styles.wFull}>
          {/* <View style={styles.rowContainer}>
            <TouchableOpacity style={styles.banner} onPress={() => navigation.navigate(ROUTES.LIST_NAME)}>
              <Text style={styles.texts04}>Back</Text>
            </TouchableOpacity>
          </View> */}
          <Text style={styles.loginContinueTxt}>ลงทะเบียนเพื่อเข้าสู่ระบบ</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Email"
            value={email}
            onChangeText={email =>setEmail(email)}
          
          />
          <TextInput 
            style={styles.input} 
            placeholder="ชื่อ"
            value={fname}
            onChangeText={fname =>setFName(fname)}

          />
          <TextInput 
            style={styles.input} 
            placeholder="นามสกุล" 
            value={lname}
            onChangeText={lname =>setLName(lname)}
          />
          <TextInput 
            style={styles.input} 
            placeholder="ชื่อเล่น" 
            value={nname}
            onChangeText={nname =>setNName(nname)}
          />
          <TextInput 
            style={styles.input} 
            placeholder="รหัสผ่าน" 
            autoCorrect={false}
            secureTextEntry={true}
            textContentType={'password'}
            autoCapitalize={'none'}
            value={password}
            onChangeText={password =>setPassword(password)}
          />
          <View style={styles.loginBtnWrapper}>
            <LinearGradient
              colors={[COLORS.gradientForm, COLORS.primary]}
              style={styles.linearGradient}
              start={{y: 0.0, x: 0.0}}
              end={{y: 1.0, x: 0.0}}>
              {/******************** REGISTER BUTTON *********************/}
              <TouchableOpacity
                onPress={register}
                activeOpacity={0.7}
                style={styles.loginBtn}>
                <Text style={styles.loginText}>Register</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: COLORS.white,
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
  forgotPassText: {
    color: COLORS.primary,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 15,
  },
  // footer
  footer: {
    position: 'absolute',
    bottom: 20,
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
  images:{
    width:154,
    height:154
  },
});

