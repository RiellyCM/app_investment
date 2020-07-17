async function setPositionValues() {
  const dayEl = document.querySelector(".js-position-day");
  const investmentEl = document.querySelector(".js-position-investment");
  const btcEl = document.querySelector(".js-position-btc");
  const priceEl = document.querySelector(".js-position-price");
  const valueEl = document.querySelector(".js-position-value");

  const positions = await getPosition();

 const {
    purchasedDate,
    purchasePrice,
    currentPrice,
    purchasedBtcAmount,
    variation
  } = await positions[positions.length - 1];

  dayEl.innerHTML = purchasedDate;
  investmentEl.innerHTML = purchasedBtcAmount;
  btcEl.innerHTML = purchasedBtcAmount;
  priceEl.innerHTML = currentPrice;
  valueEl.innerHTML = variation;
};

setPositionValues();
