import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeComponent from '../../components/home/index';
import { withStyles } from "@material-ui/core";

const styles = ()=>({
});

class HomeContainer extends Component {
    render() {
        const { home } = this.props;
        return (
            <div >
                <HomeComponent list={home} dispatch={this.props.dispatch}></HomeComponent>                  
            </div>
        );
    }
}
function mapPropsToState({ home }) {
    return { home };
}

const mapDispatchToProps = dispatch => ({
    dispatch
})

export default connect(mapPropsToState, mapDispatchToProps)(withStyles(styles)(HomeContainer));

