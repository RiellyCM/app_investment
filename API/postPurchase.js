async function postPurchase(amountValue) {
  const token = localStorage.getItem('token');

  const requestBody = {
    amount: amountValue,
  };

  const buyFetchInfo = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(requestBody),
  };

  try {
    const response = await fetch("https://desafio-api.devzz.ninja/btc/purchase", buyFetchInfo)
    const data = await response.json();

    if (response.status === 201) {
      return data;
    } else {
      console.log(data.message)
    }
  } catch (error) {
    console.log(error);
  }
};
