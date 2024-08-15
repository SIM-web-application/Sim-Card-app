// stores/steps.js
export const useStepStore = () => {
    const currentStep = useState('currentStep', () => 1);
  
    const setStep = (step) => {
      currentStep.value = step;
    };
  
    return {
      currentStep,
      setStep,
    };
  };
  