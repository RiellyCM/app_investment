async function setValues() {
  const buyEl = document.querySelector(".js-buy");
  const sellEl = document.querySelector(".js-sell");

  const { buy, sell } = await getPrice();

  buyEl.innerHTML = buy;
  sellEl.innerHTML = sell;
};

setValues();
