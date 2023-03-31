import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Tuner from '../pages/tuner.js';
import Tuning from '../pages/tuning.js';
import Settings from '../pages/settings.js';

const screens = {
    Tuner: {
        screen: Tuner
    },
    Tuning: {
        screen: Tuning
    },
    Settings: {
        screen: Settings
    }
}

const stack = createStackNavigator(screens);

export default createAppContainer(stack);
