import React, {Component} from 'react'
import './style.scss'

class PosterPage extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    login(){
        this.props.changeShowType('login')
    }

    render(){
        return(
            <div className="Poster-page">
                <h3>云瀚股份</h3>
                <h1>Voive 平台</h1>
                <button onClick={this.login.bind(this)}>点击进入</button>
            </div>
        )
    }
}

export default PosterPage