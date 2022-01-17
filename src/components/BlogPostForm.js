import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const BlogPostForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
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
        title={'Save Post'}
        onPress={() => {
          onSubmit(title, content);
        }}
      />
    </View>
  );
};

export default BlogPostForm;

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
