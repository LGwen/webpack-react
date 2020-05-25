import React, { Component } from 'react';
class LoadingComponents extends Component {
    constructor(props) {
        super(props)
    }
    shouldComponentUpdate() {
        return false;
    }
    componentDidMount() {

    }
    render() {
        return <div>Loading...</div>;
    }
}
export default LoadingComponents;