
import './style.scss'
import React, {Component} from 'react'
import {VRCarContent,RightInfoErea,Pic360Content,CarFooter} from '../../components'
import {defaultValue} from '../../constants/carInfo'
class NewCarContent extends Component {
    constructor(props){
        super(props)
        this.state = {
            carBrand:"奥迪",
            carType: "A6L",
            carColor:"黑",
            showOutSide:true //默认外观
        }
    }

    onChangeCarType(type){
        this.setState({
            carType:type,

        })
    }

   onChangeCarColor(type){
        this.setState({
            carColor:type
        })
   }

    onChangeCarBrand(type){
        let {carType, carColor} = defaultValue[type]
        this.setState({
            carBrand:type,
            carType,
            carColor
        })
    }

    onChangeInOrOutSide(type){
        let showOutSide
        if(type=='inSide'){
            showOutSide = false
        }else {
            showOutSide = true
        }
        this.setState({
            showOutSide
        })
    }

    render() {
        const {carBrand,carType,carColor,showOutSide} = this.state
        const {changeShowType} = this.props

        return (
            <div className="newCar-container">
                <div className="newCar-container-body">
                    <div className="col-xs-9 newCar-container-vr"><VRCarContent key={carType+carColor+showOutSide} carBrand={carBrand} carType={carType} showOutSide={showOutSide} carColor={carColor} changeShowType={changeShowType} picInOrOutSide={this.onChangeInOrOutSide.bind(this)}/></div>
                    <div className="col-xs-3 newCar-containe-info"><RightInfoErea/></div>
                </div>
                <div className="newCar-container-foot">
                    <CarFooter key={carType+carColor+showOutSide} carBrand={carBrand} carType={carType}  showOutSide={showOutSide} carColor={carColor} onChangeCarType={this.onChangeCarType.bind(this)} onChangeCarColor={this.onChangeCarColor.bind(this)} onChangeCarBrand={this.onChangeCarBrand.bind(this)}/>
                </div>
            </div>

        )




    }








}

export default NewCarContent
