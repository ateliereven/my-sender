import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from 'react-router-dom';

import formFields from "./formFields";
import { submitSurvey } from '../../actions';

const SurveyFormReview = ({ onCancel, history }) => {
    const formValues = useSelector(state => state.form.surveyForm.values);
    //console.log(formValues);
    const dispatch = useDispatch();

    const reviewFields = formFields.map(({ name, label }) => {
        return <div key={name}>
            <label>{label}</label>
            <div>{formValues[name]}</div>
        </div>
    })
    return (
        <div>
            <h5>Please comfirm your entries</h5>
            {reviewFields}
            <button className="yellow darken-3 white-text btn-flat" onClick={onCancel}>Back</button>
            <button className="green btn-flat white-text right" onClick={() => dispatch(submitSurvey(formValues, history))}>
                Send Survey
                <i className="material-icons right">email</i>
            </button>
        </div>
    )
}

export default withRouter(SurveyFormReview);