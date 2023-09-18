import { StyleSheet, Text, View, TextInput as TextInputRN } from 'react-native'
import React from 'react'

const TextInput = () => {
  return (
    <View>
      <Text style={styles.label}>Email Address</Text>
      <TextInputRN style={styles.input} placeholder="Type your email address"/>
    </View>
  )
}

export default TextInput

const styles = StyleSheet.create({
  label: {fontSize:16,fontFamily: 'Poppins-Regular',color:'#020202'},
  input: {borderWidth:1,borderColor: '#020202',borderRadius:8,padding:10},
})