import { ReactElement, FormEvent, useState } from "react";

export function useForm(steps: ReactElement[]) {
  const [currentStep, setCurrentStep] = useState(0);

  function changeStep(index: number, event?: FormEvent) {
    if (event) event.preventDefault();
    if (index < 0 || index >= steps.length) return;
    setCurrentStep(index);
  }

  return {
    changeStep,
    currentComponent: steps[currentStep],
    currentStep,
    isLastStep: currentStep + 1 === steps.length,
  };
}
