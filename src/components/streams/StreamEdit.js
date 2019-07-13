import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {

    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit = (formValues) => {
        console.log(formValues);

    }

    render(){
        //console.log(this.props);
        if(!this.props.stream){
            return <div>Loading...</div>;
        }
        
        return (
            <div>
                <h3>EDIT STREAM</h3>
                <StreamForm 
                    onSubmit={this.onSubmit}
                    // DIFFERENT WAYS TO DISPLAY INITIAL VALUES
                    initialValues={_.pick(this.props.stream, 'title', 'description')}
                    //initialValues={this.props.stream}
                    //initialValues={{title: 'edit me', description: 'change me too'}}   
                />
            </div>
        )

    }
   
}

const mapStateToProps = (state, ownProps) => {
    //console.log(ownProps);
    return {stream: state.streams[ownProps.match.params.id]}
}


export default connect (mapStateToProps, { fetchStream, editStream })(StreamEdit);