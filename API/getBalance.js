async function getBalance() {
  const token = localStorage.getItem('token');

  const balanceFetchInfo = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch("https://desafio-api.devzz.ninja/account/balance", balanceFetchInfo);
    const data = await response.json();

    if (response.status === 200) {
      return data;
    }
    if (response.status === 500 && data.name === "TokenExpiredError") {
     window.location.href = "../user_login/index.html";
    } else {
      console.log(data.message);
    }
  } catch (error) {
    console.log(error);
  }
};
