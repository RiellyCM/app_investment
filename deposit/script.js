const depositForm = document.querySelector(".js-form-deposit");
const token = localStorage.getItem('token');

  function getAmountValue() {
      const formData = new FormData(depositForm);
      const amountValue = Number(formData.get("amount"));

      return amountValue;
  }

  async function handleUserConfirmation() {
    const amountValue = getAmountValue();
    const data = await postDeposit(amountValue);


    alert(`Depósito efetuado com sucesso!
      Seu saldo atual é ${data.balance}`);
    window.location.href = "../dashboard/index.html";
  }

  async function handleFormSubmit(event) {
    event.preventDefault();

    const message = "Confirmar depósito?";

    if (window.confirm(message)) {
        handleUserConfirmation();
    }
  };
depositForm.addEventListener("submit", handleFormSubmit);
