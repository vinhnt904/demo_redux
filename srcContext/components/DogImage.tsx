import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useDog} from '../providers';

export default function DogImage() {
  const dogData = useDog();

  const number = dogData.number;
  const dogImage = dogData.dogImage;
  const isLoading = dogData.isFetching;

  const handleIncrease = () => {
    dogData.increment();
  };
  const handleDecrease = () => {
    dogData.decrement();
  };
  const handleApi = () => {
    const payload = {behavior: 'BUTTON_PRESS'};
    dogData.getDogImageRequest(payload);
  };

  const renderImage = () => {
    return (
      <View style={styles.imageContainer}>
        {dogImage ? (
          <Image source={{uri: dogImage}} style={styles.image} />
        ) : (
          <Text>Image here</Text>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderImage()}

      <TouchableOpacity
        disabled={isLoading}
        style={styles.button}
        onPress={handleApi}>
        {isLoading ? (
          <ActivityIndicator size={'small'} color={'gray'} />
        ) : (
          <Text>Show Image</Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity style={styles.textButton} onPress={handleIncrease}>
        <Text>Increase {number}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.textButton} onPress={handleDecrease}>
        <Text>Decrease {number}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#a2a2a2',
  },
  imageContainer: {
    width: '80%',
    height: '50%',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#a2a2a2',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  button: {
    height: 44,
    marginTop: 20,
    borderRadius: 4,
    backgroundColor: 'cyan',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  textButton: {
    padding: 10,
    paddingBottom: 0,
  },
});
