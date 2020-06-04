import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';

const DeviceList = [
  {
    deviceID: '01',
    deviceType: 'Light',
    deviceState: false,
    deviceRoom: '101',
  },
  {
    deviceID: '02',
    deviceType: 'Light',
    deviceState: false,
    deviceRoom: '101',
  },
  {
    deviceID: '03',
    deviceType: 'Light',
    deviceState: false,
    deviceRoom: '101',
  },
  {
    deviceID: '04',
    deviceType: 'Light',
    deviceState: false,
    deviceRoom: '101',
  },
  {
    deviceID: '05',
    deviceType: 'Light',
    deviceState: false,
    deviceRoom: '101',
  },
  {
    deviceID: '06',
    deviceType: 'Light',
    deviceState: false,
    deviceRoom: '101',
  },
];

class deviceScreen extends React.Component {
  renderItem = ({item}) => {
    const {navigation} = this.props.navigation;
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => this.props.navigation.navigate('Device')}>
        <View style={styles.item}>
          <Text style={styles.title}>
            {item.deviceType} {item.deviceID}
          </Text>
          {/*<Text style={styles.name}>{title.devicePosition}</Text>*/}
        </View>
      </TouchableOpacity>
    );
  };

  render = () => {
    return (
      <View>
        <View style={styles.headContainer}>
          <Button title="Action" />
        </View>
        <FlatList
          data={DeviceList}
          renderItem={this.renderItem}
          keyExtractor={item => item.deviceID}
        />
        <View style={styles.bottomContainer}>
          <View style={styles.bottomButtonContainer}>
            <TouchableOpacity
              style={styles.bottomButton}
              onPress={() => this.props.navigation.navigate('Setting')}>
              <Image
                source={require('../icons/settingIcon.png')}
                style={styles.image}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.bottomButtonContainer}>
            <TouchableOpacity
              style={styles.bottomButton}
              onPress={() => this.props.navigation.navigate('Adding')}>
              <Image
                source={require('../icons/addingIcon.png')}
                style={styles.image}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.bottomButtonContainer}>
            <TouchableOpacity
              style={styles.bottomButton}
              onPress={() => this.props.navigation.navigate('History')}>
              <Image
                source={require('../icons/historyIcon.png')}
                style={styles.image}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.bottomButtonContainer}>
            <TouchableOpacity
              style={styles.bottomButton}
              onPress={() => this.props.navigation.navigate('Timer')}>
              <Image
                source={require('../icons/timerIcon.png')}
                style={styles.image}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  headContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  name: {
    fontSize: 16,
  },
  bottomContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 36,
    width: '100%',
    maxWidth: 450,
    marginBottom: 10,
  },
  bottomButtonContainer: {
    flex: 1,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: 'auto',
    height: '100%',
    resizeMode: 'contain',
  },
  bottomButton: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default deviceScreen;
