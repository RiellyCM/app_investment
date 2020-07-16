const buyForm = document.querySelector(".js-form-buy");

buyForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const setBitcoinValue = (data) => {
    const buyValue = data.buy;

    const formData = new FormData(buyForm);
    const amountValue = Number(formData.get("amount"));

    const totalValue = buyValue * amountValue;

    const message = `
      O Preço do bitcoin atual é ${buyValue}.
      O valor a ser pago pela quantia de ${amountValue}, será ${totalValue}.

      Deseja continuar com a transação?
    `;

    if (window.confirm(message)) {
      const redirectToDashboard = () => {
        console.log(data);

        window.location.href = "../dashboard/index.html";
      };

      postPurchase(amountValue, redirectToDashboard);
    }
  };

  getPrice(setBitcoinValue);
});
