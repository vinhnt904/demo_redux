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
import {getDogImageRequestAction} from '../redux/actions';

function DogImage(props: any) {
  const dogImage = props.dogImageReducer.dogImage;
  const isLoading = props.dogImageReducer.isFetching;
  const handlePress = () => props.getDogImageRequest();

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
        onPress={handlePress}>
        {isLoading ? (
          <ActivityIndicator size={'small'} color={'gray'} />
        ) : (
          <Text>Show Image</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

const mapStateToProps = (reducer: any) => ({
  dogImageReducer: reducer.dogImageReducer,
});

const mapDispatchToProps = (dispatch: Function) => ({
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
});
