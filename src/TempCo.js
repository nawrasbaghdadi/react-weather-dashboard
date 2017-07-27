import React, { Component } from 'react';
import { connect } from 'react-redux';


class TempCo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: 15
        }
    }
    render() {
        return (
            <div>
                <lable>Temperature: {this.props.todos.temperature} [&#8451;]</lable><br />
                <input
                    type="range" min="10" max="35" step="1" value={this.props.todos.temperature}
                    onChange={((e) => { this.props.onInputChange(e) })} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onInputChange: (e) => {
            dispatch({ type: 'changeTemp', temperature: e.target.value })
        }
    }
}

const TempCompnent = connect(mapStateToProps, mapDispatchToProps)(TempCo)

export default TempCompnent;
