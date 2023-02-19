import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {dogImageSlice} from '../redux/Slices';

export default function DogImage(props: any) {
  const dispatch = useDispatch();
  const number = useSelector(state => state?.dogImage?.number);
  const dogImage = useSelector(state => state?.dogImage?.dogImage);
  const isLoading = useSelector(state => state?.dogImage?.isFetching);
  // const dogData =  useSelector(state => state?.dogImage); // return object

  const handleIncrease = () => dispatch(dogImageSlice.actions.increment());
  const handleDecrease = () => dispatch(dogImageSlice.actions.decrement());
  const handleApi = () => {
    const payload = {behavior: 'BUTTON_PRESS'};
    dispatch(dogImageSlice.actions.getDogImageRequest(payload));
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
