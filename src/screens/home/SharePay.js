import {
    Image,
    StyleSheet,
    Text,
    View,
    TextInput,
    SafeAreaView,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import {COLORS, ROUTES} from '../../constants';

const SharePay =({navigation}) => {
    return (
        <Text>ยังไม่สำเร็จ</Text>
        // <SafeAreaView style={styles.container}>
        //         <View style={styles.wrapper}>
        //             <View style={styles.rowContainer}>
        //                 <TouchableOpacity style={styles.banner} onPress={() => navigation.navigate(ROUTES.HOME)}>
        //                     <Text style={styles.texts04}>กลับ</Text>
        //                 </TouchableOpacity>
        //                 <View style={styles.add}>
        //                     {/* //addFriends// */}
        //                     <TouchableOpacity  style={styles.imgback} onPress={() => navigation.navigate(ROUTES.ADD_LIST_NAME)} >
        //                         <Icon name="user-plus" style={styles.images03} size={30} color={COLORS.gray}/>
        //                     </TouchableOpacity>
        //                 </View>
        //             </View>
        //             <View style={styles.list}>
        //             <ScrollView style={styles.scroll} >
        //                 <Text onPress={() => navigation.navigate(ROUTES.LIST_NAME_DETAIL)} >Hi</Text>
        //                 {/* <FlatList
        //                     data={name_list}
        //                     renderItem={({ item }) => (
        //                         <ListItem
        //                             bottomDivider
        //                             onPress={() => {
        //                                 navigation.navigate('AccountDetail', {
        //                                     name_listId: item.key,
        //                                 });
        //                             }}>
        //                             <ListItem.Content>
        //                                 <View style={styles.scrollviews}>
        //                                     <Text style={styles.texts05}><Image source={require('../img/user.png')} style={styles.images02}/>      {item.nickname}</Text>
        //                                 </View>
        //                             </ListItem.Content>
        //                         </ListItem>
        //                     )}
        //                 /> */}
        //             </ScrollView> 
        //         </View>
                    
                    
        //         </View>
        //     </SafeAreaView>
    );
};

export default SharePay;

const styles = StyleSheet.create({
    container: {
        backgroundColor:COLORS.ptpurple,
        // backgroundColor:'#BFC6FF',
        height : "100%",
    },
    wrapper:{
        padding: 5,
        // justifyContent:"center",
        height : "90%",
    
    },
    nav:{
        height : "10%",
        alignItems:"center",
        backgroundColor : "#BFC6FF",
        borderColor: "white",
        
    },
    views:{
        flex: 0.35
    },
    banner:{
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,
        marginBottom:1,
        //borderWidth: 1,
        height : "70%",
        borderRadius: 50,
        width: "35%",
        backgroundColor:'white',
    },
    add:{
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,
        marginBottom:1,
        height : "70%",
        borderRadius: 50,
        backgroundColor:"white",
    },
    rowContainer:{
        flex: 0.10,
        justifyContent:"space-between",
        flexDirection:'row',
        gap: '1rem',
        flexWrap: "wrap",
    },
    tap01:{
        alignSelf: 'center',
        backgroundColor: "#7cb48f",
        width: 200,
        height: 100,
    },
    tap01:{
        backgroundColor: "#7cb48f",
        width: 200,
        height: 100,
    },
    images01:{
        marginTop: 50,
        width:"95%",
        height:"50%",
        alignSelf: 'center',
        borderRadius: 10,
    },
    images02:{
        alignSelf: 'center',
        borderRadius: 10,
    },
    images04:{
        height:150,
        width:40,
        color: "#000000",
        alignItems: 'center',
        alignSelf: 'center',
    },
    images03:{
        paddingTop: 5,
        paddingLeft:12,
        alignSelf: 'center',
        borderRadius: 100,
        height:60,
        width:60,
    },
    texts01: {
        fontSize:40,
        fontWeight: "bold",
        alignSelf:"center",
        color:'#000000'
    },
    texts02: {
        fontSize:20,
        fontWeight: "bold",
        alignSelf:"center",
        color:'#000000'
    },
    texts03: {
        margin:5,
        fontSize:15,
        alignSelf:"center",
        color:'#938E8E'
    },
    texts04: {
        margin:8,
        fontSize:20,
        alignSelf:"center",
        color:"black",
        fontWeight: "bold",
    },
    input: {
        height: 55,
        width: 255,
        margin: 10,
        backgroundColor: '#D9D9D9',
        borderWidth: 1,
        padding: 10,
        alignSelf:"center",
        borderRadius : 5
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 10,
        margin: 10,
        alignItems:"center",
        alignSelf:"center",
        height:55,
        width:"80%",
        textAlign: 'center',
        marginVertical: 8,
        borderRadius : 5
    },
    imgback:{
        width:"100%",
        height: "45%",
        alignItems: 'center',
        borderRadius: 10,
    },
    tabmenu:{
        marginTop: 10,
        marginBottom: 10,
        marginLeft:40,
        marginRight:40,
        height : "100%",
        borderRadius: 50,
    },
});
