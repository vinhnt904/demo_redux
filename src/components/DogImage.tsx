import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

type Props = {};

export default function DogImage(props: Props) {
  const imageUrl = '';
  const isLoading = false;

  const renderImage = () => {
    return (
      <View style={styles.imageContainer}>
        {imageUrl ? (
          <Image source={{uri: imageUrl}} />
        ) : (
          <Text>Image here</Text>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderImage()}

      <TouchableOpacity style={styles.button}>
        {isLoading ? (
          <ActivityIndicator size={'small'} color={'gray'} />
        ) : (
          <Text>Show Image</Text>
        )}
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
  button: {
    marginTop: 20,
    borderRadius: 4,
    backgroundColor: 'cyan',
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
});
