


//import './style.scss'
import React, {Component} from 'react'
import {Button,Popover} from 'antd';
import {Link} from 'react-router';
import {car_Type,car_Brand} from '../../constants/carInfo'

class CarFooter extends Component {
    constructor(props){
        super(props)

    }


    changeCarBrand(type){
        this.props.onChangeCarBrand(type)
    }

    changeCarType(type){
       this.props.onChangeCarType(type)
    }

    changeCarColor(type){
     this.props.onChangeCarColor(type)
    }
    render() {
        const {carBrand,carType,carColor,showOutSide} = this.props
        let carBrandContent = [],carTypeContent  = [],carColorContent=[]
        car_Brand.map(item=>{
              if(item==carBrand){
                  carBrandContent.push(<span key={item} onClick={this.changeCarBrand.bind(this,item)}><Button type="primary">{item}</Button></span>)
              }else {
                  carBrandContent.push(<span key={item} onClick={this.changeCarBrand.bind(this,item)}><Button>{item}</Button></span>)
              }
        })
        car_Type[carBrand]["carType"].map(item=>{
            if(item==carType){
                carTypeContent.push(<span key={item} onClick={this.changeCarType.bind(this,item)}><Button type="primary">{item}</Button></span>)
            }else {
                carTypeContent.push(<span key={item}><Popover content={"后续推出,敬请关注"}><Button>{item}</Button></Popover></span>)
            }
        })
        if(showOutSide){
            car_Type[carBrand]["carColor"].map(item=>{
                if(item==carColor){
                    carColorContent.push(<span key={item} onClick={this.changeCarColor.bind(this,item)}><Button type="primary">{item}</Button></span>)
                }else {
                    carColorContent.push(<span key={item} onClick={this.changeCarColor.bind(this,item)}><Button>{item}</Button></span>)
                }

            })
        }
        console.log("车辆类型---5555555555555",carBrandContent,carTypeContent)
        return (
            <div>
                <div>{carColorContent}</div>
                <div>{carBrandContent}</div>
                <div>{carTypeContent}</div>
            </div>
        )




    }


}

export default CarFooter