import { useState } from "react";
import UserForm from "./components/UserForm";
import ReviewForm from "./components/ReviewForm";
import Steps from "./components/Steps";

import { GrFormNext, GrFormPrevious } from "react-icons/gr";

type FormFields = {
  name: string;
  email: string;
  review: string;
  comment: string;
};

const formTemplate: FormFields = {
  name: "",
  email: "",
  review: "",
  comment: "",
};

function App() {
  const [data, setData] = useState(formTemplate);
  const [currentStep, setCurrentStep] = useState(0);

  const updateFieldHandler = (key: string, value: string) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };

  const formComponents = [
    <UserForm data={data} updateFieldHandler={updateFieldHandler} />,
    <ReviewForm data={data} updateFieldHandler={updateFieldHandler} />,
  ];

  const isLastStep = currentStep === formComponents.length - 1;

  const changeStep = (step: number) => {
    if (step >= 0 && step < formComponents.length) {
      setCurrentStep(step);
    }
  };

  return (
    <div className="app">
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>
          Ficamos felizes com a sua compra. Utilize o formulário abaixo para
          avaliar o produto.
        </p>
      </div>
      <div className="form-container">
        <Steps currentStep={currentStep} />
        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (!isLastStep) {
              changeStep(currentStep + 1);
            }
          }}
        >
          <div className="inputs-container">{formComponents[currentStep]}</div>
          <div className="actions">
            <button
              type="button"
              onClick={() => changeStep(currentStep - 1)}
              disabled={currentStep === 0}
            >
              <GrFormPrevious />
              <span>Voltar</span>
            </button>
            {!isLastStep ? (
              <button type="submit">
                <span>Avançar</span>
                <GrFormNext />
              </button>
            ) : (
              <button type="submit">
                <span>Enviar</span>
                <GrFormNext />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
