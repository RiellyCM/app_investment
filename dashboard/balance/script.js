const fetchBalance = () => {
  const balance = document.querySelector(".js-balance");
  const token = localStorage.getItem('token');

  const balanceFetchInfo = {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    };

  fetch("https://desafio-api.devzz.ninja/account/balance", balanceFetchInfo)
    .then((response) => {
        response.json()
            .then((data) => {
                if (response.status === 200) {
                    balance.value = data.balance;
                } else {
                    console.log(data.message);
                }
            })
    })
    .catch((error) => {
      console.log(error);
    });  
}

fetchBalance();