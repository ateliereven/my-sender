import React from "react";
import { Field, reduxForm } from 'redux-form';
import { Link } from "react-router-dom";

import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmails";
import formFields from './formFields'

const SurveyForm = (props) => {
    const renderFields = () => {
        return formFields.map(({ label, name }) => { 
            return <Field key={name} type="text" component={SurveyField} label={label} name={name} />
        })
    };
    const onSubmit = () => {
        props.onSurveySubmit();
    }
    return (
        <div>
            <form onSubmit={props.handleSubmit(onSubmit)}>
                {renderFields()}
                <Link to="/surveys" className="red btn-flat white-text">Cancel</Link>
                <button className="teal btn-flat right white-text">
                    Next
                    <i className="material-icons right">done</i>
                </button>
            </form>
        </div>
    )
};

const validate = (formValues) => {
    const errors = {};

    errors.recipients = validateEmails(formValues.recipients || '')

    formFields.forEach(({ name, label }) => {
        if (!formValues[name]) {
            errors[name] = `Please enter ${label.toLowerCase()}`
        }
    })
    return errors;
}

export default reduxForm({
    form: 'surveyForm',
    validate,
    destroyOnUnmount: false
})(SurveyForm);