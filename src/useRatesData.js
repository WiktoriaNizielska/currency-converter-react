import { useEffect, useState } from "react";
import axios from "axios";

export const useRatesData = () => {
  const [ratesData, setRatesData] = useState({
    data: null,
    status: "loading",
    date: null,
  });

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await axios.get("currencies.json");
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
    fetchRates();
  }, []);
  return ratesData;
};