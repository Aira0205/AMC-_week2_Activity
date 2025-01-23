import React, {useState} from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

 const TextInANest = () => {
   const [titleText, setTitleText] = useState("Aira Maureen");
   const firstText = 'Hi, I am a 3rd year BSIT student. Minsan pagod, amdalas pagod. Pagod pero mainatined ang kagandahan. And I thank you! ';

   const onPressTitle = () => {
     setTitleText("Castro");
   };

   return (
     <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.baseText}>
          <Text style={styles.titleText} onPress={onPressTitle}>
            {titleText}
            {'\n'}
            {'\n'}
          </Text>
          <Text numberOfLines={5}>{firstText}</Text>
        </Text>
      </SafeAreaView>
    </SafeAreaProvider>
   );
 };

 const styles = StyleSheet.create({
   container: {
     flex: 1,
   },
   baseText: {
     fontFamily: 'Cochin',
     textAlign: 'center',
     color: 'red'
   },
   titleText: {
     fontSize: 20,
     fontWeight: 'bold',
     color: 'blue'
   },
 });

 export default TextInANest;
