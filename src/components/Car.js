import React, { Component } from 'react';

class Car extends Component {
    render () {
        console.log(this.props);
        //const color = this.props.color
        const { color, brand, model } = this.props
        return (
            <div style = {{ color }}>
                <p>Brand: { brand }</p>
                <p>Model: { model }</p>
                <p>Color: { color }</p>
            </div>
        )
    }
}

export default Car;