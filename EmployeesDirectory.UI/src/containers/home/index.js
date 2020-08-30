import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeComponent from '../../components/home/index';
import { withStyles } from "@material-ui/core";

const styles = ()=>({
});

class HomeContainer extends Component {
    componentDidMount() {
    }
    render() {
        const { list } = this.props.data;
        console.log(list, "this is the list");
        return (
            <div >
                 <HomeComponent list={list} dispatch={this.props.dispatch}></HomeComponent>   
            </div>

        );
    }
}
function mapPropsToState({ home }) {
    const { data } = home;
    return { data };
}


const mapDispatchToProps = dispatch => ({
    dispatch
})

export default connect(mapPropsToState, mapDispatchToProps)(withStyles(styles)(HomeContainer));

