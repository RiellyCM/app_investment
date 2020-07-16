const getPrice = (successCallback) => {
  const token = localStorage.getItem('token');

  const priceFetchInfo = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  };

  fetch("https://desafio-api.devzz.ninja/btc/price", priceFetchInfo)
    .then((response) => {
        response.json()
            .then((data) => {
                if (response.status === 201) {
                  successCallback(data);
                } else {
                  console.log(data.message);
                }
            })
    })
    .catch((error) => {
      console.log(error);
  });
};
