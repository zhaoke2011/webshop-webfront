/**
 * Created by Administrator on 2015/11/10.
 */
//读取配置文件
$.getJSON("../config/config.json",function(data){
    //存储，IE6~7 cookie 其他浏览器HTML5本地存储
    if (window.localStorage) {
        localStorage.setItem("urlConfig", JSON.stringify(data));
    } else {
        Cookie.write("urlConfig", JSON.stringify(data));
    }
});

//获取后端请求地址
var getUri = function(uriKey){
    return JSON.parse(window.localStorage? localStorage.getItem("urlConfig"): Cookie.read("urlConfig"))[uriKey];
};

var setLocalValue = function(itemName,itemValue){
    //存储，IE6~7 cookie 其他浏览器HTML5本地存储
    if (window.localStorage) {
        localStorage.setItem(itemName, JSON.stringify(itemValue));
    } else {
        Cookie.write(itemName, JSON.stringify(itemValue));
    }
}

var getLocalValue = function(item,key){
    if(key==undefined) {
        return JSON.parse(window.localStorage ? localStorage.getItem(item) : Cookie.read(item));
    }else{
        return JSON.parse(window.localStorage ? localStorage.getItem(item) : Cookie.read(item))[key];
    }
}

//统一的post查询接口
var ajaxPostFun = function (url, data, successFun, errorFun, str) {
    //处理参数中值为"null"或者"undefined"的情况,直接替换为空
    parVals = data.split('&');
    data = "";
    for(var i=0;i<parVals.length;i++){
        data += parVals[i].replace('undefined','').replace('null','')+'&';
    }
    $.ajax({
        url: url,
        type: "post",
        dataType: "json",
        /*xhrFields: {
            withCredentials: true
        },*/
        data: data || {},
        success: function (res) {
            console.log(str + "返回成功", res);
            if ("0000000" != res.rtnCode) {
                //alert(res.msg);
                //如果返回不是0000000，就不能继续往下走了
                if (errorFun) {
                    errorFun(res)
                }
            }
            else {
                successFun(res)
            }
        },
        error: function (res) {
            console.log(str + "返回失败", res);
            if (errorFun) {
                errorFun(res)
            }
            else {
            }
        }
    })
};

//统一的get查询接口
var ajaxGetFun = function (url, data, successFun, errorFun, str) {
    //处理参数中值为"null"或者"undefined"的情况,直接替换为空
    parVals = data.split('&');
    data = "";
    for(var i=0;i<parVals.length;i++){
        data += parVals[i].replace('undefined','').replace('null','')+'&';
    }
    $.ajax({
        url: url,
        type: "get",
        dataType: "json",
        /*xhrFields: {
         withCredentials: true
         },*/
        data: data || {},
        success: function (res) {
            console.log(str + "返回成功", res);
            if ("0000000" != res.rtnCode) {
                //alert(res.msg);
                //如果返回不是0000000，就不能继续往下走了
                if (errorFun) {
                    errorFun(res)
                }
            }
            else {
                successFun(res)
            }
        },
        error: function (res) {
            console.log(str + "返回失败", res);
            if (errorFun) {
                errorFun(res)
            }
            else {
                //alert("接口查询返回失败");
            }
        }
    })
};

//获取url地址栏参数
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)return unescape(r[2]);
    return null;
}
//时间戳转时间
function formatDate(tm) {
    return new Date(tm).toLocaleString().replace(/\//g, "-").slice(0,10);
}



