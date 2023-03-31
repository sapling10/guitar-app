import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Navigator from './routes/stack.js';

import { COLORS } from './style/colors.js';
import { APPSTYLE } from './style/appStyle.js';

export default function App() {
    return (
        <Navigator />
    );
}
