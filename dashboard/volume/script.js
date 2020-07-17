async function setVolumeValue() {
  const buyEl = document.querySelector(".js-volume-buy");
  const sellEl = document.querySelector(".js-volume-sell");
  const token = localStorage.getItem('token');

  const { buy, sell } = await getVolume();

  buyEl.innerHTML = buy;
  sellEl.innerHTML = sell;
};

setVolumeValue();
