const setValues = (data) => {
  const buy = document.querySelector(".js-buy");
  const sell = document.querySelector(".js-sell");

  buy.innerHTML = data.buy;
  sell.innerHTML = data.sell;
};

getPrice(setValues);
