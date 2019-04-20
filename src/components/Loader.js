import React, {Component} from 'react';

class Loader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            props: props,
            params: props.match,
            dots: ''
        };
    }
    componentDidMount() {

        let dots = '.';

        setInterval(() => {

            if (dots.length < 3) {
                dots += '.';
            } else {
                dots = '';
            }
            this.tick(dots)
        }, 500);
    }

    tick(dots) {
        this.setState({
            dots: dots
        });
    }

    render() {


        return (
            <div>{'Loading' + this.state.dots}</div>
        )

    }

}

export default Loader;
