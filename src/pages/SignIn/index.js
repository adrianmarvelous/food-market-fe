import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from '../../components/molecules';
import { Button, TextInput } from '../../components/atoms';

const SignIn = () => {
    return (
        <View>
            <Header />
            <View>
                <TextInput />
                <TextInput />
                <Button />
                <Button />
            </View>
            <Text>Sign In Page</Text>
        </View>
    )
}

export default SignIn;

const styles = StyleSheet.create({})