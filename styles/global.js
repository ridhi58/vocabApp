import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native';


const win = Dimensions.get('window');
export const globalStyles = StyleSheet.create({

    container: {
        flex: 1,

        backgroundColor: "#5f9ea0",
        // backgroundColor: "white"
    },
    // head: {

    //     elevation: 4,
    //     borderBottomColor: "#a7a7aa",
    //     shadowColor: "#a7a7aa",
    //     top: 15,
    //     height: 72.6,
    //     // width: win.width,
    //     alignItems: 'center',
    //     backgroundColor: 'white',
    //     flexDirection: 'row',
    //     marginBottom: 15
    //     // borderBottomWidth: 2
    // },
    // headerText: {
    //     color: 'black',
    //     fontSize: 20
    // }

})