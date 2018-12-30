
import './style.css'
import React, {Component} from 'react'
import { Card, Col, Row, Carousel} from 'antd';
import {Link} from 'react-router';
import {NewCarContent,PlicyContent,OtherContent} from '../../components'
const { Meta } = Card;
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
class MainWeb extends Component {
    constructor(props){
        super(props)

    }

    show(type){
        this.props.changeShowType(type)
    }

    render() {
        return (
            <div className="mainWeb-Container">
                <Row gutter={32}>
                    <Col span={8}>
                        <Card
                            hoverable
                            bordered={false}
                            onClick={this.show.bind(this,'car')}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                        <Meta
                                title="新车展示"
                                description="www.yunhan.com"
                            />
                        </Card>
                    </Col>
                    <Col span={8} >
                        <Card
                            hoverable
                            bordered={false}
                            onClick={this.show.bind(this,'plicy')}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta
                                title="保单信息"
                                description="www.yunhan.com"
                            />
                        </Card>
                    </Col>
                    <Col span={8} >
                        <Card
                            hoverable
                            bordered={false}
                            onClick={this.show.bind(this,'other')}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta
                                title="其他推广内容"
                                description="www.yunhan.com"
                            />
                        </Card>
                    </Col>
                </Row>
            </div>
            )




    }








}

export default MainWeb