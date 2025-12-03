let userAccount = null;

async function connectWallet() {
  if (!window.ethereum) {
    alert("MetaMask نصب نیست!");
    return;
  }

  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts"
  });

  userAccount = accounts[0];
  document.getElementById("gmBtn").disabled = false;

  alert("Connected: " + userAccount);
}

async function sendGM() {
  if (!userAccount) {
    alert("اول کیف پول را وصل کن!");
    return;
  }

  const tx = await ethereum.request({
    method: "eth_sendTransaction",
    params: [{
      from: userAccount,
      to: userAccount, 
      value: "0x0",
      data: "0x474d"  // 'GM' in hex
    }]
  });

  alert("GM Sent! TX: " + tx);

  addGMToList("GM sent from " + userAccount);
}

function addGMToList(msg) {
  const ul = document.getElementById("gmList");
  const li = document.createElement("li");
  li.textContent = msg;
  ul.appendChild(li);
}

document.getElementById("connectBtn").onclick = connectWallet;
document.getElementById("gmBtn").onclick = sendGM;
