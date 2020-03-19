import React from 'react';

class Bundle extends React.Component {
    componentDidMount() {
        console.log('mounted');
    }

    componentWillUnmount() {
        console.log('will unmount');
    }

    render() {
        return (
            <div>
                WORKS!!!
            </div>
        );
    }
}

export default Bundle;
