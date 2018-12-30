
//import './style.scss'
import React, {Component} from 'react'
import { Card, Col, Row } from 'antd';
const { Meta } = Card;


class OtherContent extends Component {
    constructor(props){
        super(props)


    }


    render() {
        return (
            <div className="mainWeb-Container" key="other">
                <Row gutter={32}>
                    <Col span={8}>
                        <Card
                            hoverable
                            bordered={false}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta
                                title="广告位"
                                description="www.yunhan.com"
                            />
                        </Card>
                    </Col>
                    <Col span={8} >
                        <Card
                            hoverable
                            bordered={false}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta
                                title="广告位"
                                description="www.yunhan.com"
                            />
                        </Card>
                    </Col>
                    <Col span={8} >
                        <Card
                            hoverable
                            bordered={false}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta
                                title="广告位"
                                description="www.yunhan.com"
                            />
                        </Card>
                    </Col>
                </Row>
            </div>
        )




    }


}

export default OtherContent