
const usd = document.querySelector('.usd-price'),
eur = document.querySelector('.eur-price'),
gbp = document.querySelector('.gbp-price'),
cad = document.querySelector('.cad-price'),
chf = document.querySelector('.chf-price'),
czk = document.querySelector('.czk-price'),
pln = document.querySelector('.pln-price'),
nok = document.querySelector('.nok-price'),
uah = document.querySelector('.uah-price'),
huf = document.querySelector('.huf-price'),
dkk = document.querySelector('.dkk-price'),
byn = document.querySelector('.byn-price'),
sek = document.querySelector('.sek-price');



function getValues() {
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://www.cbr-xml-daily.ru/daily_json.js');
xhr.send();

xhr.addEventListener('load', () => {
  if(xhr.status === 200) {
      const rate = JSON.parse(xhr.response);
      usd.textContent = rate.Valute.USD.Value;
      eur.textContent = rate.Valute.EUR.Value;
      gbp.textContent = rate.Valute.GBP.Value;
      cad.textContent = rate.Valute.CAD.Value;
      chf.textContent = rate.Valute.CHF.Value;
      czk.textContent = rate.Valute.CZK.Value;
      pln.textContent = rate.Valute.PLN.Value;
      nok.textContent = rate.Valute.NOK.Value;
      uah.textContent = rate.Valute.UAH.Value;
      huf.textContent = rate.Valute.HUF.Value;
      dkk.textContent = rate.Valute.DKK.Value;
      byn.textContent = rate.Valute.BYN.Value;
      sek.textContent = rate.Valute.SEK.Value;
  } else {
      console.log('что-то не так');
  }
});
}
getValues();


//dropdown

const firstMenu = document.querySelector('.converter__first-menu'),
firstCodeBtn = document.querySelector('.converter__first-code'),
firstMenuItems = document.querySelectorAll('.converter__first-menu-item'),
secondMenu = document.querySelector('.converter__second-menu'),
secondCodeBtn = document.querySelector('.converter__second-code'),
secondMenuItems = document.querySelectorAll('.converter__second-menu-item');

firstCodeBtn.addEventListener('click', () => {
firstMenu.classList.toggle('menu-active');
  });
firstMenuItems.forEach(item => {
item.addEventListener('click', () => {
  firstCodeBtn.textContent = item.textContent;
  firstMenu.classList.toggle('menu-active');
  setResultFirst();
  });
});
secondCodeBtn.addEventListener('click', () => {
secondMenu.classList.toggle('menu-active');
});
secondMenuItems.forEach(item => {
item.addEventListener('click', () => {
  secondCodeBtn.textContent = item.textContent;
  secondMenu.classList.toggle('menu-active');
  setResultFirst();
  });
});

//converting

const firstInput = document.querySelector('.converter__first-value'),
secondInput = document.querySelector('.converter__second-value'),
change = document.querySelector('.converter__change');

let firstCurrency,
secondCurrency;

function setResultFirst() {
  setCurrency();
  let result = (+firstInput.value * firstCurrency) / secondCurrency;
  secondInput.value = result.toFixed(3);
  if(firstInput.value.length == 0) {
      secondInput.value = '';
  }
}
function setResultSecond() {
  setCurrency();
  let result = (+secondInput.value * secondCurrency) / firstCurrency;
  firstInput.value = result.toFixed(3);
  if(secondInput.value.length == 0) {
      firstInput.value = '';
  }
}

firstInput.addEventListener('input', setResultFirst);

secondInput.addEventListener('input', setResultSecond);

change.addEventListener('click', () => {
  const u = firstCodeBtn.textContent,
        r = secondCodeBtn.textContent;
  firstCodeBtn.textContent = r;
  secondCodeBtn.textContent = u;
  setResultFirst();
});

function setCurrency() {
switch(firstCodeBtn.textContent) {
  case 'USD':
      firstCurrency = +usd.textContent;
      break;
  case 'EUR':
      firstCurrency = +eur.textContent;
      break;
  case 'GBP':
      firstCurrency = +gbp.textContent;
      break;
  case 'CAD':
      firstCurrency = +cad.textContent;
      break;
  case 'CHF':
      firstCurrency = +chf.textContent;
      break;
  case 'CZK':
      firstCurrency = +czk.textContent/10;
      break;
  case 'PLN':
      firstCurrency = +pln.textContent;
      break;
  case 'NOK':
      firstCurrency = +nok.textContent/10;
      break;
  case 'UAH':
      firstCurrency = +uah.textContent/10;
      break;
  case 'HUF':
      firstCurrency = +huf.textContent/100;
      break;
  case 'DKK':
      firstCurrency = +dkk.textContent;
      break;
  case 'BYN':
      firstCurrency = +byn.textContent;
      break;
  case 'SEK':
      firstCurrency = +sek.textContent/10;
      break;
  case 'RUR':
      firstCurrency = 1;
      break;
  }

switch(secondCodeBtn.textContent) {
  case 'USD':
      secondCurrency = +usd.textContent;
      break;
  case 'EUR':
      secondCurrency = +eur.textContent;
      break;
  case 'GBP':
      secondCurrency = +gbp.textContent;
      break;
  case 'CAD':
      secondCurrency = +cad.textContent;
      break;
  case 'CHF':
      secondCurrency = +chf.textContent;
      break;
  case 'CZK':
      secondCurrency = +czk.textContent/10;
      break;
  case 'PLN':
      secondCurrency = +pln.textContent;
      break;
  case 'NOK':
      secondCurrency = +nok.textContent/10;
      break;
  case 'UAH':
      secondCurrency = +uah.textContent/10;
      break;
  case 'HUF':
      secondCurrency = +huf.textContent/100;
      break;
  case 'DKK':
      secondCurrency = +dkk.textContent;
      break;
  case 'BYN':
      secondCurrency = +byn.textContent;
      break;
  case 'SEK':
      secondCurrency = +sek.textContent/10;
      break;
  case 'RUR':
      secondCurrency = 1;
      break;
  }
}    