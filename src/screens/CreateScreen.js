import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Context } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { addBlogPost } = useContext(Context);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Blog Title:</Text>
      <TextInput
        style={styles.textInput}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Blog Content:</Text>
      <TextInput
        style={styles.textInput}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button
        title="Add Blog Post"
        onPress={() => {
          addBlogPost(title, content, () => {
            navigation.navigate('Index');
          });
        }}
      />
    </View>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({
  textInput: {
    fontSize: 18,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 15,
    padding: 5,
    margin: 5,
    borderRadius: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  container: {
    marginTop: 20,
  },
});
