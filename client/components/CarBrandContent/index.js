import './style.scss'
import React, {Component} from 'react'
import {InOrOutSideBtn} from '../../components'
import Icon from 'antd/lib/icon';
class CarBrandContent extends Component {
    constructor(props){
        super(props)
        this.state = {

        }

    }




    render() {


        return (
            <div id="gal">
                <nav className="galnav">
                    <ul>
                        <li>><button name="btn" value="three"/><label for="btn"></label>
                            <figure>
                                <img src="images/apple/05_Nicolas_Quod.jpg" />
                            </figure>
                        </li>
                        <li>
                            <figure className="entypo-forward">
                                <InOrOutSideBtn/>
                            </figure>
                        </li>
                        <li><input type="radio" name="btn" value="three" /><button>第一份</button> <label for="btn">
                        </label>
                            <figure className="entypo-forward">
                                <img src="images/apple/05_Nicolas_Quod.jpg" />

                            </figure>
                        </li>
                        <li><input type="radio" name="btn" value="four" /> <label for="btn">
                        </label>
                            <figure className="entypo-forward">
                                <img src="images/apple/04_Joffrey.jpg" />
                            </figure>
                        </li>
                        <li><input type="radio" name="btn" value="five" /> <label for="btn">
                        </label>
                            <figure className="entypo-forward">
                                <img src="images/apple/09_Jared_Long.jpg" />
                                <figcaption>
                                    <nav role='navigation'>
                                        <ul>
                                            <li>
                                                <a href="http://sc.chinaz.com/" className="entypo-dribbble">
                                                </a></li>
                                            <li>
                                                <a href="http://sc.chinaz.com/" className="entypo-behance">
                                                </a></li>
                                        </ul>
                                    </nav>
                                </figcaption>
                            </figure>
                        </li>
                        <li><input type="radio" name="btn" value="six" /> <label for="btn">
                        </label>
                            <figure className="entypo-forward">
                                <img src="images/apple/02_Charles_Treece.jpg" />
                                <figcaption>
                                    <nav role='navigation'>
                                        <ul>
                                            <li>
                                                <a href="http://sc.chinaz.com/" className="entypo-dribbble">
                                                </a></li>
                                            <li>
                                                <a href="http://sc.chinaz.com/" className="entypo-twitter">
                                                </a></li>
                                        </ul>
                                    </nav>
                                </figcaption>
                            </figure>
                        </li>
                    </ul>
                </nav>
            </div>
        )




    }





}


export default CarBrandContent