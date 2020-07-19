async function setBuySellValues() {
  const buyEl = document.querySelector(".js-buy");
  const sellEl = document.querySelector(".js-sell");

  const priceData = await getPrice();

  if (!priceData) {
    return;
  }

  buyEl.innerHTML = priceData.buy;
  sellEl.innerHTML = priceData.sell;
};

setBuySellValues();
