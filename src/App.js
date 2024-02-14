import { useState } from "react";
import Form from "./Form";
import Result from "./Result";
import currencies from "./currencies";

function App() {
  const [result, setResult] = useState(null);

  const calculateResult = (amount, currency) => {
    const rate = currencies
      .find(({ symbol }) => symbol === currency)
      .rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  };

  return (
    <main>
      <Form
        calculateResult={calculateResult}
        result={result}
      />
      <Result
        result={result}
      />
    </main>
  );
}

export default App;
