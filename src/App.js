

function App() {
  return (
    <div>
<form className=" form">
        <fieldset className="form__fieldset">
            <legend className="form__legend">Przelicznik walut</legend>
            <p>
                <label>
                    <span className="form__labelText">Waluta:</span>
                    <select name="currency" className=" form__field">
                        <option value="USD">USD - Dolar amerykański</option>
                        <option value="EUR">EUR - Euro</option>
                        <option value="SEK">SEK - Korona szwedzka</option>
                        <option value="CHF">CHF - Frank szwajcarski</option>
                    </select>
                </label>
            </p>
            <p>
                <label>
                    <span className="form__labelText">Kwota w złotówkach:</span>
                    <input className=" form__field" type="number" name="amount" min="0.01" step="0.01"/>
                </label>
            </p>
        </fieldset>
        <p> <button className="form__button">Przelicz</button> </p>
    </form>
    <p className="form__result">Wynik: </p>
    </div>
  );
}

export default App;
