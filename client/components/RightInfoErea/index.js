
import './style.scss'
import React, {Component} from 'react'
import { Collapse,Icon} from 'antd';

const Panel = Collapse.Panel;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;


//新车展示页面  右侧画面
class RightInfoErea extends Component {
    constructor(props){
        super(props)


    }


    render() {
        return (
            <div className="rightInfoErea">
                <h1>预约试驾</h1>
                <Collapse accordion bordered={false} defaultActiveKey="1">
                    <Panel header="宝马4S店    1.6km" key="1" showArrow={false}>
                        <p><Icon type="environment" theme="twoTone" />  成都市锦江区南三环路二段485号</p>
                        <p><Icon type="phone" theme="twoTone" />  13167022956</p>
                        <Collapse bordered={false}>
                            <Panel header={<span><Icon type="car" theme="twoTone"/>  一键预约</span>} key="1" showArrow={false} >
                                <p>{text}</p>
                            </Panel>
                        </Collapse>
                    </Panel>
                    <Panel header="奔驰4S店    1.8km" key="2" showArrow={false}>
                        <p><Icon type="environment" theme="twoTone" />  成都市锦江区南三环路二段485号</p>
                        <p><Icon type="phone" theme="twoTone" />  13167022956</p>
                        <Collapse bordered={false}>
                            <Panel header="一键点击预约" key="1" showArrow={false} >
                                <p>{text}</p>
                            </Panel>
                        </Collapse>
                    </Panel>
                    <Panel header="奥迪4S店    2.1km" key="3" showArrow={false}>
                        <p><Icon type="environment" theme="twoTone" />成都市锦江区南三环路二段485号</p>
                        <p><Icon type="phone" theme="twoTone" />13167022956</p>
                        <Collapse bordered={false}>
                            <Panel header="一键点击预约" key="1" showArrow={false} >
                                <p>{text}</p>
                            </Panel>
                        </Collapse>
                    </Panel>
                    <Panel header="奥迪4S店    2.3km" key="4" showArrow={false}>
                        <p><Icon type="environment" theme="twoTone" />成都市锦江区南三环路二段485号</p>
                        <p><Icon type="phone" theme="twoTone" />13167022956</p>
                        <Collapse bordered={false}>
                            <Panel header="一键点击预约" key="1" showArrow={false} >
                                <p>{text}</p>
                            </Panel>
                        </Collapse>
                    </Panel>
                </Collapse>
            </div>
        )




    }


}

export default RightInfoErea