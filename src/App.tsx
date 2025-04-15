import { useState } from "react";
import UserForm from "./components/UserForm";
import ReviewForm from "./components/ReviewForm";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FiSend } from "react-icons/fi";

const formTemplate = {
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
  const isFirstStep = currentStep === 0;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!isLastStep) {
      setCurrentStep((prev) => prev + 1);
    } else {
      console.log("Dados enviados:", data);
      alert("Obrigado pela avaliação!");
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
        <form onSubmit={handleSubmit}>
          <div className="inputs-container">{formComponents[currentStep]}</div>
          <div className="actions">
            {!isFirstStep && (
              <button
                type="button"
                onClick={() => setCurrentStep((prev) => prev - 1)}
              >
                <GrFormPrevious />
                <span>Voltar</span>
              </button>
            )}
            <button type="submit">
              <span>{isLastStep ? "Enviar" : "Avançar"}</span>
              {isLastStep ? <FiSend /> : <GrFormNext />}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
