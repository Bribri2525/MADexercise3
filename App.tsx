import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>WELCOME</Text>
      </View>
      <View>
        <Text style={styles.textInput}>Username</Text>
        <TextInput placeholder="Masukan Nama anda" style={styles.input} />
        <Text style={styles.textInput}>Password</Text>
        <TextInput
          placeholder="Masukan Password anda"
          style={styles.input}
          autoCapitalize="none"
          secureTextEntry={true}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingLeft: 25,
    paddingRight: 25,
  },

  header: {
    marginBottom: 30,
  },

  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },

  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#959696',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    color: '#7c7d7e',
    marginBottom: 20,
    padding: 10,
  },

  textInput: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 5,
  },

  button: {
    color: 'red',
    backgroundColor: '#e87613',
    borderWidth: 1,
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 10,
    width: '100%',
    height: 45,
    borderColor: '#7c7d7e',
  },

  textButton: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
    padding: 8,
  },
});