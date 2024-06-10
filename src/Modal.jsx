import React, { useState } from 'react';
import Form1 from './assets/Form1';
import Form2 from './assets/Form2';
import Form3 from './assets/Form3';

const Modal = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    emailAddress: '',
    phoneNumber: '',
    visitForeignCountry: false,
    visitReason: '',
    toolsRequired: false,
    toolReason: '',
    visitDate: '',
    startTime: '',
    endTime: '',
    userLocation: '',
    productcategory: '',
    animalWelfareInput: false,
    bioSecurityBreifing: false,
  });



  const handleNext = ((data) => {
    setFormData(prevFormData => ({ ...prevFormData, ...data }));
    setStep(prevStep => prevStep + 1);
  });

  const handleBack = () => {
    setStep(prevStep => prevStep - 1);
  };

  const handleFinalSubmit = (data) => {
    console.log('handle Final Submit:FINAL', data);
    setFormData(prevFormData => ({ ...prevFormData, ...data }));
  };

  return (
    <div className="modal">
      {step === 1 && <Form1 onSubmit={handleNext} defaultValues={formData} />}
      {step === 2 && (
        <div>
          <Form2 onSubmit={handleNext} defaultValues={formData} handleBack={handleBack} />
        </div>
      )}
      {step === 3 && (
        <div>
          <Form3 onSubmit={handleFinalSubmit} defaultValues={formData} handleBack={handleBack} />
        </div>
      )}
    </div>
  );
};

export default Modal;