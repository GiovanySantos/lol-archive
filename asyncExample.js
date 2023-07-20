function showHome() {
  const response = '1 - home';
  console.log(response);
}

async function showTFT() {
  const response = '2 - tft';

  function callback() {
    console.log(response);
  }

  setTimeout(callback, 2000);
}

function getTFTData() {
  const response = 'tft data returned';
  console.log(response);
}

async function run() {
  showHome();
  await showTFT();
  getTFTData();
}

run();
