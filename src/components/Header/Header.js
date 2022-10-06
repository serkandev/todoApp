import React from 'react';
import {View, Text} from 'react-native';
import styles from './Header.style';
const Header = props => {
  return (
    <View>
      <View style={styles.title_container}>
        <Text style={styles.title}>YAPILACAKLAR</Text>
        <Text style={styles.counter}>{props.todoCount}</Text>
      </View>
    </View>
  );
};

export default Header;
