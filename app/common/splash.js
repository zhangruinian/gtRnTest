/**
 * Created by 张瑞年 on 2016/11/24.
 */
import React, { Component } from 'react';
import {
    Dimensions,
    Image,
    InteractionManager,
    View,
    Platform,
    BackAndroid
} from 'react-native';
import TabNav from './tabs';
// 解构赋值获取宽高，为了设置image宽高，全屏展示图片，或者固定，留padding
var {height, width} = Dimensions.get('window');

class Splash extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        let {navigator} = this.props;
        this.timer = setTimeout(() => {
            InteractionManager.runAfterInteractions(() => {
                navigator.resetTo({
                    component: TabNav,
                    name: 'TabNav'
                });
            });
        }, 500);
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Image
                    style={{flex: 1, width: width, height: height}}
                    source={require('../image/welcome.png')}
                />
            </View>
        );
    }
}

export default Splash;