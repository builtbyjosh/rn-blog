import React, { useContext } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import BlogPostForm from '../components/BlogPostForm';
import { Context } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);

  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        addBlogPost(title, content, () => {
          navigation.navigate('Index');
        });
      }}
      
    />
  );
};

export default CreateScreen;


// http://867f-2601-241-80-9410-d9aa-4977-4b3c-c72d.ngrok.io