
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const StepThreeSchema = Yup.object().shape({
    age: Yup.number()
        .required('Age is required')
        .min(1, 'Age must be at least 1')
        .max(65, 'Age must be below 65'),
    city: Yup.string().required('City is required')
});

const StepThree = ({ nextStep, prevStep, handleData, data }) => {
    return (
        <div className="step animate-slide">
            <h2>Step 3: Additional Information</h2>
            <Formik
                initialValues={{
                    age: data.age || '',
                    city: data.city || '',
                }}
                validationSchema={StepThreeSchema}
                onSubmit={(values) => {
                    handleData(values);
                    nextStep();
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div>
                            <label>Age</label>
                            <Field type="number" name="age" />
                            {errors.age && touched.age && <div className="error">{errors.age}</div>}
                        </div>

                        <div>
                            <label>City</label>
                            <Field type="text" name="city" />
                            {errors.city && touched.city && <div className="error">{errors.city}</div>}
                        </div>

                        <div className="form-navigation">
                            <button type="button" onClick={prevStep}>Back</button>
                            <button type="submit">Next</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default StepThree;