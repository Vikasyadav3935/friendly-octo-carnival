import { View, Text,StyleSheet,TextInput,TouchableOpacity, } from 'react-native'
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


const colors = ['#942483', '#272662','#272662'];
const Email = () => {
 
  return (
    <View style={styles.container}>
      <LinearGradient
       start={{x: 0.6, y: 0.0}} end={{x: 0.2, y: 0.3}}
       locations={[0,0.8,0.9]}
       
       colors={colors} style={styles.linearGradient}
      >
        <View style={styles.view}>
         <View style={styles.view1}>
          <FontAwesome5 name='check' size={45} color='lightgreen' />
          <Text style={{fontSize:20,fontWeight:'800',color:'black',marginVertical:15,letterSpacing:1.2}}>
            Email Verification
          </Text>
          <Text style={{fontSize:19,lineHeight:30,textAlign:'center'}}>
            Please check your email inbox to confirm and complete your details after logging in the application, thank you
          </Text>
          <TouchableOpacity style={{backgroundColor:'#f5b544',width:100,alignItems:'center',justifyContent:'center',height:45,borderRadius:30/1,marginTop:30}}>
            <Text style={{color:'white',fontSize:20,fontWeight:'800'}}>
              OK
            </Text>
          </TouchableOpacity>
         </View>
        </View>
      
      </LinearGradient>
    </View>
  )
}

export default Email;

const styles=StyleSheet.create({
    container: {
        flex: 1,
      },
      linearGradient: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
      },
     view:{
      width:'90%',
      height:'50%',
      backgroundColor:'white',
      borderRadius:20,
      justifyContent:'center'
     },
     view1:{
      width:'85%',
      height:'85%',
      alignItems:'center',
      alignSelf:'center'
     }
    

})