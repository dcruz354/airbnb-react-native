import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, View } from 'react-native';

export default function AddList({ submitHandler}) {
    const [name, setName] = useState('');

    const changeHandler = (val) => { 
        setName(val)
    }
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='new list...'
                onChangeText={changeHandler}
                value={name}
            />
            <Button color='coral' onPress={() => submitHandler(name)} title='add listing' />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
}) 