import { useState } from "react";
import Form from "./Form";
import Result from "./Result";
import currencies from "./currencies";
import Clock from "./Clock";

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
        Clock={Clock}
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
