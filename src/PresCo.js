import React, { Component } from 'react';
import { connect } from 'react-redux';


class PresCo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pressure: 1000
        }
    }
    render() {
        return (
            <div>
                <lable>Pressure: {this.props.store.pressure} [hpa]</lable><br />
                <input
                    type="range" min="970" max="1030" step="1" value={this.props.store.pressure}
                    onChange={((e) => { this.props.onInputChange(e) })} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        store: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onInputChange: (e) => {
            dispatch({ type: 'ChangePressure', pressure: e.target.value })
        }
    }
}

const PresComponent = connect(mapStateToProps, mapDispatchToProps)(PresCo)

export default PresComponent;
