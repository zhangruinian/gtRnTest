/**
 * Created by 张瑞年 on 2016/12/2.
 */
/**
 * Created by wangdi on 6/11/16.
 */
'use strict';

import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView, RefreshControl,WebView} from 'react-native';
import commonStyles,{colors,windowWidth}from "../../app/common/globalStyle";

export default class TestTab extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        let {tabTag} = this.props;
            return (
               /* <View style={commonStyles.container}>
                   <Text>
                        {tabTag}
                    </Text>
                </View>*/

           //  source={{uri: 'https://github.com/facebook/react-native'}}
                <WebView
                    source={{uri: 'https://www.baidu.com/'}}
                    style={{marginTop: 5}}
                />
            );
    }

    // 父组件 子组件传递属性数据
}