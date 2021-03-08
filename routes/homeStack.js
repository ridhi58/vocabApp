import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import Landingpage from '../components/landingpage'

import DisplayWord1 from "../components/DisplayWord1"
import DisplayWord from "../components/DisplayWord"
import AllLevels from "../components/Menu"
import Levels from "../components/Levels"



const screens = {
    Landingpage: {
        screen: Landingpage,
        navigationOptions: {
            headerShown: false,
        }
    },
    AllLevels: {
        screen: AllLevels,
        navigationOptions: {
            title: 'Vocab Mad Easy',
        }
    },
    Levels: {
        screen: Levels,
        navigationOptions: {
            title: 'Levels',
        }
    },
    DisplayWord1: {
        screen: DisplayWord1,

        navigationOptions: {
            headerShown: false,
            title: 'Vocab Mad Easy',

        },

    },
    DisplayWord: {
        screen: DisplayWord,

        navigationOptions: {
            title: 'Vocab Mad Easy',

        },

    }
}
const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack)