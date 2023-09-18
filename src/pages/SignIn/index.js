import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from '../../components/molecules';
import { Button, TextInput } from '../../components/atoms';

const SignIn = () => {
    return (
        <View style={styles.page}>
            <Header />
            <View style={styles.container}>
                <TextInput />
                <TextInput />
                <Button />
                <Button />
            </View>
        </View>
    )
}

export default SignIn;

const styles = StyleSheet.create({
    page: {flex:1},
    container: {backgroundColor:'white', paddingHorizontal: 24, paddingVertical:26, marginTop:24,flex:1},
})