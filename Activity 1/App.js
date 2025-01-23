import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <Text  style={{
          textAlign: 'center', }} >Aira Maureen A. Castro</Text>
      <View>
        <Text style={{
          textAlign: 'center', }} >IT302</Text>
        <Image
          source={{
            uri: 'https://th.bing.com/th/id/R.9a7dc5be260c6271f94b098448e43698?rik=qMfSAeSx7woYgA&riu=http%3a%2f%2ffc09.deviantart.net%2ffs36%2ff%2f2008%2f272%2fd%2f4%2fIllustrator_Stitch_by_CelebrielIsilel.jpg&ehk=I%2fsot4tvxeuPGN1Wxb4IwBHyABr52gPSROyWQ%2bQIy2Y%3d&risl=&pid=ImgRaw&r=0', 
          }}
          style={{
            width: 200, 
            height: 200,
            alignSelf: 'center',
          }}
        />
      </View>
      <TextInput
        style={{
          textAlign: 'center',
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="You can type in me"
      />
    </ScrollView>
  );
};

export default App;