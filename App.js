import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, FlatList, Alert, Keyboard, TouchableWithoutFeedback, ActivityIndicator } from 'react-native';
import AddList from './components/addList';
import Header from './components/header';
import TodoItem from './components/todoItem';

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getListings = async () => {
    try {
      const response = await fetch('http://localhost:8080/listingsAndReviews/v1/listings');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getListings();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>{item.name}</Text>
          )}
        />
      )}
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
    flex: 1,
    padding: 24,
  },
  boldText: {
    fontWeight: 'bold',
    padding: 20,
    textAlign: 'center',
    fontSize: 20
  }
});
