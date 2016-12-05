/**
 * Created by 张瑞年 on 2016/11/23.
 */
let baseUrl="http://api.apiapp.cc/";
const Util = {
    /**
     * http get 请求简单封装
     * @param url 请求的URL
     * @param params 请求参数
     * @param successCallback 请求成功回调
     * @param failCallback 请求失败回调
     */
    get: (url,params,successCallback) => {
        let query = Object.keys(params)
            .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
            .join('&');
        fetch(baseUrl+url+"?"+query)
            .then((response) => response.json())
            .then((result) => {
                successCallback(result);
            })
            .catch((err) => {
                console.log(err);
            });
    },

    /**
     * http post 请求简单封装
     * @param url 请求的URL
     * @param data post的数据
     * @param successCallback 请求成功回调
     * post两种方法，rn中联调测试
     */

    post: (url, data, successCallback) => {
        let fetchOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        fetch(baseUrl+url, fetchOptions)
            .then((response) => response.json())
            .then((result) => {
                successCallback(result);
            })
            .catch((err) => {
                console.log(err)
            });
    },
    /**
     * 日志打印
     * 方便打印json,不用console.log方式
     * @param obj
     */
    log: (obj) => {
        let description = "";
        for(let i in obj){
            let property = obj[i];
            description += i + " = " + property + "\n";
        }
        alert(description);
    },
};

export default Util;