import React, { useState } from 'react';
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import StepThree from './components/StepThree';
import Confirmation from './components/Confirmation';
import Dashboard from './components/Dashboard';
import './main.css';

const App = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleData = (newData) => {
        setFormData((prevData) => ({ ...prevData, ...newData }));
    };

    const nextStep = () => setStep((prev) => prev + 1);
    const prevStep = () => setStep((prev) => prev - 1);

    const submitForm = () => {
        setIsSubmitted(true);
    };

    const getProgress = () => {
        return ((step - 1) / 4) * 100;
    };

    return (
        <div>
            {!isSubmitted ? (
                <>
                    <div className="progress-bar">
                        <div className="progress-bar-fill" style={{ width: `${getProgress()}%` }}></div>
                    </div>
                    {step === 1 && <StepOne nextStep={nextStep} handleData={handleData} data={formData} />}
                    {step === 2 && <StepTwo nextStep={nextStep} prevStep={prevStep} handleData={handleData} data={formData} />}
                    {step === 3 && <StepThree nextStep={nextStep} prevStep={prevStep} handleData={handleData} data={formData} />}
                    {step === 4 && <Confirmation prevStep={prevStep} submitForm={submitForm} data={formData} />}
                </>
            ) : (
                <Dashboard data={formData} />
            )}
        </div>
    );
};

export default App;
