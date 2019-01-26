import React, {Component} from 'react';
import {connect} from 'react-redux';

class Details extends  Component{
    render() {
        if(!this.props.car){
            return(<p>Выберите автомобиль...</p>)
        }
        return(
            <div>
                <h2>{this.props.car.name}</h2>
                <p><b>Speed: </b>{this.props.car.speed}</p>
                <p><b>Weight: </b>{this.props.car.weight}</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return{
        car: state.active
    };
}

export default connect(mapStateToProps)(Details);