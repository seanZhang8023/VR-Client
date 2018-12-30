import React, {Component, PropTypes} from 'react';
import { Form, Input, Button,DatePicker} from 'antd';
import moment from 'moment'
import './style.scss'
class PersonInfo extends Component{
    constructor(props){
        super(props)
        this.state={
            birthday:  moment(),
        }
    }

    dateChange(date) {
        this.setState({
            birthday: date
        });
    }
    render(){
        return (
            <div className="person-info">
                <div className="person-info-div">
                    <label className="person-info-lable">姓名：</label>
                    <input defaultValue={'张三'} className="person-info-input"/>
                </div>
                <div className="person-info-div">
                    <label className="person-info-lable">手机号：</label>
                    <input defaultValue={'13167022956'} className="person-info-input"/>
                </div>
                <div className="person-info-div">
                    <label className="person-info-lable">选择到店时间：</label>
                    <DatePicker defaultValue={moment('2019/01/01', 'YYYY-MM-DD')} format={'YYYY-MM-DD'} className="person-info-input"/>
                </div>
            </div>
        )

    }
}

export default PersonInfo