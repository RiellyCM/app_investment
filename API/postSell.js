async function postSell(amountValue) {
  const token = localStorage.getItem('token');

  const requestBody = {
    amount: amountValue,
  };

  const sellFetchInfo = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(requestBody),
  };

  try {
    const response = await fetch("https://desafio-api.devzz.ninja/btc/sell", sellFetchInfo)
    const data = await response.json();

    if (response.status === 200) {
      return data;
    } else {
      console.log(data.message)
    }
  } catch (error) {
    console.error(error);
  }
};
