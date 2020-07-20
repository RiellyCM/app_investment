async function setupData(historyData) {
  const historyBuy = historyData.map((value) => {
      return value.buy;
  });

  const historySell = historyData.map((value) => {
      return value.sell;
  });

  const historyCreated = historyData.map((value) => {
      const time = value.createdAt.split("T")[1];
      return time.split(".")[0];
      //split divide a string a partir do ponto determinado. Nesse caso divide em T e depois divide em . e pega a 1 posição//
  });

  return {
    historyBuy,
    historySell,
    historyCreated
  }
}

function buildChart(chartData) {
  const historyGraph = document.querySelector('.js-history').getContext('2d');

  new Chart(historyGraph, {
      type: 'line',

      data: {
          labels: chartData.historyCreated,

          datasets: [
           {
               label: 'Compra',
               borderColor: '#120a38',
               data: chartData.historyBuy,
           },
          {
              label: 'Venda',
              borderColor: '#b8044f',
              data: chartData.historySell,
          }
        ]
      },

      options: {}
    });
}

async function setHistory() {
  const historyData = await getHistory();

  if (!historyData || !historyData.length) {
    return;
  }

  const chartData = await setupData(historyData);


  buildChart(chartData);
}

setHistory();
