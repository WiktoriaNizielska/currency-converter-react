import { useState } from "react";
import Clock from "../Clock";
import { Fieldset, Legend, LabelText, Select, Button } from "./styled";

const Form = ({ calculateResult, ratesData }) => {
  const [currency, setCurrency] = useState("");
  const [amount, setAmount] = useState("");

  const onFormsubmit = (event) => {
    event.preventDefault();
    calculateResult(amount, currency);
  };

  return (
    <form onSubmit={onFormsubmit}>
      <Fieldset>
        <Legend>
          Przelicznik walut
        </Legend>
        <Clock />
        <p>
          <label>
            <LabelText>
              Waluta:
            </LabelText>
            <Select
              value={currency}
              onChange={({ target }) => setCurrency(target.value)}
            >
              {Object.keys(ratesData || {}).map((currency) => (
                <option value={currency} key={currency}>
                  {currency}
                </option>
              ))}
            </Select>
          </label>
        </p>
        <p>
          <label>
            <LabelText>
              Kwota w złotówkach:
            </LabelText>
            <Select as="input"
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
              type="number"
              name="amount"
              min="0.01"
              step="0.01" />
          </label>
        </p>
      </Fieldset>
      <p>
        <Button>Przelicz</Button>
      </p>
    </form>
  );

}

export default Form;