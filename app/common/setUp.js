/**
 * ShopReactNative
 *
 * @author Tony Wong
 * @date 2016-08-13
 * @email 908601756@qq.com
 * @copyright Copyright © 2016 EleTeam
 * @license The MIT License (MIT)
 */

import React, { Component } from 'react';
import {
    Navigator,
    View,
    StatusBar,
    Platform,
    AsyncStorage,
    BackAndroid,
} from 'react-native';
import commonStyles,{colors} from "../../app/common/globalStyle";
import Splash from './splash';

class SetUp extends Component {
    componentDidMount(){
        this.loadInitialState().done();
    }
    async loadInitialState (){
        let user = await AsyncStorage.getItem("user");
        if (user !== null){
           console.log(user)
        } else {
           AsyncStorage.setItem("user","zhang rui nian",
             ()=>{
                 console.log(user)
             });
        }
    }
    render() {
        return (
            <View style={{flex: 1}}>
                {/*configureScene={()=>{
                return  Navigator.SceneConfigs.VerticalDownSwipeJump;
            }}*/}
                <StatusBar
                    hidden={false}
                    backgroundColor={colors.statusBarColor}
                    translucent={true}
                />
                <Navigator
                    initialRoute={{name: 'Splash', component: Splash}}
                    renderScene={(route, navigator) => {
                        let Component = route.component;
                        return (
                            <Component navigator = {navigator} route = {route} {...route.passProps} />
                        )
                    }}
                />
            </View>
        )
    }
}

export default SetUp;