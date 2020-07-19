async function getPosition() {
  const token = localStorage.getItem('token');

  const positionFetchInfo = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch("https://desafio-api.devzz.ninja/btc", positionFetchInfo)
    const data = await response.json();
    
    if (response.status === 200) {
      console.log(data)
      return data;
    } else {
      console.log(data.message);
    }
  } catch (error) {
    console.log(error);
  }
};
