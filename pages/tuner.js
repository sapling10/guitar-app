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
                <Button 
                    title='Tuning' 
                    onPress={TuningPress}
                    color='green'
                />
            </View>
            <View style={styles.settingsNav}>
                <Button 
                    title='Settings' 
                    onPress={SettingsPress}
                    color='green'
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    nav: {
        marginTop: 640,
        paddingHorizontal: 10,
        marginHorizontal: 80,
        flexDirection: 'row',
    },

    tuningNav: {
        paddingRight: 20
    },

    settingsNav: {
        paddingLeft: 20
    }
});
