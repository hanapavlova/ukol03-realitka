import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

import { Header } from '../components/Header/header';

const HomePage = () => {
  return (
<div className="container">
    < Header />
</div>
  );
};

const Location = window.location.pathname;

if (Location === "/index.html") {
  const response = await fetch(
    'https://apps.kodim.cz/daweb/trening-api/apis/realitka/dum01'
  );
  const data = await response.json();
  (console.log(data.title))
  document.body.innerHTML += data.title

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



document.querySelector('#root').innerHTML = render(
  <>
    < HomePage />
  </>
);

