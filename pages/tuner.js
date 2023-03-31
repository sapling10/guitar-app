import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Tuner({ navigation }) {

    const TuningPress = () => {
        navigation.push('Tuning')
    }

    const SettingsPress = () => {
        navigation.push('Settings')
    }

    return (
        <View style={styles.nav}>
            <View style={styles.tuningNav}>
                <Button title='Tuning' onPress={TuningPress}/>
            </View>
            <View style={styles.settingsNav}>
                <Button title='Settings' onPress={SettingsPress}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    nav: {
        marginTop: 600
    },

    tuningNav: {
        paddingHorizontal: 15,
        paddingBottom: 10
    },

    settingsNav: {
        paddingHorizontal: 15
    }
});
