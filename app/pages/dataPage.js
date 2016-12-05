/**
 * Created by 张瑞年 on 2016/11/22.
 */
import React,{Component} from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    Button,
    TextInput,
    Modal
} from "react-native";
import {FormLabel,FormInput} from "react-native-elements";
import commonStyles,{colors,windowWidth}from "../../app/common/globalStyle";
export default class DataPage extends Component{
    constructor(props){
        super(props);
        this.state={
            toggle: false
        }
    }
    openModal() {
        this.setState({toggle: true});
    }

    closeModal() {
        this.setState({toggle: false});
    }
    render(){
        return(
            <View style={[commonStyles.container]}>
                <FormLabel>name</FormLabel>
                <TextInput
                    style={{width:300}}
                    placeholder="test"
                    keyboardType="numeric"
                          >

                </TextInput>
                <Button
                    title="提交"
                    raised
                    onPress={() => this.openModal()}
                        >
                </Button>
                <Modal
                       animationType="slide"
                       transparent={true}
                       visible={this.state.toggle}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modal}>
                            <Text>垂直居中modal 宽度：{windowWidth}</Text>
                            <Button
                                color={colors.green}
                                title="close"
                                raised
                                onPress={() => this.closeModal()}
                            >
                            </Button>
                        </View>
                    </View>
                </Modal>
            </View>

        )
    }
}
const styles=StyleSheet.create({
    modalContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"rgba(204,204,204,0.8)"
    },
    modal:{
        backgroundColor:"white",
        height:200,
        width:windowWidth,
        justifyContent:"center",
        alignItems:"center"
    }
})
