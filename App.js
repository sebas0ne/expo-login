import { StatusBar } from 'expo-status-bar';
import React, { useState }  from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import image from './assets/logo-1.png';

export default function App() {  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    return (
      <View style={styles.container}>
        <Image style={styles.imageLogo} source={image} />
  
        <StatusBar style="auto" />
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="EMAIL"
            placeholderTextColor="#fff"
            onChangeText={(email) => setEmail(email)}
          />
        </View>
  
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="PASSWORD"
            placeholderTextColor="#fff"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>
  
        <TouchableOpacity>
          <Text style={styles.forgot_button}>FORGOT PASSWORD?</Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  imageLogo: {
    width: 300,
    height: 300,
    marginBottom: 10,
    alignItems: "center",
  },

  inputView: {
    backgroundColor: "#97233F",
    borderRadius: 30,
    width: "80%",
    height: 45,
    marginBottom: 15,
    alignItems: "center",
  },

  TextInput: {
    height: "100%",
    flex: 1,
    padding: 4,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
    color: "#FFB612",
  },

  loginBtn: {
    width: "50%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000",
  },

  loginText: {
    color: "#EFEFEF"
  }
});
