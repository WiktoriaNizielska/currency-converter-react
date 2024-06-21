import { useEffect, useState } from "react";
import axios from "axios";

export const useRatesData = () => {
  const [ratesData, setRatesData] = useState({
    data: [],
    status: "loading",
    date: null,
  });

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await axios.get("https://api.currencyapi.com/v3/latest?apikey=cur_live_QSrOjPd0zX9dGuBWVdLavb7aJXhOP9qivsKCW9DH&currencies=&base_currency=PLN");
        console.log(response.data);

        setRatesData({
          data: response.data.data,
          status: "downloaded",
          date: response.data.meta.last_updated_at,
        });
      } catch (error) {
        setRatesData({
          status: "error",
        });
      }
    };
    setTimeout(fetchRates, 4000);
  }, []);
  return ratesData;
};