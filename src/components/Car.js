import React, { Component } from 'react';

class Car extends Component {
    render () {
        console.log(this.props);
        return (
            <div style = {{ color: this.props.color}}>
                <p>Brand: { this.props.brand }</p>
                <p>Model: { this.props.model }</p>
                <p>Color: { this.props.color }</p>
            </div>
        )
    }
}

export default Car;