
import React from 'react';
import ReactDOM from 'react-dom';

import WelcomeComponent from './components/welcome';

class MyReactComponent extends React.Component {
    constructor() {
        super();
        this.attrs = {
            name: 'CodeSpace'
        };
    }
    
	render() {
		return <div>
            <h1>My new React project</h1>
            <WelcomeComponent name={this.attrs.name} />
        </div>;
	}
}

ReactDOM.render(<MyReactComponent />, document.getElementById('app-root'));