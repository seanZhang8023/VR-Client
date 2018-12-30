

//import './style.scss'
import React, {Component} from 'react'
import {Button} from 'antd';
import {Link} from 'react-router';

class InOrOutSideBtn extends Component {
    constructor(props){
        super(props)
    }


    changeType(type){
        this.props.changePic(type)

    }
    render() {
        const {changeShowType,showOutSide} = this.props
        let showBtn
        if(showOutSide){
            showBtn=<Button onClick={this.changeType.bind(this,'inSide')}>内饰</Button>
        }else {
            showBtn=<Button onClick={this.changeType.bind(this,'outSide')}>外观</Button>
        }
        return (
            <div >
                <Button onClick={()=>changeShowType('main')}>Back</Button>
                {showBtn}
            </div>
        )




    }


}

export default InOrOutSideBtn