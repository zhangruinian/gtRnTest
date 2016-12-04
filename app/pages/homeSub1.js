/**
 * Created by 张瑞年 on 2016/11/24.
 */
import React ,{Component} from "react";
import {Text,View} from "react-native";
import commonStyles,{colors} from "../../app/common/globalStyle";
export  default class HomeSub1 extends Component{
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
            <View style={commonStyles.container} {...this.props}>
                <Text
                    onPress={()=>{
                        this.props.navigator.pop()
                    }}
                >home1sub测试页面如何返回??看来要自己做啊,,不会和ionic一样自己生成</Text>
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