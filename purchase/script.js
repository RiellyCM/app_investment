async function getBuyValue() {
  const bitCoinPrices = await getPrice();

  return bitCoinPrices.buy;
}

function getAmountValue() {
    const formData = new FormData(buyForm);
    const amountValue = Number(formData.get("amount"));

    return amountValue;
}

async function getValues() {
  const buyValue = await getBuyValue();

  const amountValue = getAmountValue();
  const totalValue = buyValue * amountValue;

  return {
    buyValue,
    amountValue,
    totalValue,
  };
};

async function buildMessage() {
  const { buyValue, amountValue, totalValue } = await getValues();

  const message = `
    O Preço do bitcoin atual é ${buyValue}.
    O valor a ser pago pela quantia de ${amountValue}, será ${totalValue}.

    Deseja continuar com a transação?
  `;

  return message;
};

async function handleUserConfirmation() {
  const amountValue = getAmountValue();
  const data = await postPurchase(amountValue);
  console.log(data);

  alert('Compra efetuada com sucesso!');
  window.location.href = "../dashboard/index.html";
}

async function handleFormSubmit() {
  event.preventDefault();

  const message = await buildMessage();

  if (window.confirm(message)) {
      handleUserConfirmation();
  }
};

const buyForm = document.querySelector(".js-form-buy");
buyForm.addEventListener("submit", handleFormSubmit);
