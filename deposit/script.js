const deposit = document.querySelector(".js-form-deposit");
const token = localStorage.getItem('token');

deposit.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(deposit);

  const data = {
    amount: Number(formData.get("amount"))
  };

  const depositFetchInfo = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  };

  fetch("https://desafio-api.devzz.ninja/account/deposit", depositFetchInfo)
    .then((response) => {
        response.json()
            .then((data) => {
                if (response.status === 200) {
                  alert(`Seu saldo atual é ${data.balance}`);

                  window.location.href = "../dashboard/index.html"
                } else {
                  alert(data.message)
                }
            })
    })
    .catch((error) => {
      console.log(error);
    })
  });
