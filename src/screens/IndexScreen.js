import React, { useContext, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Context } from '../context/BlogContext';

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost, getBlogPosts } = useContext(Context);

  useEffect(() => {
    getBlogPosts();

    const listener = navigation.addListener('didFocus', () => {
      getBlogPosts();
    });
    return () => {
      listener.remover();
    };
  }, []);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Show', { id: item.id });
              }}
            >
              <View style={styles.row}>
                <Text style={styles.text}>{item.title}</Text>
                <TouchableOpacity
                  onPress={() => {
                    deleteBlogPost(item.id);
                  }}
                >
                  <Feather style={styles.icon} name="trash-2" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
    color: 'black',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderTopWidth: 1,
    paddingHorizontal: 10,
    borderColor: 'gray',
  },
});

export default IndexScreen;
