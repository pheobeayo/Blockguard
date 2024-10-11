"use client";
import { useState } from "react";
import StepOne from "./_components/StepOne";
import StepTwo from "./_components/StepTwo";
import StepThree from "./_components/StepThree";

const CreateEventPage = () => {
  // State to track the current step
  const [currentStep, setCurrentStep] = useState(1);

  // Function to display the current step content
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <StepOne setCurrentStep={setCurrentStep} />;
      case 2:
        return <StepTwo setCurrentStep={setCurrentStep} />;
      case 3:
        return <StepThree setCurrentStep={setCurrentStep} />;
      default:
        return null;
    }
  };
  return (
    <>
      {/* Render the content based on the current step */}
      {renderStepContent()}
    </>
  );
};

export default CreateEventPage;
