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
    Modal,
    Picker,
    Switch,
    AsyncStorage
} from "react-native";
import {FormLabel,FormInput} from "react-native-elements";
import commonStyles,{colors,windowWidth}from "../../app/common/globalStyle";
export default class DataPage extends Component{
    constructor(props){
        super(props);
        this.state={
            toggle: false,
            language:"js",
            falseSwitchIsOn:false
        }
    }
    componentDidMount(){
        //目前执行顺序是 先33后31
        let user1 = AsyncStorage.getItem("user",(error,result)=>{
            console.log(result);
        });
        console.log(user1);
    }
    openModal() {
        this.setState({toggle: true});
    }

    closeModal() {
        this.setState({toggle: false});
    }
    render(){


        return(
            <View style={[commonStyles.container,{paddingTop:12}]}>
                <View style={{width:100}}>
                    <Picker

                        prompt="选择要学习的语言"
                        selectedValue={this.state.language}
                        onValueChange={lang => this.setState({language: lang})}
                        mode="dialog"
                        style={{color:'#f00'}}
                    >
                        {/*演示之后发现value和label的区别。有的组件必须设置宽高，flex才能出来*/}
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                        <Picker.Item label="C语言" value="c" />
                        <Picker.Item label="PHP开发" value="php" />
                    </Picker>
                    <Text>{this.state.language}</Text>
                </View>
                <Switch
                    onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
                    style={{marginBottom: 10}}
                    value={this.state.falseSwitchIsOn} />
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
                <Button
                    buttonStyle={{marginTop:10}}
                    title="modalBox test1"
                    raised
                    onPress={() => this.openModal()}
                >
                </Button>
                <Modal
                    onRequestClose={() => {alert("Modal has been closed.")}}
                    animationType="slide"
                    transparent={true}
                    visible={this.state.toggle}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modal}>
                            <Text style={{position:"absolute",top:10,right:10,fontWeight:"bold"}}>X</Text>
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
