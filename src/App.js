import { useEffect, useState } from "react";
import Form from "./Form";
import Result from "./Result";
import currencies from "./currencies";
import Clock from "./Clock";
import axios from "axios";

function App() {
  const [ratesData, setRatesData] = useState({});
  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await axios.get("currencies.json");
        console.log(response.data);
      } catch (error) {
        console.error("coś nie poszło", error);
      }
    };
    fetchRates();
  }, []);



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
