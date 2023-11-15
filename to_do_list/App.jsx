import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>

      {/* Today´s Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today´s tasks</Text>
        <View style={styles.tasksList}>
          {/* This is where the tasks will go */}
          <Task text='Terminar projetssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssso da loja de café em Next.js'/>
          <Task text='Fazer a calculadora em React Native'/>

        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 50,
    paddingHorizontal: 20
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '700'
  },
  tasksList: {
    marginTop: 30
  }


});
