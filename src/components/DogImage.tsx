import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {connect} from 'react-redux';
import {
  increaseAction,
  decreaseAction,
  getDogImageRequestAction,
} from '../redux/actions';

function DogImage(props: any) {
  const number = props.dogImageReducer.number;
  const dogImage = props.dogImageReducer.dogImage;
  const isLoading = props.dogImageReducer.isFetching;

  const handleIncrease = () => props.increment();
  const handleDecrease = () => props.decrement();
  const handleApi = () => {
    const payload = {behavior: 'BUTTON_PRESS'};
    props.getDogImageRequest(payload);
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

const mapStateToProps = (reducer: any) => ({
  dogImageReducer: reducer.dogImageReducer,
});

const mapDispatchToProps = (dispatch: Function) => ({
  increment: increaseAction(dispatch),
  decrement: decreaseAction(dispatch),
  getDogImageRequest: getDogImageRequestAction(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(DogImage);

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
