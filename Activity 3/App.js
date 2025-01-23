import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const Act3 = () => (
  <SafeAreaProvider>
   <SafeAreaView style={styles.container}>
    <Text style={styles.nameText}>
      Aira Maureen 
      <Text style={styles.surnameText}> Castro</Text>
      <Text style={styles.secText}> from IT302</Text>
      <Text style={styles.schText}> I am from GRC</Text>
       <Text style={styles.abcText}> and I am taking Bachelor of Science in Information Technology.</Text>
    </Text>
 </SafeAreaView>
</SafeAreaProvider>
);

const styles =  StyleSheet.create({
  container: {
    flex: 1,
  },
  nameText: {
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
  },
  surnameText: {
    fontWeight: 'bold',
    color: 'blue',
  },
  secText: {
    fontWeight: 'normal',
    color: 'orange',
  },
  schText: {
    fontWeight: 'normal',
    color: 'violet',
  },
  abcText: {
    fontWeight: 'normal',
    color: 'green',
  },
});

export default Act3;