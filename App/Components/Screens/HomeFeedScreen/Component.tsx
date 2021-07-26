import React from 'react';
import {View, Text, SafeAreaView, FlatList, Pressable} from 'react-native';
import Post from '../../../UI/Post';
import {ApiPaylaod, PostType} from '../../../Types/HomeFeedActionTypes';
import styles from './styles';
import {StackNavigationProp} from 'react-navigation-stack/lib/typescript/src/vendor/types';
const faker = require('faker');
type ScreenState = {
  limit: number;
  start: number;
};
type ScreenProps = {
  getData(props: ScreenState): void;
  home_feed: PostType[];
  navigation: StackNavigationProp;
};
export class HomeFeedScreen extends React.Component<ScreenProps, ApiPaylaod> {
  constructor(props: ScreenProps) {
    super(props);
    this.state = {
      start: 0,
      limit: 100,
    };
    this.getHomeFeed();
  }

  navigateToDetails = (data: PostType) => {
    this.props.navigation.navigate('photo_details', {
      data,
    });
  };
  renderItem = (props: {item: PostType}) => {
    const {item} = props;
    const name = faker.name.findName();
    const data = {...item, name};
    return (
      <Pressable onPress={() => this.navigateToDetails(data)}>
        <Post data={data} key={item.id} />
      </Pressable>
    );
  };

  onEndReached = () => {
    const {start, limit} = this.state;
    this.setState({start: start + limit});
    this.getHomeFeed();
  };

  getHomeFeed = () => {
    this.props.getData(this.state);
  };
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.wrapper}>
          <Text style={styles.header}>All Photos</Text>
          <FlatList
            onEndReached={this.onEndReached}
            onEndReachedThreshold={0.2}
            data={this.props.home_feed}
            renderItem={this.renderItem}
          />
        </View>
      </SafeAreaView>
    );
  }
}
