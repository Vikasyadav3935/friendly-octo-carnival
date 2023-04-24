import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const colors = ['#942483', '#272662', '#272662'];

const Screen1 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        start={{x: 0.0, y: 0.25}}
        end={{x: 0.5, y: 1.0}}
        locations={[0, 0.5, 0.6]}
        colors={colors}
        style={styles.linearGradient}>
        <View style={styles.view}>
          <Text style={styles.text}>
            Welcome To The Matchmaking Application
          </Text>
        </View>
        <View style={styles.sec}>
          <TouchableOpacity style={styles.btn}
           onPress={()=>navigation.navigate('Login')}
          >
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                fontWeight: '700',
                letterSpacing: 1.5,
              }}>
              LOGIN
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn1}
          onPress={()=>navigation.navigate('Email')}
          >
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                fontWeight: '700',
                letterSpacing: 1.5,
              }}>
              REGISTER
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{width: '80%', alignSelf: 'center'}}>
          <Text style={{alignSelf: 'center', color: 'white', marginBottom: 15}}>
            Login with
          </Text>
          <View style={{justifyContent: 'space-around', flexDirection: 'row',marginBottom:23}}>
            <View style={styles.circle}>
              <FontAwesome name="facebook" color="white" size={22} />
            </View>
            <View style={styles.circle}>
              <FontAwesome name="twitter" color="white" size={22} />
            </View>
            <View style={styles.circle}>
              <FontAwesome name="google" color="white" size={22} />
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
  },
  view: {
    marginTop: '25%',
    width: '90%',
    alignSelf: 'center',
    flex: 1,
  },
  text: {
    color: 'white',
    fontSize: 35,
    fontWeight: '700',
    letterSpacing: 1.5,
  },
  sec: {
    width: '90%',
    alignSelf: 'center',
    marginBottom: 26,
  },
  btn: {
    height: 50,
    backgroundColor: '#50be9e',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn1: {
    height: 50,
    marginTop: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
  circle: {
    width: 50,
    height: 50,
    borderWidth: 1.8,
    borderColor: 'white',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Screen1;
