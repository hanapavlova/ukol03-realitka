import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

import { Header } from '../components/Header/header';
import { Estate } from '../components/Estate/estate';

const location = window.location.pathname;

const partOfLocation = location.split('/')[1].split('.')[0];
console.log(partOfLocation)
const apiUrl = `https://apps.kodim.cz/daweb/trening-api/apis/realitka/${partOfLocation}`;


const response = await fetch(apiUrl);
const data = await response.json();
console.log(data.title)


const HomePage = () => {
    return (
  <div className="container">
      < Header />
      <Estate nazev={data.title} popis={data.text} cena={data.price} mesto={data.city} jmeno={data.contact.name} email={data.contact.email} telefon={data.contact.phone} foto={data.photo} />
  </div>
    );
  };

  
document.querySelector('#root').innerHTML = render(
  <>
    < HomePage />
  </>
);



  /*
if (Location === "/dum01.html") {
  const response = await fetch(
    'https://apps.kodim.cz/daweb/trening-api/apis/realitka/dum01'
  );
  const data = await response.json();
  (console.log(data.title))


} else if (Location === "/dum02.html") {
  const response = await fetch(
    'https://apps.kodim.cz/daweb/trening-api/apis/realitka/dum02'
  );
  const data = await response.json();
  (console.log(data.title))
  document.body.innerHTML += data.title

} else if (Location === "/dum03.html") {
  const response = await fetch(
    'https://apps.kodim.cz/daweb/trening-api/apis/realitka/dum03'
  );
  const data = await response.json();
  (console.log(data.title))
  document.body.innerHTML += data.title

}else if (Location === "/dum04.html") {
  const response = await fetch(
    'https://apps.kodim.cz/daweb/trening-api/apis/realitka/dum04'
  );
  const data = await response.json();
  (console.log(data.title))
  document.body.innerHTML += data.title
}

*/

