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
    dateCol.innerHTML = position.purchaseDate;
    row.appendChild(dateCol);

    //add invested col
    const investedCol = document.createElement("td");
    investedCol.innerHTML = position.purchaseAmount * position.purchasePrice;
    row.appendChild(investedCol);

    //add variation
    const variationCol = document.createElement("td");
    variationCol.innerHTML = position.variation;
    row.appendChild(variationCol);

    //add grossAmountCol
    const grossAmountCol = document.createElement("td");
    grossAmountCol.innerHTML = position.currentBtcAmount * position.currentPrice;
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
