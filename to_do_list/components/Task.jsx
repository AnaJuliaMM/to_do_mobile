import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function Task({text}) {
  return (
    <View style={styles.task}>
        <View style={styles.checkboxSpace}>
            <TouchableOpacity style={styles.checkbox}></TouchableOpacity>
        </View>
        <View style={styles.taskText}>
            <Text >{text}</Text>
        </View>
        <View style={styles.circular}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    task: {
        backgroundColor: '#FFFF', 
        padding: 10,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        width: '100%'
    },
    checkboxSpace: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    checkbox: {
        width: 20,
        height: 20,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 5
    },
    taskText: {
        justifyContent: 'flex-start',
        width: '80%'
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6', 
        borderWidth: 2,
        borderRadius: 5,
    }
  
  
  });
  