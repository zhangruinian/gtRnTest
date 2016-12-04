/**
 * Created by 张瑞年 on 2016/11/22.
 */
import {StyleSheet,Dimensions} from 'react-native';
// export const {windowHeight, windowWidth} = Dimensions.get('window');
export const  windowWidth = Dimensions.get('window').width;
export const colors ={
    lightGray:"#F0F0F0",
    lineGray: '#F0F0F0',
    green: '#80BD01',
    backGray: '#E5E5E5',
    textGray: '#9A9A9A',
    textBlack: '#333333',
    purple: '#9966CC',
    red: '#f61d4b',
    backWhite: '#F2F2F2',
    textGold: '#BC7233',
    borderColor: '#E2E2E2',
    black: '#586872',
    blue: '#4078c0',
    white: "white",
};

const commonStyles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:colors.white
    },

});
export default commonStyles;