

//import './style.css'
import React, {Component} from 'react'
import { Card, Col, Row ,Button} from 'antd';

import {InOrOutSideBtn,Pic360Content,OutSideCar} from '../../components'

//新车展示页面 左侧画面
class VRCarContent extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        var div = document.getElementById('container');
        var PSV = new PhotoSphereViewer({
            // Path to the panorama
            panorama: 'images/360quanjing.jpg',

            container: div,

            time_anim: false,

            navbar: true,

            size: {
                width: '100%',
                height: '80%'
            }

        });


    }
    changePic(type){
        let picUri
        if(type=='outSide'){
            picUri = 'images/360quanjing.jpg'
        }else if(type=='inSide') {
            picUri = 'images/car360.jpg'
        }
        var div = document.getElementById('container');
        var PSV = new PhotoSphereViewer({
            // Path to the panorama
            panorama: picUri,

            container: div,

            time_anim: false,

            navbar: true,

            size: {
                width: '100%',
                height: '80%'
            }

        });
    }
    render() {
        return (
            <div>
                <InOrOutSideBtn changePic={this.changePic.bind(this)}/>
                <div id="container" ></div>
            </div>
        )


    }


}

export default VRCarContent