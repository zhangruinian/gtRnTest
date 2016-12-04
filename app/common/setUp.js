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
    Platform
} from 'react-native';

import Splash from './splash';

class SetUp extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                {/*<StatusBar
                    barStyle='light-content'
                    backgroundColor='transparent'
                    translucent={true}
                />*/}
                {/*configureScene={()=>{
                return  Navigator.SceneConfigs.VerticalDownSwipeJump;
            }}*/}
                <StatusBar
                    hidden={false}
                    backgroundColor={"#03A9F4"}
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