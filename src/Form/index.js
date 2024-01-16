import "./style.css";
import { useState } from "react";
import currencies from "../currencies";

const Form = () => {
  const [currency, setCurrency] = useState("");
  const onSelectChange = ({ target }) => setCurrency(target.value);

  const onFormsubmit = (event) => {
    event.preventDefault();
    console.log(`Wysłano: ${currency}`);
  };

  return (
    <form className=" form" onSubmit={onFormsubmit}>
      <fieldset className="form__fieldset">
        <legend className="form__legend">
          Przelicznik walut
        </legend>
        <p>
          <label>
            <span className="form__labelText">
              Waluta:
            </span>
            <select
              value={currency}
              onChange={onSelectChange}
              className=" form__field"
            >
              {currencies.map((currency => (
                <option
                  value={currencies.currency}
                  key={currency.short}
                >
                  {currency.symbol} - {currency.currency}
                </option>
              )))}
            </select>
          </label>
        </p>
        <p>
          <label>
            <span className="form__labelText">
              Kwota w złotówkach:
            </span>
            <input
              className=" form__field"
              type="number"
              name="amount"
              min="0.01"
              step="0.01" />
          </label>
        </p>
      </fieldset>
    </form>
  );
}

export default Form;