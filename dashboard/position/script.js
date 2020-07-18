async function setPositionValues() {
  const tableBodyEl = document.querySelector(".js-body-table");

  const positions = await getPosition();

  const rows = positions.map((position) => {
    const row =  document.createElement("tr");

    const positionKeys = Object.keys(position);

    positionKeys.forEach((positionKey) => {
      if (positionKey === "id" || positionKey === "sellAmount" || positionKey === "purchasedBtcAmount" || positionKey === "purchasePrice") {
        return
      }

      const col = document.createElement("td");
      col.innerHTML = position[positionKey];
      row.appendChild(col);
    });

    return row;
  });

  const fragment = document.createDocumentFragment();

  rows.forEach((row) => {
    fragment.appendChild(row);
  });

  tableBodyEl.appendChild(fragment);
  };

setPositionValues();
