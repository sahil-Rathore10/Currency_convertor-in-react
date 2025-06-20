import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  // api call
  // most cases me api se data jo hai string me ata hai
  // ye useEffect jo hai vo currency per depend hai or uske change hote hi (jab jab currency change hogi toh tab fetch chalega ye ek dependency hai)
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
    console.log(data);
  }, [currency]);
  console.log(data);
  return data;
}

// kia kya ek fubctionality likhi or use pura ka pura method hi return ker diaa expport ker k
export default useCurrencyInfo;
