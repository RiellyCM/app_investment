const sellForm = document.querySelector(".js-form-sell");
const token = localStorage.getItem('token');

  function getAmountValue() {
      const formData = new FormData(sellForm);
      const amountValue = Number(formData.get("amount"));

      return amountValue;
  }

  async function handleUserConfirmation() {
    const amountValue = getAmountValue();
    const data = await postSell(amountValue);


    alert(`Venda efetuada com sucesso!`);
    window.location.href = "../dashboard/index.html";
  }

  async function handleFormSubmit(event) {
    event.preventDefault();

    const message = "Você tem certeza que deseja vender?";

    if (window.confirm(message)) {
        handleUserConfirmation();
    }
  };
sellForm.addEventListener("submit", handleFormSubmit);
