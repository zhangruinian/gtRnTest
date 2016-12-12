/**
 * Created by 张瑞年 on 2016/11/22.
 */
import {StyleSheet,Dimensions} from 'react-native';

// export const {windowHeight, windowWidth} = Dimensions.get('window');

export const  windowWidth = Dimensions.get('window').width;
export const  windowHeight = Dimensions.get('window').height;


export const colors ={
    backGray: '#E5E5E5',
    textGray: '#9A9A9A',
    textBlack: '#333333',
    lineGray: '#F0F0F0',
    backWhite: '#F2F2F2',
    textGold: '#BC7233',
    borderColor: '#E2E2E2',
    purple: '#9966CC',
    red: '#f61d4b',
    black: '#586872',
    blue: '#4078c0',
    white: "#fff",
    lightGray:"#F0F0F0",
    green: '#80BD01',
    // statusBarColor:"rgba(3,169,244,0.8)"
    statusBarColor:"#03A9F4"
};

const commonStyles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center',
        backgroundColor:colors.white,
        // paddingTop:12
    },
    shadowLine: {
        shadowColor: '#999999',
        shadowOpacity: 0.8,
        shadowRadius: 1,
        shadowOffset: {
            height: 2,
            width: 1
        },
    },
    sepLine: {
        backgroundColor: colors.backGray,
        height: 0.5,
    },
    textInput: {
        fontSize: 15,
        borderWidth: 1,
        height: 38,
        marginTop: 5,
        marginBottom: 10,
        borderRadius: 4,
        padding: 3,
        borderColor: colors.blue,
    },

});
/*screenWidth: Dimensions.get('window').width,
    screenHeight: Dimensions.get('window').height,
    themeColor: 'rgb(22,131,251)',
    pageBackgroundColor: '#f4f4f4',
    grayColor: '#c4c4c4',
    btnActiveOpacity: 0.7,
},
text: {
    color: globalTextColor,
        fontSize: px2dp(15)
},
scrollView: {
    fontSize: px2dp(15),
        underlineStyle: {
        backgroundColor: 'white'
    }
}*/
export default commonStyles;