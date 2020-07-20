const form = document.querySelector(".js-form");

form.addEventListener("submit", (event) => {

  event.preventDefault();

  const formData = new FormData(form);

  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password")
  };

  const registerFetchInfo = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  };

  fetch("https://desafio-api.devzz.ninja/account", registerFetchInfo)
    .then((response) => {
        response.json()
            .then((data) => {
                if (response.status === 201) {
                    alert('Usuario criado com sucesso!')

                    window.location.href = "../user_login/index.html"
                } else {
                    console.log(data.message);
                }
            })
    })
    .catch((error) => {
      console.log(error);
    })
});
