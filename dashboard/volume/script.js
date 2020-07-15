const fetchvolume = () => {
  const volumeBuy = document.querySelector(".js-volume-buy");
  const volumeSell = document.querySelector(".js-volume-sell");
  const token = localStorage.getItem('token');

  const volumeFetchInfo = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    };

  fetch("https://desafio-api.devzz.ninja/volume", volumeFetchInfo)
    .then((response) => {
        response.json()
            .then((data) => {
                if (response.status === 201) {
                    volumeBuy.innerHTML = data.buy.toFixed(2);
                    volumeSell.innerHTML = data.sell.toFixed(2);
                } else {
                    console.log(data.message);
                }
            })
    })
    .catch((error) => {
      console.log(error);
  });
}
fetchvolume();
