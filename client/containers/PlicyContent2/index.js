import './style.scss'
import BannerAnim from 'rc-banner-anim';
import QueueAnim from 'rc-queue-anim';
import { TweenOneGroup } from 'rc-tween-one';
import Icon from 'antd/lib/icon';
import PropTypes from 'prop-types';
import React, {Component} from 'react'
const Element = BannerAnim.Element;
import {PersonInfo,PlicyPlan,FinalPlan} from '../../components'



let dataArray = [
    {
        pic: 'https://zos.alipayobjects.com/rmsportal/ogXcvssYXpECqKG.png',
        map: 'https://zos.alipayobjects.com/rmsportal/HfBaRfhTkeXFwHJ.png',
        color: '#FFF43D',
        background: '#FF12AC',
        content:<PersonInfo/>
    },
    {
        pic: 'https://zos.alipayobjects.com/rmsportal/iCVhrDRFOAJnJgy.png',
        map: 'https://zos.alipayobjects.com/rmsportal/XRfQxYENhzbfZXt.png',
        color: '#',
        background: '#FC1E4F',
        content:<PlicyPlan/>
    },
    {
        pic: 'https://zos.alipayobjects.com/rmsportal/zMswSbPBiQKvARY.png',
        map: 'https://zos.alipayobjects.com/rmsportal/syuaaBOvttVcNks.png',
        color: '#9FDA7F',
        background: '#64D487',
        content:<FinalPlan/>
    },
];

class PlicyContent2 extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    static defaultProps = {
        className: 'details-switch-demo',
    };

    constructor(props) {
        super(props);
        this.state = {
            showInt: 0,
            delay: 0,
            imgAnim: [
                { translateX: [0, 300], opacity: [1, 0] },
                { translateX: [0, -300], opacity: [1, 0] },
            ],
        };
        this.oneEnter = false;
    }

    onChange = () => {
        if (!this.oneEnter) {
            this.setState({ delay: 300 });
            this.oneEnter = true;
        }
    }

    onLeft = () => {
        let showInt = this.state.showInt;
        showInt -= 1;
        const imgAnim = [
            { translateX: [0, -300], opacity: [1, 0] },
            { translateX: [0, 300], opacity: [1, 0] },
        ];
        if (showInt <= 0) {
            showInt = 0;
        }
        this.setState({ showInt, imgAnim });
        this.bannerImg.prev();
        this.bannerText.prev();
    };

    onRight = () => {
        let showInt = this.state.showInt;
        const imgAnim = [
            { translateX: [0, 300], opacity: [1, 0] },
            { translateX: [0, -300], opacity: [1, 0] },
        ];
        showInt += 1;
        if (showInt > dataArray.length - 1) {
            showInt = dataArray.length - 1;
        }
        this.setState({ showInt, imgAnim });
        this.bannerImg.next();
        this.bannerText.next();
    };

    getDuration = (e) => {
        if (e.key === 'map') {
            return 800;
        }
        return 1000;
    };

    render() {
        const {changeShowType} = this.props
        const imgChildren = dataArray.map((item, i) => (
            <Element key={i} style={{ background: item.color }} leaveChildHide>
                <QueueAnim
                    animConfig={this.state.imgAnim}
                    duration={this.getDuration}
                    delay={[!i ? this.state.delay : 300, 0]}
                    ease={['easeOutCubic', 'easeInQuad']}
                    key="img-wrapper"
                >
                    <div className={`${this.props.className}-map map${i}`} key="map">
                        <img src={item.map} width="100%" />
                    </div>
                    <div className={`${this.props.className}-pic pic${i}`} key="pic">
                        <img src={item.pic} width="100%" />
                    </div>
                </QueueAnim>
            </Element>));
        const textChildren = dataArray.map((item, i) => {
            const {content} = item;
            return (<Element key={i}>
                <QueueAnim type="bottom" duration={1000} delay={[!i ? this.state.delay + 500 : 800, 0]}>
                    {content}
                </QueueAnim>
            </Element>);
        });
        return (
            <div>
                <div><button>back</button></div>
            <div
            className={`${this.props.className}-wrapper`}
            style={{ background: dataArray[this.state.showInt].background }}
        >
            <div className={this.props.className}>
                <BannerAnim
                    prefixCls={`${this.props.className}-img-wrapper`}
                    sync
                    type="across"
                    duration={1000}
                    ease="easeInOutExpo"
                    arrow={false}
                    thumb={false}
                    ref={(c) => { this.bannerImg = c; }}
                    onChange={this.onChange}
                    dragPlay={false}
                >
                    {imgChildren}
                </BannerAnim>
                <BannerAnim
                    prefixCls={`${this.props.className}-text-wrapper`}
                    sync
                    type="across"
                    duration={1000}
                    arrow={false}
                    thumb={false}
                    ease="easeInOutExpo"
                    ref={(c) => { this.bannerText = c; }}
                    dragPlay={false}
                >
                    {textChildren}
                </BannerAnim>
                <TweenOneGroup enter={{ opacity: 0, type: 'from' }} leave={{ opacity: 0 }}>
                    {this.state.showInt && <Icon type="left" key="left" onClick={this.onLeft} />}
                    {this.state.showInt < dataArray.length - 1 && <Icon type="right" key="right" onClick={this.onRight} />}
                </TweenOneGroup>
            </div>
            </div>
        </div>);
    }
}

export default PlicyContent2
