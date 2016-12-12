/**
 * Created by 张瑞年 on 2016/11/24.
 */
import React ,{Component} from "react";
import {Text,View} from "react-native";
import commonStyles,{colors} from "../../app/common/globalStyle";
import NavigationBar from "../../app/common/navigationBar";
export  default class HomeSub extends Component{
    constructor(props){
        super(props);
        this.state={
            id:null
        }
    }
    static defaultProps={
        text:"test"
    }
    render(){
        return(
            <View style={[commonStyles.container,{paddingTop:12}]} {...this.props}>
                <NavigationBar title="子页面1" {...this.props}/>
                <Text
                    onPress={()=>{
                        this.props.navigator.pop()
                    }}
                >home1sub测试页面返回????!!</Text>
                <Text>{this.state.id}</Text>
                <Text>{this.props.text}</Text>
            </View>
        )
    }
    componentDidMount(){
        this.setState({
            id:this.props.id
        });
    }

}