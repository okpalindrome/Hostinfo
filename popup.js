const elmUrl = document.getElementById("host");
const elmResult = document.getElementById("result");

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  const url = new URL(tabs[0].url);
  elmUrl.innerText = "Host : "+  url.hostname;
  fetchData(url.hostname);
});

async function fetchData(requestHost) {
  const res = await fetch('http://ip-api.com/json/'+requestHost);
  const record = await res.json()
  
  for (let x in record){
    document.getElementById("result").innerHTML += `<li>${x} : ${record[x]}</li>`;
  }

}