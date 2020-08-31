import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import Loadable from 'react-loadable'
import loaderGif from '../assests/images/loader.gif'
import store from '../redux/store'
import { updateIntl } from 'react-intl-redux'
import messages_en from '../text/en.json' 

const messages = {
    'en': messages_en
};
const divStyle = {
    margin: 'auto',
    position: 'absolute',
    transform: 'translate(-50%,-50%)',
    top: '50%',
    left: '50%'
}
function Loading() {
    return <div style={divStyle}>
        <img src={loaderGif} alt="loading..." />
    </div>
}

const Home = Loadable({
    loader: () => import('./home'),
    loading: Loading,
});  
class index extends Component {

    componentWillMount() {
        const lang = "en";
        store.dispatch(updateIntl({
            locale: lang,
            messages: messages[lang],
        }))
    }

    render() {
        return (
            <div>
                <Switch > 
                    <Route path="/" exact component={Home} >
                        <Redirect to="/home" exact component={Home}/>
                    </Route> 
                    <Route path="/home" exact component={Home} /> 
                </Switch>
            </div>
        );
    }
}

export default index;