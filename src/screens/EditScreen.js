import React, { useContext } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import BlogPostForm from '../components/BlogPostForm';
import { Context } from '../context/BlogContext';

const EditScreen = ({navigation}) => {
  const { state } = useContext(Context);

  const blogPost = state.find(
    blogPost => blogPost.id === navigation.getParam('id')
  );

 return <BlogPostForm onSubmit={(title, content) => { console.log(title,content)}} initialValues={{title: blogPost.title, content: blogPost.content}}/>
}

export default EditScreen

const styles = StyleSheet.create({
});
// initialValues={{title: blogPost.title, content: blogPost.content}}