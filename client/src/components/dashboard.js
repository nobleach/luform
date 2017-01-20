import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Dashboard extends Component {

    constructor(props) {
        super(props);

        let userId = props.params.userId;
        this.props.dashboardLoad(userId);
    }

    renderContent() {
        if(this.props.content) {
            return (
                <p>{this.props.content}</p>
            );
        }
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { content: state.auth.content };
}

export default connect(mapStateToProps, actions)(Dashboard);
