const fetchhistory = () => {
  const  history = document.querySelector(".js-history");
  const token = localStorage.getItem('token');

  const historyFetchInfo = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    };

  fetch("https://desafio-api.devzz.ninja/history", historyFetchInfo)
    .then((response) => {
        response.json()
            .then((data) => {
                if (response.status === 200) {

                  const historyBuy = data.map((value) => {
                      return value.buy;
                  });

                  const historySell = data.map((value) => {
                      return value.sell;
                  });

                  const historyCreated = data.map((value) => {
                      const time = value.createdAt.split("T")[1];
                      return time.split(".")[0];
                      //split divide a string a partir do ponto determinado. Nesse caso divide em T e depois divide em . e pega a 1 posição//
                  })

                  const historyGraph = document.querySelector('.js-history').getContext('2d');

                  new Chart(historyGraph, {

                      type: 'line',

                      data: {
                          labels: historyCreated,

                          datasets: [
                           {
                               label: 'Compra',
                               borderColor: '#120a38',
                               data: historyBuy,
                           },
                          {
                              label: 'Venda',
                              borderColor: '#b8044f',
                              data: historySell,
                          }
                        ]
                      },

                      options: {}
                    });

                } else {
                    console.log(data.message);
                }
            })
    })
    .catch((error) => {
      console.log(error);
  });
}
fetchhistory();
