async function setVolumeValue() {
  const buyEl = document.querySelector(".js-volume-buy");
  const sellEl = document.querySelector(".js-volume-sell");

  const volumeData = await getVolume();

  if (!volumeData) {
    return;
  }

  buyEl.innerHTML = volumeData.buy;
  sellEl.innerHTML = volumeData.sell;
};

setVolumeValue();
