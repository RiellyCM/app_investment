const postPurchase = (amountValue, successCallback) => {
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

  fetch("https://desafio-api.devzz.ninja/btc/purchase", buyFetchInfo)
    .then((response) => {
        response.json()
            .then((data) => {
                if (response.status === 201) {
                  successCallback();
                } else {
                  alert(data.message)
                }
            })
    })
    .catch((error) => {
      console.log(error);
    });
};
