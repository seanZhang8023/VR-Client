import QueueAnim from 'rc-queue-anim';
import PropTypes from 'prop-types';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import Icon from 'antd/lib/icon';
import React, {Component} from 'react'
import './style.scss'
import {NewCarContent,PlicyContent,OtherContent,MainWeb} from '../../containers'



const textData = {
    content: 'Taiwan called motorcycle, motor bike [1] or a motorcycle,' +
    ' the motorcycle referred to in the mainland, Hong Kong and Southeast' +
    ' Asia known as motorcycles.',
    title: 'Motorcycle',
};
let dataArray = [
    { image: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' }
];
dataArray = dataArray.map(item => ({ ...item, ...textData }));
class MainWeb2 extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    static defaultProps = {
        className: 'pic-details-demo',
    };

    constructor(props) {
        super(props);
        this.state = {
            picOpen: {},
        };
    }

    onImgClick = (e, i) => {
        const { picOpen } = this.state;
        Object.keys(picOpen).forEach((key) => {
            if (key !== i && picOpen[key]) {
                picOpen[key] = false;
            }
        });
        picOpen[i] = true;
        this.setState({
            picOpen,
        });
    };

    onClose = (e, i) => {
        const { picOpen } = this.state;
        picOpen[i] = false;
        this.setState({
            picOpen,
        });
    };

    onTweenEnd = (i) => {
        const { picOpen } = this.state;
        delete picOpen[i];
        this.setState({
            picOpen,
        });
    };

    getDelay = (e) => {
        const i = e.index + dataArray.length % 4;
        return (i % 4) * 100 + Math.floor(i / 4) * 100 + 200;
    };

    getLiChildren = () => {
        const imgWidth = 1112;
        const imgHeight = 750;
        const imgBoxWidth = 130;
        const imgBoxHeight = 96;
        return dataArray.map((item, i) => {
            const { image, title, content } = item;
            const isEnter = typeof this.state.picOpen[i] === 'boolean';
            const isOpen = this.state.picOpen[i];

            const left = isEnter ? 0 : imgBoxWidth * (i % 4);
            const imgLeft = isEnter ? imgBoxWidth * (i % 4) : 0;
            const isRight = Math.floor((i % 4) / 2);
            const isTop = Math.floor(i / 4);
            let top = isTop ? (isTop - 1) * imgBoxHeight : 0;
            top = isEnter ? top : imgBoxHeight * isTop;
            let imgTop = isTop ? imgBoxHeight : 0;
            imgTop = isEnter ? imgTop : 0;

            const liStyle = isEnter ? { width: '100%', height: 750, zIndex: 1 } : null;
            const liAnimation = isOpen ?
                ({ boxShadow: '0 2px 8px rgba(140, 140, 140, .35)' }) :
                    ({ boxShadow: '0 0px 0px rgba(140, 140, 140, 0)' });
            let aAnimation = isEnter ?
                ({
                    delay: 400,
                    ease: 'easeInOutCubic',
                    width: imgWidth,
                    height: imgHeight,
                    onComplete: this.onTweenEnd.bind(this, i),
                    left: imgBoxWidth * (i % 4),
                    top: isTop ? imgBoxHeight : 0,
                }) : null;
            aAnimation = isOpen ?
                ({
                    ease: 'easeInOutCubic',
                    left: isRight ? (imgBoxWidth * 2) - 10 : 0,
                    width: '100%',
                    height: '100%',
                    top: 0,
                }) : aAnimation;

            // 位置 js 控制；
            return (
                <TweenOne
                    key={i}
                    style={{
                        left,
                        top,
                        ...liStyle,
                    }}
                    component="li"
                    className={isOpen ? 'open' : ''}
                    animation={liAnimation}
                >
                    <TweenOne
                        component="a"
                        onClick={e => this.onImgClick(e, i)}
                        style={{
                            left: imgLeft,
                            top: imgTop,
                        }}
                        animation={aAnimation}
                    >
                        {!isOpen && (
                            <img src={image}  />
                        )}
                    </TweenOne>
                    <TweenOneGroup
                        enter={[
                            {
                                opacity: 0, duration: 0, type: 'from', delay: 400,
                            },
                            { ease: 'easeOutCubic', type: 'from', left: isRight ? '50%' : '0%' },
                        ]}
                        leave={{ ease: 'easeInOutCubic', left: isRight ? '50%' : '0%' }}
                        component={<MainWeb/>}
                    >
                        {isOpen && (
                            <div
                                className={`${this.props.className}-text-wrapper`}
                                key="text"
                                style={{
                                    right: isRight ? '0%' : '100%',
                                }}
                            >
                                <NewCarContent/>
                                <Icon type="cross" onClick={e => this.onClose(e, i)} />
                                <em />
                            </div>
                        )}
                    </TweenOneGroup>
                </TweenOne>
            );
        });
    };

    render() {
        return (
                <div className={`${this.props.className}-wrapper`}>
                        <div className={`${this.props.className}-title`}>
                            <h1 key="h1">云瀚股份</h1>
                            <p key="p">voice 汽车后市场平台</p>
                        </div>
                        <div className={`${this.props.className}-image-wrapper`}>
                            {this.getLiChildren()}
                        </div>
                    <div className={`${this.props.className}-title`}>
                        <h1 key="h1">云瀚股份版权所有</h1>
                        <p key="p">版权所有,仿冒必究</p>
                    </div>
                </div>
        );
    }
}

export default MainWeb2