import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
    TextInput,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, ROUTES} from '../../constants';
import {useNavigation} from '@react-navigation/native';

const LogoScreen = props => {
  // const {navigation} = props;
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.main}>
            <View style={styles.container} >
                <Text></Text>
                <View style={styles.wFull}>
                    <View style={styles.row}>
                        <Image source={require('../../assets/logo1.png')} style={styles.images}/>
                        {/* <Logo width={55} height={55} style={styles.mr7} /> */}
                    </View>
                    
                    <View style={styles.row}>
                        <Text style={styles.brandName}>Give Me Back</Text>
                    </View>
                    <LinearGradient
                        colors={[COLORS.gradientForm, COLORS.primary]}
                        style={styles.linearGradient}
                        start={{y: 0.0, x: 0.0}}
                        end={{y: 1.0, x: 0.0}}>
                        {/******************** LOGIN BUTTON *********************/}
                        <TouchableOpacity
                            onPress={() => navigation.navigate(ROUTES.LOGIN)}
                            activeOpacity={0.7}
                            style={styles.loginBtn}>
                            <Text style={styles.loginText}>แตะเพื่อดำเนินการต่อไป</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>

            </View>
        </SafeAreaView>
    );
};

export default LogoScreen;

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
