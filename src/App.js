import { useEffect, useState } from "react";
import Form from "./Form";
import Result from "./Result";
import Clock from "./Clock";
import axios from "axios";

function App() {
  const [ratesData, setRatesData] = useState({
    data: null,
    loading: false,
    error: null,
    date: null,
  });

  useEffect(() => {
    const fetchRates = async () => {
      try {
        setRatesData((previousData) => ({
          ...previousData,
          loading: true,
        }));

        const response = await axios.get("currencies.json");
        console.log(response.data);

        setRatesData({
          data: response.data.data,
          loading: false,
          error: null,
          date: response.data.meta.last_updated_at,
        });
      } catch (error) {
        console.error("coś nie poszło", error);
      }
    };
    fetchRates();
  }, []);

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
        ratesData={ratesData.data}
      />
      <Result
        result={result}
      />
    </main>
  );
}

export default App;
