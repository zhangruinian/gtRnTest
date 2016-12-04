/**
 * Created by 张瑞年 on 2616/11/22.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import { Tabs, Tab, Icon  } from 'react-native-elements';
import HomePage from '../pages/homePage'
import DataPage from '../pages/dataPage'
import InfoPage from '../pages/infoPage'
import TestPage from '../pages/testPage'
export default class TabNav extends Component {
    constructor (props) {
        super(props);
        this.state = {
            selectedTab: '主页'
        };
        this.changeTab = this.changeTab.bind(this)
    }
    changeTab (selectedTab) {
        this.setState({
            selectedTab
        })
    }
    render () {
        const { selectedTab } = this.state;
        return (
            // 主页title太多，尝试优化修改为中文看什么原因
            <Tabs tabBarStyle={{backgroundColor:"#fff"}}>
                <Tab
                    titleStyle={[styles.titleStyle, {marginTop: -1}]}
                    selectedTitleStyle={[styles.titleSelected, {marginTop: -3, marginBottom: 7}]}
                    selected={selectedTab === '主页'}
                    title={selectedTab === '主页' ? '主页' : "主页"}
                    renderIcon={() => <Icon color="#ccc" name='home' size={26} />}
                    renderSelectedIcon={() => <Icon color="#1ebaed" name='home' size={26} />}
                    onPress={() => this.changeTab('主页')}>
                    <HomePage {...this.props}/>
                </Tab>
                <Tab
                    titleStyle={[styles.titleStyle, {marginTop: -1}]}
                    selectedTitleStyle={[styles.titleSelected, {marginTop: -3, marginBottom: 7}]}
                    selected={selectedTab === '数据'}
                    title={selectedTab === '数据' ? '数据' : "数据"}
                    renderIcon={() => <Icon style={{paddingBottom: 4}} color="#ccc" name='list' size={26} />}
                    renderSelectedIcon={() => <Icon color="#1ebaed" name='list' size={26} />}
                    onPress={() => this.changeTab('数据')}>
                    <DataPage {...this.props}/>
                </Tab>
                <Tab
                    titleStyle={[styles.titleStyle, {marginTop: -1}]}
                    selectedTitleStyle={[styles.titleSelected, {marginTop: -3, marginBottom: 7}]}
                    selected={selectedTab === '信息'}
                    title={selectedTab === '信息' ? '信息' : "信息"}
                    renderIcon={() => <Icon style={{paddingBottom: 4}} color="#ccc" name='info' size={26} />}
                    renderSelectedIcon={() => <Icon color="#1ebaed" name='info' size={26} />}
                    onPress={() => this.changeTab('信息')}>
                    <InfoPage {...this.props}/>
                </Tab>
                <Tab
                    titleStyle={[styles.titleStyle, {marginTop: -1}]}
                    selectedTitleStyle={[styles.titleSelected, {marginTop: -3, marginBottom: 7}]}
                    selected={selectedTab === 'test'}
                    title={selectedTab === 'test' ? 'test' : "test"}
                    renderIcon={() => <Icon style={{paddingBottom: 4}} color="#ccc" name='cloud-circle' size={26} />}
                    renderSelectedIcon={() => <Icon color="#1ebaed" name='cloud-circle' size={26} />}
                    onPress={() => this.changeTab('test')}>
                    <TestPage {...this.props}/>
                </Tab>
            </Tabs>
        )
    }
}
const styles = StyleSheet.create({

});

