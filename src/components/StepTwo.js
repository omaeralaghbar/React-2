import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
//import { inputStyle, buttonStyle } from '../styles';

const StepTwo = ({ nextStep, prevStep, handleData, data }) => {
    const [hasExperience, setHasExperience] = useState(data.experience === 'yes');

    return (
        <div className="step animate-slide">
            <h2>Step 2: Experience</h2>
        <Formik
            initialValues={{
                experience: data.experience || 'no',
                years: data.years || 0,
            }}
            validationSchema={Yup.object({
                experience: Yup.string().required(),
                years: Yup.number().when('experience', {
                    is: (val) => val === 'yes',
                    then: () => Yup.number().required('Required').min(1),
                    otherwise: () => Yup.number().notRequired().transform(() => 0),
                }),
            })}

            onSubmit={values => {
                if (values.experience === 'no') values.years = 0;
                handleData(values);
                nextStep();
            }}
        >
            {({ values }) => (
                <Form>
                    <label>Do you have experience?</label>
                    <Field as="select" name="experience"  onChange={e => {
                        const val = e.target.value;
                        setHasExperience(val === 'yes');
                        values.experience = val;
                    }}>
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                    </Field>

                    {hasExperience && (
                        <Field
                            name="years"
                            type="number"
                            placeholder="Years of experience"
                           
                        />
                    )}

                    <div>
                        <button type="button" onClick={prevStep} >Back</button>
                        <button type="submit" >Next</button>
                    </div>
                </Form>
            )}
            </Formik>
        </div>
    );
};

export default StepTwo;