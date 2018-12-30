/**
 * 在线客服button
 * Created by DELL on 2017/5/10.
 */

var TXTwindow = (function (){
    this.angs = {};
    this.winHeight = 630;
    this.winWidth = 390;
    this.isWindow = function closed (){};
    this.randoms = function(){
        return (parseInt(Math.random()*100).toString()+(new Date().getTime()).toString());
    };
    /**window open 窗口坐标方法**/
    this.pos = function(){
        var offWidth = document.documentElement.clientWidth;
        var offHeight = document.documentElement.clientHeight;
        var left = (offWidth - this.winWidth)/2;
        var top = (offHeight - this.winHeight)/2;
        return [left,top];
    };
    function TXT(id){
        return document.getElementById(id);
    }
    /**调试窗口参数**/
    function debug(){
        return this;
    }
    /**className 选择器方法
     * sting (n)
     **/
    function getElementsByClassName(n){
        var el = [],
            _el = document.getElementsByTagName('*');
        for (var i=0; i<_el.length; i++ ) {
            if (_el[i].className == n ) {
                el[el.length] = _el[i];
            }
        }
        return el;
    }
    /**异步载入js**/
    function loadJS(id, fileUrl, callback){
        if (document.getElementById(id)){
            oHead.removeChild(document.getElementById(id));
        }
        var oHead = document.getElementsByTagName('head')[0];
        var oScript = null;
        if(document.getElementById(id) == null){
            oScript = document.createElement('script');
            oScript.type = 'text/javascript';
            oScript.src = fileUrl;
            oScript.id = id;
            if (callback != null) {
                oScript.onload = oScript.onreadystatechange = function(){
                    if (oScript.ready) {
                        return false;
                    }
                    if (!oScript.readyState || oScript.readyState == "loaded" || oScript.readyState == 'complete') {
                        oScript.ready = true;
                        callback();
                    }
                };
            }
            oHead.appendChild(oScript);
        } else {
            if(callback != null){
                callback();
            }
        }
    }
    /**ajax请求**/
    function ajaxRequest(){
        //类的构建定义，主要职责就是新建XMLHttpRequest对象
        var xmlhttprequest;
        var _this = this;
        if(window.XMLHttpRequest){  // 浏览器类型
            xmlhttprequest = new XMLHttpRequest();
            if(xmlhttprequest.overrideMimeType){
                xmlhttprequest.overrideMimeType("text/xml");
            }
        }else if(window.ActiveXObject){
            var activeName=["MSXML2.XMLHTTP","Microsoft.XMLHTTP"];
            for(var i=0;i<activeName.length;i++){
                try{
                    xmlhttprequest=new ActiveXObject(activeName[i]);
                    break;
                }catch(e){}
            }
        }
        //用户发送请求的方法
        if(xmlhttprequest!=undefined && xmlhttprequest!=null){
            xmlhttprequest.onreadystatechange = function() {
                if(xmlhttprequest.readyState == 4){
                    if(xmlhttprequest.status == 200){
                        var responseText = xmlhttprequest.responseText;
                        responseText = eval("(" + responseText + ")");
                        if(responseText.errCode===0){
                            _this.angs.responseText = responseText.result;
                            createHTML(responseText.result);
                        }else{
                            alert(responseText.errCode+responseText.result);
                        }

                    }else{
                        alert("HTTP的响应码：" + xmlhttprequest.status + ",响应码的文本信息：" + xmlhttprequest.statusText);
                    }
                }
            };
            xmlhttprequest.open("GET", _this.angs.host + "api/customerStyle/" + _this.angs.id+ "?r=" + _this.randoms(), true);
            //如果是POST方式，需要设置请求头
            xmlhttprequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            xmlhttprequest.send(null);
        }else{
            alert("XMLHttpRequest对象创建失败，无法发送数据！");
        }
    }
    /**创建CSS风格**/
    function createCss(){
        var css = "\
       <style>\
           .TXT_customer{position:fixed;top:50%;z-index:99999;text-align:center;font-size:13px;margin-top:-70px;background:#fff;overflow:hidden;}\
           .TXT_headimg{height:80px;overflow:hidden;}\
           .TXT_ul{border:1px solid #ccc;border-top:0;}\
           .TXT_list{cursor:pointer;opacity:0.9;filter: Alpha(Opacity=90);margin:0 10px 10px 10px;padding:5px 0;color:#fff;font-size:12px}\
           .TXT_list:hover{opacity:1;filter: Alpha(Opacity=100);}\
           .TXT_title{text-align:center;height:30px;line-height:30px;font-weight:bold;color:#fff;}\
       </style>";
        return css;
    }
    /**创建多客服HTML
     * object (json);
     **/
    function createHTML(json){
        //TXTwindow.loadFang = true;
        if(json.style_type === 1){//float
            var TXTcustomer = document.createElement("div");
            TXTcustomer.id = this.randoms();
            TXTcustomer.setAttribute("class", "TXT_customer");
            TXTcustomer.setAttribute("style", json.location + ":2px;");
            var html = createCss() + "<div class='TXT_title' style='background:" + json.background + "'>"
                + decodeURIComponent(json.title) + "</div><div class='TXT_ul'>";

            html += "<img src='" +this.angs.host+ json.image_url + "' style='cursor:pointer'/>";
            //html += "<div style='background:#"+json.background+"' class='TXT_list'>在线客服</div>"
            TXTcustomer.innerHTML = html;
            document.getElementsByTagName("body")[0].appendChild(TXTcustomer);
            TXT(TXTcustomer.id).getElementsByTagName("img")[0].onclick = function(){
                chat();
            }
        }else if(json.style_type === 2){
            // 在固定位置放入<a href="javascript:;" onclick="TXTwindow.newChat()">点击弹出客服窗口</a>
        }
    }
    /**绑定事件
     * object (json);
     **/
    function clickEvt(json){
        var cName = getElementsByClassName("TXT_list");
        for (var n=0; n<cName.length; n++) {
            cName[n].onclick = function(){
                var id = this.id.replace("TXT_", "");
                chat(id);
            }
        }
    }
    /**打开会话窗口
     * string (id);
     **/
    function chat(id){
        var ps = this.pos();
        var json = this.angs.responseText;
        var service = "";
        if(id){
            service = "&service_id=" + id; //指定客服
        }else{
            service = "";                  //系统分配客服
        }
        if(this.isWindow.closed == undefined || this.isWindow.closed == true){
            this.isWindow = window.open(json.url, "newwindow","height="+this.winHeight+",width="+this.winWidth+",top="+ps[1]+",left="+ps[0]+",toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=no");
        }else{
            this.isWindow.focus();
        }
    }
    /**初始化**/
    function inst(){
        var TXTojbect = TXT("TXT_SCRIPT").src;
        var host = TXTojbect.split("?")[0].split("plugin/")[0];
        TXTojbect = TXTojbect.split("?")[1];
        TXTojbect.angs = TXTojbect;
        TXTojbect = '{"'+ TXTojbect.replace(/\&/g,'","').replace(/\=/g,'":"') + '"}';
        TXTojbect = eval('('+TXTojbect+')'); // 转换为对象
        this.angs = TXTojbect;
        this.angs.host = host;
        ajaxRequest();
    }
    return {
        newChat:function(id){
            chat(id);
            return this;
        },
        init:function(){
            inst();
            return this;
        },
        _debug:function(){
            return debug();
        }
    }
})().init();