/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import Lightbox from './Lightbox';

console.log('haha');

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <Lightbox underlayColor="white" onPress={() => console.log('hichic')}>
        <Image
          style={styles.contain}
          resizeMode="contain"
          source={{
            uri:
              'https://www.yayomg.com/wp-content/uploads/2014/04/yayomg-pig-wearing-party-hat.jpg',
          }}
        />
      </Lightbox>
      <View style={styles.text}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
        </Text>
      </View>
      <Lightbox blurType="dark">
        <Image
          style={styles.carousel}
          resizeMode="contain"
          source={{
            uri:
              'http://cdn.lolwot.com/wp-content/uploads/2015/07/20-pictures-of-animals-in-hats-to-brighten-up-your-day-1.jpg',
          }}
        />
      </Lightbox>
      <View style={styles.text}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
        </Text>
      </View>
      <Lightbox
        blurType="light"
        renderHeader={close => (
          <TouchableOpacity onPress={close}>
            <Text style={styles.closeButton}>Close</Text>
          </TouchableOpacity>
        )}>
        <View style={styles.customHeaderBox}>
          <Text>I have a custom header</Text>
        </View>
      </Lightbox>
      <View style={styles.text}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
        </Text>
      </View>
      <View style={styles.row}>
        <Lightbox style={styles.col}>
          <View style={[styles.square, styles.squareFirst]}>
            <Text style={styles.squareText}>I'm a square</Text>
          </View>
        </Lightbox>
        <Lightbox style={styles.col}>
          <View style={[styles.square, styles.squareSecond]}>
            <Text style={styles.squareText}>I'm a square</Text>
          </View>
        </Lightbox>
      </View>
      <View style={styles.text}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
        </Text>
      </View>
    </ScrollView>
  );
};

const WINDOW_WIDTH = Dimensions.get('window').width;
const BASE_PADDING = 10;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: BASE_PADDING,
    flex: 1,
  },
  closeButton: {
    color: 'white',
    borderWidth: 1,
    borderColor: 'white',
    padding: 8,
    borderRadius: 3,
    textAlign: 'center',
    margin: 10,
    alignSelf: 'flex-end',
  },
  customHeaderBox: {
    height: 150,
    backgroundColor: '#6C7A89',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    marginLeft: -BASE_PADDING,
    marginRight: -BASE_PADDING,
  },
  col: {
    flex: 1,
  },
  square: {
    width: WINDOW_WIDTH / 2,
    height: WINDOW_WIDTH / 2,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  squareFirst: {
    backgroundColor: '#C0392B',
  },
  squareSecond: {
    backgroundColor: '#019875',
  },
  squareText: {
    textAlign: 'center',
    color: 'white',
  },
  carousel: {
    height: WINDOW_WIDTH - BASE_PADDING * 2,
    width: WINDOW_WIDTH - BASE_PADDING * 2,
    backgroundColor: 'white',
  },
  contain: {
    flex: 1,
    height: 150,
  },
  text: {
    marginVertical: BASE_PADDING * 2,
  },
});

export default App;
