const fetchprice = () => {
  const buy = document.querySelector(".js-buy");
  const sell = document.querySelector(".js-sell");
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
                    buy.value = data.buy;
                    sell.value = data.sell;
                } else {
                    console.log(data.message);
                }
            })
    })
    .catch((error) => {
      console.log(error);
  });
}
fetchprice();