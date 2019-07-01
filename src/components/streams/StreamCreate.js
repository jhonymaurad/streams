import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';

class StreamCreate extends Component{

    renderError({error, touched}){
        if(touched && error){
            return(
                <div className='ui error message'>
                    <div className='header'>{error}</div>
                </div>
            );
        }

    }

    renderInput = ( {input, label, meta }) => { //need to destructure label
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        //console.log(formProps)
        // return <input onChange={formProps.input.onChange} value={formProps.input.value} />
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete='off'/>
                {this.renderError(meta)}
            </div>
        )
    }

    onSubmit(propsValues){
        console.log(propsValues)
    }

    render(){
        //console.log(this.props)
        return (
            <form className='ui form error' onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name='title' component={this.renderInput} label='Enter Title: ' />
                <Field name='description' component={this.renderInput} label='Enter Description: ' />
            <button className='ui button primary'>Submit</button>
            </form>
        );
    }; 
}

const validate = (formValues) => {
    const errors = {}
    if(!formValues.title){
        errors.title = 'You must input a title'
    }
    if(!formValues.description){
        errors.description = 'You must input a description'
    }
    return errors;

}

export default reduxForm({ form: 'streamCreate', validate: validate})(StreamCreate);