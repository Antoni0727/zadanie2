import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PolishKing from './PolishKing.js';
import KingsList from './KingsList.js';

export default function App() {

  let kings = [
    {id:1, name:"Boleslaw Chrobry", reigDate:"992-1025"},
    {id:2, name:"Mieszko II", reigDate:"1025-1031"},
    {id:3, name:"Boleslaw Smialy", reigDate:"1031-"},
    {id:4, name:"Boleslaw Chrobry", reigDate:"992-1025"},
  ];

  return (
    <View>
      <PolishKing name="Boleslaw Chrobry" reignDate="992-1025"/>
      <PolishKing name="Przemyslaw II" reignDate="1295-1296"/>
      <Text>Lista Królów</Text>
      <KingsList kingsList={kings}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
