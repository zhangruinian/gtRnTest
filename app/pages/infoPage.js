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
    ActivityIndicator,
    RefreshControl
} from "react-native";
import {List,ListItem} from "react-native-elements";
import commonStyles,{colors} from "../../app/common/globalStyle";
import Util from "../../app/common/utils";
export default class InfoPage extends Component{

    constructor(props) {
        super(props);
        this.state = {
            isRefreshing:false,
            waitShow:true,
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
        };
        this.solveData=this.solveData.bind(this);
    }
    static defaultProps={
        // currentUrl:"admin/read-api-call-counts/",
    };
    solveData(data){
        this.setState({
            dataSource:this.state.dataSource.cloneWithRows(data.page_data),
        });
    }
    componentDidMount(){
        //这样更方便，原生js一样，不要过多受angular2思维影响，不一样。。
        Util.get(currentUrl,{page_idx:1,token:"f8af7cb0c00e11e6a1e900163e006b26"},this.solveData);
        this.state.waitShow=false;
    }
    render() {
        return (
            <View style={{flex: 1, paddingTop: 22}}>

                {/*看源码各种都可以学习 三目运算符比较简洁明了~*/}
                {!this.state.waitShow ? null:(
                    <ActivityIndicator
                        size="large"到
                        style={{alignItems: 'center',justifyContent: 'center',flex:1}}
                        color={"green"}/>
                )}
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    refreshControl={
                      <RefreshControl
                        refreshing={this.state.isRefreshing}
                        onRefresh={()=>{this.setState({isRefreshing:true})}}
                        colors={['red','#ffd500','#0080ff','#99e600']}
                        tintColor='rgb(22,131,251)'
                        title="Loading..."
                        titleColor='rgb(22,131,251)'
                      /> }
                />
            </View>
        );
        // }

    }

    renderRow(rowData,sectionID){
        return(
            <ListItem
                key={sectionID}
                title={rowData.api_name}
                subtitle={rowData.counts.toString()}
            />
        )
    }

}
