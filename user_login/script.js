const form = document.querySelector(".js-form-login");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  const data = {
    email: formData.get("email"),
    password: formData.get("password")
  };

  const loginFetchInfo = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  };

  fetch("https://desafio-api.devzz.ninja/login", loginFetchInfo)
    .then((response) => {
        response.json()
            .then((data) => {
                if (response.status === 200) {
                  localStorage.setItem('token', data.token)

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
