import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,
} from 'react-native';

import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);
  const [greeting, setGreeting] = useState('');

  function handleAddNewSkill() {
    setMySkills(oldState => [...oldState, newSkill]);
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreeting('Good morning');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Good afternoon');
    } else {
      setGreeting('Good night');
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Yago</Text>
      <Text style={styles.greetings}>{greeting}</Text>
      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#c3c3c3"
        onChangeText={setNewSkill}
      />
      <Button onPress={handleAddNewSkill} />
      <Text style={[styles.title, { marginVertical: 20 }]}>My Skills</Text>
      {/* o componente FlatList serve para renderizar uma lista extensa de
      elementos, diferentemente do ScrollView, essa renderização ocorrerá por
      demanda. */}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={mySkills}
        keyExtractor={(item, index) => String(index)}
        renderItem={({ item }) => <SkillCard skill={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 70,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 5,
  },
  greetings: {
    color: '#fff',
  },
});
