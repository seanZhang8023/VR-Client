
import './style.css'
import React, {Component} from 'react'
import { Card, Col, Row ,Button,Icon } from 'antd';
import {InOrOutSideBtn,Pic360Content,OutSideCar} from '../../components'

//新车展示页面 左侧画面
class VRCarContent extends Component {
    constructor(props){
        super(props)
        this.state = {
            showInSide:false,//是否显示车辆内饰, 默认显示车辆外观
        }

    }

    requestFullScreen(element) {
    var de = document.getElementById('container2')
    if (de.requestFullscreen) {
        de.requestFullscreen();
    } else if (de.mozRequestFullScreen) {
        de.mozRequestFullScreen();
    } else if (de.webkitRequestFullScreen) {
        de.webkitRequestFullScreen();
    }
}
    //退出全屏
    exitFullscreen(element) {
    var de = document.getElementById('container2')
    if (de.exitFullscreen) {
        de.exitFullscreen();
    } else if (de.mozCancelFullScreen) {
        de.mozCancelFullScreen();
    } else if (de.webkitCancelFullScreen) {
        de.webkitCancelFullScreen();
    }
}

    componentDidMount(){
        const {carBrand,carType,carColor,showOutSide} = this.props
        console.log('进入组件=== 11111111111111111')
        if(showOutSide){  //外观
            document.getElementById('container1').style.display = ""
            let path = 'images/audiA6/';
            if(carType=="X5"){
                if(carColor=="白"){
                    path = 'images/X5/白/';
                }else if(carColor=="蓝"){
                    path = 'images/X5/蓝/';
                }
            }
            pdt360DegViewer('container1', 36, path, 'png', false, false, true, false, false, false, false);
        }else { //内饰
            let src="carInside/benz/index.html"
            if(carType=="X5"){
                src="carInside/"+carType+"/index.html"
                console.log('内饰图片----33333333333333333',src)
            }
            document.getElementById('container2').src = src
            document.getElementById('container2').style.display = ""
        }

    }


    render() {
        const {carBrand,carType,carColor,changeShowType,picInOrOutSide,showOutSide} = this.props
        return (
            <div className="VR-content" id="VR-content">
            <InOrOutSideBtn changePic={picInOrOutSide} className="in-out-btn" changeShowType={changeShowType} showOutSide={showOutSide}/>
            <div id="container1" className="VR-content-container" style={{display:'none'}}></div>
            <iframe id="container2" width="1300px"
                    height="750px"
                    allowFullScreen
                    style={{display:'none',border:0}}/>
            <Icon type="fullscreen" onClick={this.requestFullScreen.bind(this)}/>
            <Icon type="fullscreen-exit" onClick={this.exitFullscreen.bind(this)}/>
            </div>
        )


    }


}

export default VRCarContent