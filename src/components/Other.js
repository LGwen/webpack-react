import React, { Component } from 'react';
import testImg from '../static/images/ll6.jpg';
import testImg2 from '../static/image2/ll6.jpg';
const cStyle = {
    width: '300px',
    height: '300px',
    overflow: 'hidden',
}
const iStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'contain'
}
class Other extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <div className="page">
            <h1>Other Page!</h1>
            <div style={cStyle}>
                <img style={iStyle} src={testImg} />
            </div>
            <div style={cStyle}>
                <img style={iStyle} src={testImg2} />
            </div>
        </div>
    }
}
export default Other;