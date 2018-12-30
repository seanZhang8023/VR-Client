import { Button } from 'antd';
import React, {Component} from 'react'
import './style.scss'
import {MainWeb,NewCarContent,PlicyContent2,OtherContent,PosterPage} from '../../containers'
class MainWeb3 extends Component{

    constructor(props){
        super(props)
        this.state = {
            showFirst:true,
            showMian:true,
            showPlicy:false,
            showCar:false,
            showOther:false
        }
    }
    show(type){
        if(type=='car'){
            this.setState({
                showFirst:false,
                showMian:false,
                showPlicy:false,
                showCar:true,
                showOther:false
            })
        }else if(type=='plicy'){
            this.setState({
                showFirst:false,
                showMian:false,
                showPlicy:true,
                showCar:false,
                showOther:false
            })
        }else  if(type=='other'){
            this.setState({
                showFirst:false,
                showMian:false,
                showPlicy:false,
                showCar:false,
                showOther:true
            })
        }else {
            this.setState({
                showFirst:false,
                showMian:true,
                showPlicy:false,
                showCar:false,
                showOther:false
            })
        }


    }

    render() {
        const {showMian,showCar,showPlicy,showOther} = this.state
        const page = showMian ? <MainWeb changeShowType={this.show.bind(this)}/> : showCar ? <NewCarContent changeShowType={this.show.bind(this)}/> : showPlicy ? <PlicyContent2 changeShowType={this.show.bind(this)}/> : showOther ? <OtherContent changeShowType={this.show.bind(this)}/> : null

        return (
            <div className="mainContainer-body">
              {page}
            </div>
        );
    }
}

export default MainWeb3