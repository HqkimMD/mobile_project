import {
    Image,
    StyleSheet,
    Text,
    View,
    TextInput,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import React, {Component,useState,useEffect } from 'react';
import {COLORS, ROUTES} from '../../constants';
import firestore from '@react-native-firebase/firestore';
import {ListItem } from 'react-native-elements';
import auth from '@react-native-firebase/auth';


const ListName =({route, navigation}) => {

    const [data, setData] = useState([])

    useEffect(() => {
        firestore()
            .collection('listName')
            // .where('', '==', auth().currentUser.uid)
            .onSnapshot(querySnapshot => {
                const data = [];
                querySnapshot.forEach(documentSnapshot => {
                    data.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id
                    })
                })
                setData(data);
                console.log(data)
            })
    }, [])



    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.rowContainer}>
                    <TouchableOpacity style={styles.banner} onPress={() => navigation.navigate(ROUTES.HOME)}>
                        <Text style={styles.texts04}>กลับ</Text>
                    </TouchableOpacity>
                    <View style={styles.add}>
                        {/* //addFriends// */}
                        <TouchableOpacity  style={styles.imgback} onPress={() => navigation.navigate(ROUTES.ADD_LIST_NAME)} >
                            <Icon name="user-plus" style={styles.images03} size={30} color={COLORS.gray}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.rowContainer}>
                    <ScrollView style={styles.scroll}>
                        <FlatList
                            data={data}
                            renderItem={({ item }) => (
                                <ListItem
                                    bottomDivider
                                    onPress={() => {
                                        navigation.navigate(ROUTES.LIST_NAME_DETAIL, {
                                            borrower_fname: item.borrower_fname,
                                        });
                                    }}>
                                    <ListItem.Content>
                                        <ListItem.Title>{item.borrower_nickname}</ListItem.Title>
                                        <ListItem.Subtitle>{item.borrower_phone}</ListItem.Subtitle>
                                    </ListItem.Content>
                                </ListItem>
                            )}
                        />
                    </ScrollView>
                    
                </View>
            </View>
        </SafeAreaView>
    );
};

export default ListName;

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
    scroll:{
        padding:20,
        // width: 255,
        height:450,
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
        flex: 0.14,
        justifyContent:"space-between",
        flexDirection:'row',
        gap: '1rem',
        flexWrap: "wrap",
    },
    images03:{
        paddingTop: 5,
        paddingLeft:12,
        alignSelf: 'center',
        borderRadius: 100,
        height:60,
        width:60,
    },
    text01: {
        marginTop:20,
        marginLeft:40,
        marginBottom:20,
        fontSize:15,
        color:"black",
    },
    texts04: {
        margin:8,
        fontSize:20,
        alignSelf:"center",
        color:"black",
        fontWeight: "bold",
    },


});
