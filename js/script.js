
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
// xhr.setRequestHeader('Content-type', 'application/json');
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
      console.log(rate);
          //  usd = rate.Valute.USD.Value,
          //  eur = rate.Valute.EUR.Value;
      // console.log(rate.Date);
      // console.log(`USD : ${usd}`);
      // console.log(`EUR : ${eur}`);
  } else {
      console.log('ERROR');
  }
});
}
getValues();

//dropdown

const menu = document.querySelector('.converter__first-menu'),
firstCodeBtn = document.querySelector('.converter__first-code'),
firstMenuItems = document.querySelectorAll('.converter__first-menu-item');

firstCodeBtn.addEventListener('click', () => {
menu.classList.toggle('menu-active');
});
firstMenuItems.forEach(item => {
item.addEventListener('click', () => {
  firstCodeBtn.textContent = item.textContent;
  menu.classList.toggle('menu-active');
});
});

