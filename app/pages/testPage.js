/**
 * Created by 张瑞年 on 2016/12/2.
 */
import React,{Component} from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
} from "react-native";
import ScrollableTabView ,{ScrollableTabBar}from 'react-native-scrollable-tab-view';
import commonStyles,{colors,windowWidth}from "../../app/common/globalStyle";
import TestTab from "../../app/components/testTab";
export default class TestPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            tabNames: ['接口测试','响应测试','判定测试','操作日志']
        };
    }
    render(){
        return(
            // tabBarUnderlineStyle={{backgroundColor: 'white'}} 是bgcolor不是color
            <View style={[commonStyles.container]}>
                <ScrollableTabView
                    style={{marginTop: 20, }}
                    renderTabBar={() => <ScrollableTabBar />}
                    tabBarTextStyle={{fontWeight:"normal"}}
                    tabBarActiveTextColor="white"
                    tabBarInactiveTextColor="rgba(255,255,255,0.5)"
                    tabBarBackgroundColor="#03A9F4"
                    tabBarUnderlineStyle={{backgroundColor: 'white'}}
                >
                    {this.state.tabNames.map((item, i) => {
                        return(
                            <TestTab tabLabel={item} key={i} tabTag={item} />
                        );})
                    }
                </ScrollableTabView>
            </View>

        )
    }
}
const styles=StyleSheet.create({

})
