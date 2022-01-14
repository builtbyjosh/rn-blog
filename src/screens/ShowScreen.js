import React, {useContext} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Context } from '../context/BlogContext';

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context)
  const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id')) 

  return (
    <View>
      <Text style={styles.title}>{blogPost.title}</Text>
      <Text style={styles.content}>{blogPost.content}</Text>
    </View>
  );
};

export default ShowScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  content: {
    fontSize: 14
  }
});
