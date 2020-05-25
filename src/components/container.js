import React, { Component } from 'react';
import List from './child/List'
class Container extends Component {
    constructor(props) {
        super(props)
    }
    shouldComponentUpdate() {
        return false;
    }
    componentWillUpdate(){
        console.log('component will update');
    }
    componentDidUpdate(){
        console.log('components did update');
    }
    componentWillReceiveProps(){
        console.log('components will receive props');
    }
    componentWillMount(){
        console.log('compnent will mount')
    }
    componentDidMount() {
        console.log('component did mount');
        // fetch('/repos/hello')
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log('fectData~~~>', data)
        //     });
        // fetch('/repos/home')
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log('fectData~~~>', data)
        //     });
    }
    render() {
        console.log('component render')
        return <div className="page">
            <List />
        </div>
    }
}
export default Container;