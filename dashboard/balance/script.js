async function setBalanceValue() {
  const balanceEl = document.querySelector(".js-balance");

  const balanceData = await getBalance();

  if (!balanceData) {
    return;
  }

  balanceEl.innerHTML = balanceData.balance;
};

setBalanceValue();
