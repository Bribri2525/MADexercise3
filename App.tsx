import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const SignInScreen = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [useremail, setUseremail] = useState('');
  const [address, setAddress] = useState('');
  const [phonenumber, setPhonenumber] = useState('');

  const handleSignIn = () => {
    // Lakukan proses autentikasi di sini, misalnya dengan mengirimkan data ke backend
    console.log('Name:', name);
    console.log('Username:', username);
    console.log('Email:', useremail);
    console.log('Address', address);
    console.log('Phone Number:', phonenumber);
    // Implementasi autentikasi lebih lanjut di sini
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Registration</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan nama lengkap anda"
          onChangeText={text => setName(text)}
          value={name}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan Username anda"
          onChangeText={text => setUsername(text)}
          value={username}
          secureTextEntry={true}
        />
        </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan Email anda"
          onChangeText={text => setUseremail(text)}
          value={useremail}
          secureTextEntry={true}
        />
        </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan Alamat anda"
          onChangeText={text => setAddress(text)}
          value={address}
          secureTextEntry={true}
        />
        </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan Nomor Telfon anda"
          onChangeText={text => setPhonenumber(text)}
          value={phonenumber}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 45,
    paddingTop: 30,
    backgroundColor: 'white',
  },
  titleContainer: {
    alignSelf: 'flex-start',
  },
  title: {
    fontSize: 40,
    marginBottom: 10,
    fontWeight: 'bold',
    color: 'black',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  button: {
    width: '100%',
    backgroundColor: 'purple',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default SignInScreen;