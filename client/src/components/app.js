import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TitleBar from './title-bar';

class App extends Component {
    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div className="container">
                        {this.props.children}
                    </div>
                </MuiThemeProvider>

                <p>Footer here</p>
            </div>
        );
    }
}

export default App;
