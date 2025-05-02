import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
//import { inputStyle, buttonStyle } from '../styles';


const StepOne = ({ nextStep, handleData, data }) => {
    return (
        <div className="step animate-slide">
            <h2>Step 1: Name and Email</h2>
        <Formik
            initialValues={{ name: data.name || '', email: data.email || '' }}
            validationSchema={Yup.object({
                name: Yup.string().required('Required'),
                email: Yup.string().email('Invalid email').required('Required'),
            })}
            onSubmit={values => {
                handleData(values);
                nextStep();
            }}
        >
            {({ errors, touched }) => (
                <Form>
                    <Field name="name" placeholder="Name"  />
                    {touched.name && errors.name && <div>{errors.name}</div>}

                    <Field name="email" placeholder="Email"  />
                    {touched.email && errors.email && <div>{errors.email}</div>}

                    <button type="submit" >Next</button>
                </Form>
            )}
            </Formik>
        </div>
    );
};

export default StepOne;