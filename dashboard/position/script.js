async function setPositionValues() {
  const tableBodyEl = document.querySelector(".js-body-table");

  const positions = await getPosition();

  if (!positions || !positions.length) {
      return;
  }

  const rows = positions.map((position) => {
    const row =  document.createElement("tr");
    const positionKeys = Object.keys(position);

    //add date col
    const dateCol = document.createElement("td");
    dateCol.innerHTML = position.purchasedDate.split("T")[0];
    row.appendChild(dateCol);

    //add invested col
    const investedCol = document.createElement("td");

    const invested = position.purchaseAmount * position.purchasePrice;
    investedCol.innerHTML = invested.toFixed(2);
    row.appendChild(investedCol);

    //add btc
    const btcCol = document.createElement("td");
    btcCol.innerHTML = position.currentPrice.toFixed(2);
    row.appendChild(btcCol);

    //add variation
    const variationCol = document.createElement("td");
    variationCol.innerHTML = position.variation.toFixed(2);
    row.appendChild(variationCol);

    //add grossAmountCol
    const grossAmountCol = document.createElement("td");
    const grossAmount = position.currentBtcAmount * position.currentPrice;
    grossAmountCol.innerHTML = grossAmount.toFixed(2);
    row.appendChild(grossAmountCol);

    return row;
  });

  const fragment = document.createDocumentFragment();

  rows.forEach((row) => {
    fragment.appendChild(row);
  });

  tableBodyEl.appendChild(fragment);
  };

setPositionValues();
