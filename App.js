import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, SafeAreaView, Platform } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  const [condition, setCondition] = useState(false);
  const [teamSelect, setTeamselect] = useState ('');

  const isEqual = (team) => {
    if(condition) { 
      setCondition(false);
      if(teamSelect===team.name) {
        team.view = true;
        console.log("es igual");
      } else {
        console.log("no es igual");
      }
    } else {
      setTeamselect(team.name);
      setCondition(true);
    }
  }

  const teams = [
    { id: 1, name: "real", view: false },
    { id: 2, name: "barcelona", view: false },
    { id: 3, name: "bayern", view: false },
    { id: 4, name: "inter", view: false },
    { id: 5, name: "psg", view: false },
    { id: 6, name: "arsenal", view: false },
    { id: 7, name: "real", view: false },
    { id: 8, name: "barcelona", view: false },
    { id: 9, name: "bayern", view: false },
    { id: 10, name: "inter", view: false },
    { id: 11, name: "psg", view: false },
    { id: 12, name: "arsenal", view: false },
  ];

  const teamImages = {
    "real": require('./assets/icons-teams/real-madrid.png'),
    "barcelona": require('./assets/icons-teams/barcelona.png'),
    "bayern": require('./assets/icons-teams/bayen-munchen.png'),
    "inter": require('./assets/icons-teams/internazionale-milano.png'),
    "psg": require('./assets/icons-teams/paris-saint-germain.png'),
    "arsenal": require('./assets/icons-teams/arsenal.png'),
  };

  const numColumns = 3;

  return (
        <SafeAreaView style={{flex:1}}>
          <View style={{flex:1, marginTop: Platform.OS === "android" && Constants.StatusBarHeight, justifyContent:"center", alignItems:"center"}}>
            <View>
              <Text style={{fontWeight:600, fontSize:17}}>Time: 10 seg</Text>
            </View>
            <FlatList
              data={teams}
              renderItem={({item: team}) => (
                <TouchableOpacity onPress={()=>isEqual(team)}>
                  <Image
                    source={team.view ? require('./assets/icons-teams/question-icon.png') : teamImages[team.name]}
                    style={styles.teamImage}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              )}
              keyExtractor={item=> item.id.toString()}
              numColumns={numColumns}
            />
          </View>
        </SafeAreaView>
  );
}

const styles = StyleSheet.create({
});
