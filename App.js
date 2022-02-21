import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';
import AddList from './components/addList';
import Header from './components/header';
import TodoItem from './components/todoItem';

export default function App() {
  const [listings, setListings] = useState([
    { name: 'Oregon', key: '1' },
    { name: 'Arizona', key: '2' },
    { name: 'California', key: '3' },
    { name: 'Texas', key: '4' }
  ]);

  const pressHandler = (key) => {
    setListings((prevListings) => {
      return prevListings.filter(list => list.key != key);
    });
  }

  const submitHandler = (name) => {
      setListings((prevListings) => {
        return [
          { name: name, key: Math.random().toString() },
          ...prevListings
        ];
      }); 
  }

  return (
      <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.boldText}>Add Listing</Text>
        <AddList submitHandler={submitHandler}/>
        <Text style={styles.boldText}>Show Listings</Text>
        <View style={styles.list}>
          <FlatList
          data={listings}
          renderItem={({ item }) => (
            <TodoItem item={item} pressHandler={pressHandler}/>
          )}
          />
        </View>
      </View>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
  boldText: {
    fontWeight: 'bold',
    padding: 20,
    textAlign: 'center',
    fontSize: 20
  }
});
