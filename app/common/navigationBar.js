/**
 * Created by 张瑞年 on 2016/12/7.
 */
/**
 * Created by 张瑞年 on 2016/11/24.
 */
import React ,{Component,PropTypes} from "react";
import {Text,View,Platform,StyleSheet} from "react-native";
import {Icon} from "react-native-elements";
import commonStyles, {colors,windowWidth} from "../../app/common/globalStyle";
export  default class NavigationBar extends Component{
    constructor(props){
        super(props);
        this.state={

        }
        this.backOnPress=this.backOnPress.bind(this);
    }
    static propTypes = {
        title: PropTypes.string.isRequired
    };
    backOnPress(){
        const {navigator} = this.props;
        navigator.pop();
    }
    render(){
        return(
            <View style={styles.navBar} {...this.props}>
               {Platform.OS === 'android' ?
                    <Icon
                        name="arrow-back"
                        size={16}
                        iconStyle={{marginLeft:5}}
                        color="white"
                        onPress={this.backOnPress}
                        underlayColor="transparent"
                    >
                    </Icon>
                    :
                    <Icon
                        name="chevron-left"
                        size={16}
                        iconStyle={{marginLeft:5}}
                        color="white"
                        onPress={this.backOnPress}
                        underlayColor="transparent"
                    >
                    </Icon>
                }

                <Text style={styles.title}>{this.props.title}</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    navBar: {
        height: (Platform.OS === 'android') ?49 : 69,
        paddingTop: (Platform.OS === 'android') ? 23 : 0,
        width: windowWidth,
        backgroundColor:colors.statusBarColor,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        // alignSelf:""

    },
    title:{
        color: "white",
        fontSize: 16,
        marginLeft: 5,
    }
});