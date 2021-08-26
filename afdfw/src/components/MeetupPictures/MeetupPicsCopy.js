import React, { Component } from 'react';
import API from '../../Utils/API'

class EventPics extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pics: [],
            isLoaded: false,
        }
    }

    componentDidMount() {

        fetch({API})
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                pics: json,
            })
        })
    }

    render() {

        let {pics, isLoaded} = this.state;

        if(!isLoaded) {
            return (
                <div>Loading Pics...</div>
            )
        } else {
            return (
                <div className="pics">
                    {pics.map(Math.random)}

                </div>
            );
        }
    }
}

export default EventPics