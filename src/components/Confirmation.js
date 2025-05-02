import React from 'react';

const Confirmation = ({ prevStep, submitForm, data }) => {
    return (
        <div className="step animate-slide">
            <h2>Confirm Your Details</h2>
            <table className="confirmation-table">
                <tbody>
                    <tr>
                        <td><strong>Name:</strong></td>
                        <td>{data.name}</td>
                    </tr>
                    <tr>
                        <td><strong>Email:</strong></td>
                        <td>{data.email}</td>
                    </tr>
                    <tr>
                        <td><strong>Age:</strong></td>
                        <td>{data.age}</td>
                    </tr>
                    <tr>
                        <td><strong>City:</strong></td>
                        <td>{data.city}</td>
                    </tr>
                </tbody>
            </table>

            <div className="form-navigation">
                <button onClick={prevStep}>Back</button>
                <button onClick={submitForm}>Submit</button>
            </div>
        </div>
    );
};

export default Confirmation;