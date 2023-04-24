import { View, Text,StyleSheet,TextInput,TouchableOpacity, } from 'react-native'
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import CheckBox from '@react-native-community/checkbox';


const colors = ['#942483', '#272662','#272662'];
const Login = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
       start={{x: 0.5, y: 0.1}} end={{x: 0.0, y: 0.9}}
       locations={[0,0.5,0.6]}
       
       colors={colors} style={styles.linearGradient}
      >
       <View style={styles.view1}>
       <Text style={{color:'white',fontSize:30,fontWeight:'700',letterSpacing:1.5}}>
        LOGIN
       </Text>
       <Text style={{color:'white', fontSize:20,letterSpacing:1.2,marginVertical:10}}>
        Hello, Welcome back
       </Text>
       </View>
       <View style={styles.view2}>
        <View style={{width:'90%',alignSelf:'center'}}>
        <Text style={styles.text}>
            Username
        </Text>
        <TextInput   style={styles.input}/>
        <Text style={styles.text}>
          Password
        </Text>
        <TextInput   style={styles.input}/>
        </View>
        <TouchableOpacity style={styles.btn}>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                fontWeight: '700',
                letterSpacing: 1.5,
              }}>
              Continue
            </Text>
          </TouchableOpacity>
       </View>
       <View>
        <View>
        <CheckBox />
        <Text>Remeber Me ?</Text>
        </View>
        
       </View>
      </LinearGradient>
    </View>
  )
}

export default Login;

const styles=StyleSheet.create({
    container: {
        flex: 1,
      },
      linearGradient: {
        flex: 1,
      },
      view1:{
        marginTop:'26%',
        width:'80%',
        alignSelf:'center',
      },
      view2:{
        width:'90%',
       
        backgroundColor:'white',
        alignSelf:'center',
        borderRadius:20,
        marginVertical:20
      },
      input:{
        width:'90%',
        borderWidth:1.7,
        borderColor:'gray',
        alignSelf:'center',
        borderRadius:10
      },
      text:{
        marginVertical:12,
        marginLeft:20,
        fontSize:16
      },
      btn: {
        height: 50,
        backgroundColor: '#50be9e',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width:'80.1%',
        alignSelf:'center',
        marginTop:49,
        marginBottom:30
      },
    

})