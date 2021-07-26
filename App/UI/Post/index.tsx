import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
type ComponentProps = {
  data: {
    name: string;
    url: string;
    title: string;
    thumbnailUrl: string;
    id: number;
  };
};
const Post = (props: ComponentProps) => {
  const {data} = props;
  return (
    <View style={styles.post}>
      <View style={styles.details_bar}>
        <View style={styles.row}>
          <Image style={styles.avatar} source={{uri: data.thumbnailUrl}} />
          <Text style={styles.name}>{data.name}</Text>
        </View>
        <Text style={styles.title}>{data.title}</Text>
      </View>
      <Image source={{uri: data.url}} style={styles.photo} />
    </View>
  );
};
function compare(prev: ComponentProps, next: ComponentProps): boolean {
  return prev.data.id === next.data.id;
}
export default React.memo(Post, compare);
