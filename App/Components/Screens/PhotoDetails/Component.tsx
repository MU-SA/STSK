import {SafeAreaView, View, Text, Pressable} from 'react-native';
import React from 'react';
import Post from '../../../UI/Post';
import {useNavigation} from 'react-navigation-hooks';
import ArrowLeft from '../../../UI/Icons/ArrowLeft';
import styles from './styles';
export const PhotoDetails = ({}) => {
  const navigation = useNavigation();
  const data = navigation.getParam('data');
  console.log(data)
  const goBack = () => navigation.goBack();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={{padding: 8}}>
        <Pressable onPress={goBack} style={styles.row}>
          <ArrowLeft size={18} fill={'#121212'} />
          <Text style={{marginStart: 8}}>Back</Text>
        </Pressable>
        <Post data={data} />
      </View>
    </SafeAreaView>
  );
};
