import { useState } from "react";
import Form from "./Form";
import Result from "./Result";
import Clock from "./Clock";
import { useRatesData } from "./useRatesData";

function App() {
  const ratesData = useRatesData();
  const [result, setResult] = useState(null);

  const calculateResult = (amount, currency) => {
    const rate = ratesData.data[currency].value;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount * rate,
      currency,
    });
  };

  return (
    <main>
      <Form
        Clock={Clock}
        calculateResult={calculateResult}
        result={result}
        ratesData={ratesData}
      />
      <Result result={result} />
    </main>
  );
}

export default App;
