import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { observer } from 'mobx-react-lite';
import { useHomeViewModel } from '../viewmodels/HomeViewModel';

const HomeScreen = observer(() => {
  const viewModel = useHomeViewModel();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My Mobile App</Text>
      <Button mode="contained" onPress={viewModel.handleButtonPress}>
        Get Started
      </Button>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
});

export default HomeScreen;