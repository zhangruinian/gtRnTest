/**
 * Created by 张瑞年 on 2016/11/22.
 */
import React,{Component} from "react";

import {
    StyleSheet,
    Text,
    View,
    Image,
    InteractionManager,
    Alert
} from "react-native";
import {Card,Button} from "react-native-elements";
import commonStyles,{colors} from "../../app/common/globalStyle";
import Util from "../../app/common/utils";
import HomeSub1 from "./homeSub1";
export default class HomePage extends Component{
    constructor(props){
        super(props);
        this.state={
            test:"test"
        };
        this.jump=this.jump.bind(this);
        this.post=this.post.bind(this);
    }
    jump(){
        InteractionManager.runAfterInteractions(() => {
            this.props.navigator.push({
                name: 'HomeSub1',
                component: HomeSub1,
                passProps: {
                    id: 12
                }
            })
        });
    }
    post(){
        // Util.post("account/set-auth-user-info/?token=2ca73fc4ba8f11e6ac9800163e006b26",{nick_name :"哈哈哈"},this.solve);
        alert(123)
        Util.log({nick_name :"哈哈哈",hgai:"32u98tu"})
    }
    solve(data){
        console.log(data)
    }
    render(){
        return(
            <View style={[commonStyles.container,styles.container]}>
                {/*下面的style审查时候出现了，但是样式并没看得出生效*/}
                <Card style={{marginTop:10}}
                    title='HELLO WORLD'
                >
                    {/*<Image source={require('../image/welcome.png')}
                           resizeMode="stretch"
                           style={{width: 230, height: 250}} />*/}
                    <Button
                        small
                        icon={{name: 'keyboard-arrow-left'}}
                        backgroundColor='#03A9F4'
                        title='post测试'
                        onPress={this.post}
                    />
                    <Text style={{marginBottom: 10}}>
                        The idea with React Native Elements is more about component structure than actual design.
                    </Text>
                    <Button
                        small
                        icon={{name: 'keyboard-arrow-right'}}
                        backgroundColor='#03A9F4'
                        title='进入子级01页面'
                        onPress={this.jump}
                    />
                    <Button
                        buttonStyle={{marginTop:5}}
                        small
                        icon={{name: 'keyboard-arrow-left'}}
                        backgroundColor='green'
                        title='进入子级02页面'
                        onPress={()=>{
                            Alert.alert(
                                "我是一个alert弹出提示框",
                                "title:string",
                                [
                                    {text:"确定",onPress:()=>{console.log(123)}},
                                    {text:"取消",onPress:()=>{console.log(123)}},
                                ]
                            )
                        }}
                    />
                </Card>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container:{
        justifyContent:"flex-start"
    }
})