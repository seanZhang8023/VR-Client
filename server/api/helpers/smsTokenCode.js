/**
 * Created by DELL on 2017/8/30.
 */

import config from '../../../config'
import request from 'request'
//import logger from '../../../log4js.js'

export let sendSMSTokenCode = (phone,code,callback)=>{
   var url = 'http://sms.2office.net:8080/WebService/sms3.aspx?'
    var qs = {
        account : config.smsTokenCodeTemp.account,
        password : config.smsTokenCodeTemp.password,
        mobile : phone,
        content : config.smsTokenCodeTemp.content+code,
        channel : config.smsTokenCodeTemp.channel,
        smsid : createRandomId(),
        sendType : config.smsTokenCodeTemp.sendType

    }
    //logger.debug(" sendSMSTokenCode optiosn is ", JSON.stringify(qs));
    //logger.debug("sendSMSTokenCode url is", url);
    request.post({url,qs},(err,resp,body)=>{
        console.log('sendSMSTokenCode-----666666666666',body)
        console.log('sendSMSTokenCode-----8888888',typeof(body))
       if (!err && resp.statusCode == 200){
          callback(body)
       }else {
           callback({error:err})
       }
    })
}

//生成唯一编号  当前日期时间+随机生成的6位数的uuid 如：20170831193952987412
export let createRandomId = ()=>{
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    var uuid = [], i;
    var len = 6
    var radix=10
    var date = new Date()
    var month = date.getMonth()+1 >=10 ? date.getMonth()+1 : '0'+(date.getMonth()+1)
    var day = date.getDate() >=10 ? date.getDate() : '0'+date.getDate()
    var hour = date.getHours() >= 10 ? date.getHours() : '0'+date.getHours()
    var minute = date.getMinutes() >= 10 ? date.getMinutes() : '0'+date.getMinutes()
    var second = date.getSeconds() >= 10 ? date.getSeconds() : '0'+date.getSeconds()

    var timer = ''+date.getFullYear()+month+day+hour+minute+second

    for (i = 0; i < len; i++){
        uuid[i] = chars[0 | Math.random()*radix];
    }
    console.log('createSmsid----888888888888888888888888',timer)
    console.log('createSmsid----66666666666666666666666',timer+uuid.join(''))
    return timer+uuid.join('');
}