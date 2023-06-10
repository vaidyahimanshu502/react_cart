import React from 'react';

class App1 extends React.Component {
    constructor() {
        super();
        console.log('CONSTRUCTOR');
        this.state = {count : 0};
    }
    componentDidMount() {
        console.log('CPMPONENT_DID_MOUNT');
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('COMPONENT_DID_UPDATE');
        // console.log('prevProps', prevProps);
        console.log('prevState', prevState);
        console.log('state', this.state);
        // console.log('props', this.props);

        if(prevState.count === 0 && this.state.count === 1) {
            //actions
            this.setState({count : 100});
        }
    }
    handleClick = () => {
        this.setState((prevState) => {
            return {
                count : prevState.count + 1
            }
        })
    }
    render() {
        return(
            <div className='App' style={style.App}>
               <h1> {this.state.count}</h1>
                <button onClick={this.handleClick}><h1>Count</h1></button>
            </div>
        )
    }
}
export default App1;

const style = {
    App : {
        textAlign : 'center'
    }
}

export class Test extends React.Component {
constructor() {
    super();
    this.state = {
    value: 0
    };
}
shouldComponentUpdate(nextProps,nextState) {
    if (nextState.value > 5) return false;
    return true;
}
componentDidMount() {
    setInterval(() => {
    this.setState((prevState) => {
        return {
        value: prevState.value + 1
        };
    });
    });
}
render() {
    console.log(this.state.value);
    return <div></div>;
}
}


// (1, '202207', 5000),
// (2, '202207', 4000),
// (3, '202207', 8000),
// (4, '202207', 4000),
// (5, '202207', 5500),
// (6, '202207', 4500),
// (7, '202207', 6500),
// (8, '202207', 5800),
// (9, '202207', 5500),
// (10, '202207', 4800),
// (11, '202207', 6000),
// (1,	'202208', 5000),
// (2,	'202208', 4000),
// (3,	'202208', 8000),
// (4,	'202208', 7000),
// (5, '202208', 5500),
// (6, '202208', 4500),
// (7, '202208', 6500),
// (8, '202208', 5800),
// (9, '202208', 5500),
// (10, '202208', 4800),
// (11, '202208', 6000),
// (12, '202208', 5200),
// (3, '202209', 8000),
// (4, '202209', 7000),
// (5, '202209', 5500),
// (6, '202209', 4500),
// (7, '202209', 6500),
// (8, '202209', 5800),
// (9, '202209', 5500),
// (10, '202209', 4800),
// (11, '202209', 6000),
// (12, '202209', 5200),
// (3, '202210', 8000),
// (4, '202210', 7000),
// (5, '202210', 5500),
// (6, '202210', 4500),
// (7, '202210', 6500),
// (8, '202210', 5800),
// (9, '202210', 5500),
// (10, '202210', 4800),
// (11, '202210', 6000),
// (12, '202210', 5200),
// (13, '202210', 7500),
// (3, '202211', 8000),
// (4, '202211', 7000),
// (5, '202211', 5500),
// (6, '202211', 4500),
// (7, '202211', 6500),
// (8, '202211', 5800),
// (9, '202211', 5500),
// (10, '202211', 4800),
// (11, '202211', 6000),
// (12, '202211', 5200),
// (13, '202211', 7500),
// (14, '202211', 7500),
// (15, '202211', 7500),
// (16, '202211', 7500),
// (17, '202211', 7500),
// (3, '202212', 8000),
// (4, '202212', 7000),
// (5, '202212', 5500),
// (6, '202212', 4500),
// (7, '202212', 6500),
// (8, '202212', 5800),
// (9, '202212', 5500),
// (10, '202212', 4800),
// (11, '202212', 6000),
// (12, '202212', 5200),
// (13, '202212', 7500),
// (14, '202212', 7500),
// (15, '202212', 7500),
// (16, '202212', 7500),
// (17, '202212', 7500),
// (3, '202301', 8000),
// (4, '202301', 7000),
// (5, '202301', 6500),
// (6, '202301', 4500),
// (7, '202301', 6500),
// (8, '202301', 5800),
// (9, '202301', 5500),
// (10, '202301', 4800),
// (11, '202301', 6000),
// (12, '202301', 5200),
// (13, '202301', 7500),
// (14, '202301', 7500),
// (15, '202301', 7500),
// (16, '202301', 7500),
// (17, '202301', 7500),
// (5, '202302', 6500),
// (6, '202302', 4500),
// (7, '202302', 6500),
// (8, '202302', 5800),
// (9, '202302', 5500),
// (10, '202302', 4800),
// (11, '202302', 6000),
// (12, '202302', 7200),
// (13, '202302', 7500),
// (14, '202302', 7500),
// (15, '202302', 7500),
// (16, '202302', 7500),
// (17, '202302', 7500),
// (18, '202302', 5700),
// (5, '202303', 6500),
// (6, '202303', 4500),
// (7, '202303', 6500),
// (8, '202303', 5800),
// (9, '202303', 5500),
// (10, '202303', 4800),
// (11, '202303', 6000),
// (12, '202303', 7200),
// (13, '202303', 7500),
// (14, '202303', 7500),
// (15, '202303', 7500),
// (16, '202303', 7500),
// (17, '202303', 7500),
// (18, '202303', 5700),
// (7, '202304', 8500),
// (8, '202304', 6500),
// (9, '202304', 5500),
// (10, '202304', 5500),
// (11, '202304', 6000),
// (12, '202304', 7200),
// (13, '202304', 7500),
// (14, '202304', 7500),
// (15, '202304', 7500),
// (16, '202304', 7500),
// (17, '202304', 7500),
// (18, '202304', 5700),
// (19, '202304', 6200),
// (20, '202304', 5500),
// (21, '202304', 4800),
// (22, '202304', 5800),
// (23, '202304', 4500),
// (24, '202304', 7500),
// (7, '202305', 8500),
// (8, '202305', 6500),
// (9, '202305', 5500),
// (10, '202305', 5500),
// (11, '202305', 6000),
// (12, '202305', 7200),
// (13, '202305', 7500),
// (14, '202305', 7500),
// (15, '202305', 7500),
// (16, '202305', 7500),
// (17, '202305', 7500),
// (18, '202305', 5700),
// (19, '202305', 6200),
// (20, '202305', 5500),
// (21, '202305', 4800),
// (22, '202305', 5800),
// (23, '202305', 4500),
// (24, '202305', 7500),
// (7, '202306', 8500),
// (8, '202306', 6500),
// (9, '202306', 5500),
// (10, '202306', 5500),
// (11, '202306', 6000),
// (12, '202306', 7200),
// (13, '202306', 7500),
// (14, '202306', 7500),
// (15, '202306', 7500),
// (16, '202306', 7500),
// (17, '202306', 7500),
// (18, '202306', 5700),
// (19, '202306', 6200),
// (20, '202306', 5500),
// (21, '202306', 4800),
// (22, '202306', 5800),
// (23, '202306', 4500),
// (24, '202306', 7500)