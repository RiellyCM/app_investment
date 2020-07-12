const form = document.querySelector(".js-form");
//acessar o DOM

form.addEventListener("submit", (event) => {
  //escutei o evento submit//
  event.preventDefault();
  //preve o comportamento padrão do evento submit de atualizar a página//

  const formData = new FormData(form);
  //A interface FormData fornece uma maneira de pegar os dados de form//

  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password")
  };
  //constroi objeto com valores do formData, usando o metodo get//

  //preparando os dados para requisição//
  const registerFetchInfo = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
    //transforma o objeto em json//
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
