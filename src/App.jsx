import { useState } from "react";

export default function App() {
  const [isOpen, setInOpen] = useState(true);
  let [step, setStep] = useState(1);
  const allSteps = [1, 2, 3];
  const text = [
    "Learn React ⚛",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
  ];

  const next = () => {
    console.log("Before + :" + step);
    /*
    // this is the best practice for state updating to avoid errors in bulky apps
    step >= 1 && step < allSteps.length && setStep((s) => s + 1);
    */
    step >= 1 && step < allSteps.length && setStep(step + 1);
    console.log("After + :" + step);
  };

  const prev = () => {
    console.log("Before - :" + step);
    /*
    // this is the best practice for state updating to avoid errors in bulky apps
    step > 1 && setStep((s) => --s); 
    */
    step > 1 && setStep(--step);
    console.log("After - :" + step);
  };

  const steps = allSteps.map((number) => {
    return (
      <li key={number} className={step >= number ? "active" : ""}>
        {number}
      </li>
    );
  });

  return (
    <>
      <button
        onClick={() => setInOpen((state) => !state)}
        className="close-open"
      >
        X
      </button>
      {isOpen && (
        <div className="steps rounded-3 shadow mt-5">
          <ul className="list-unstyled p-0 m-0 d-flex justify-content-around">
            {steps}
          </ul>
          <p className="message py-3 text-center">
            Step {step}: {text[step - 1]}
          </p>
          <div className="buttons d-flex justify-content-between">
            <button disabled={step === 1 ? true : false} onClick={prev}>
              Previous
            </button>
            <button
              disabled={step ===  allSteps.length ? true : false}
              onClick={next}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
