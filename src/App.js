import React, {Component} from 'react';
import {connect} from "react-redux";
import {WS_SERVER} from "./constants";
import {changeActive} from "./actions/actionCreator";
import './App.sass';

class App extends Component {
    state = {};

    componentDidMount() {
        const ws = new WebSocket(WS_SERVER);

        ws.onmessage = (res) => {
            const {isActive} = JSON.parse(res.data);
            this.props.changeActive(isActive);
        };

        this.setState({ws})
    }

    handleClick = (event) => {
        event.preventDefault();
        const {isActive} = this.props;

        const data = {
            isActive: !isActive
        };

        this.state.ws.send(JSON.stringify(data));
    };

    render() {
        const {isActive} = this.props;

        return (
            <div className='wrapper'>
                <button
                    className={isActive ? '' : 'off'}
                    onClick={this.handleClick}
                >
                    {isActive ? 'ON' : 'OFF'}
                </button>
            </div>
        )
    }
}

export default connect(({isActive, ws}) => ({
    isActive,
    ws
}), {changeActive})(App)
