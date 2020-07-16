async function setBalanceValue() {
  const balanceEl = document.querySelector(".js-balance");

  const { balance } = await getBalance();

  balanceEl.innerHTML = balance;
};

setBalanceValue();
