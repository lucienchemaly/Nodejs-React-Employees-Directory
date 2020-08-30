import React, { Component } from 'react';
import Routes from '../../routes'; 
import { history } from '../../redux/store';
import { ConnectedRouter } from 'connected-react-router';
import ScrollToTop from '../../utils/components/scrollToTop'; 
 
class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirected: false
        }
    }
    componentWillMount() {
      
        this.setState({ redirected: true });
    }
    render() {       
        return (
            <div>
                <ConnectedRouter history={history}>
                    <ScrollToTop> 
                            <Routes></Routes>  
                    </ScrollToTop> 
                </ConnectedRouter>
            </div>
        );
    }
}
export default AppContainer;