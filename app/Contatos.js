import React, { useState } from 'react';
import {
  View,
  Button,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';

export default function Contatos() {

  return (
    <View>
        <View style={styles.buttonRow}>
          <Button title="Pesquisar"/>
        </View>

      <Text style={styles.label}>Artista 1</Text>
      <Text style={styles.label}>Artista 2</Text>
      <Text style={styles.label}>Artista 3</Text>
      <Text style={styles.label}>Artista 4</Text>
      <Text style={styles.label}>Artista 4</Text>

    </View>
        
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#220A34',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    marginTop: 15,
    color: '#fff',
  },
  input: {
    height: 50,
    borderColor: '#888',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#EFDAFF',
  },
  buttonRow: {
    justifyContent: 'center',
    marginTop: 10,
    gap: 2,
  },
  buttonSpacer: {
    width: 20,
  },
});