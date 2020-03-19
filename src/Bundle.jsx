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
                oh yeah! god damn it
            </div>
        );
    }
}

export default Bundle;
