import "./estate.css"

export const Estate = ({nazev, popis, cena, mesto, jmeno, email, telefon, foto}) => {
    return (
  <div className="inzerat">
        <h2>{nazev}</h2>
      
    <div className="popis">
        <div className="obrazek">
        <img src={foto} alt="nemovitost"/>
        </div>
        
        <div className="detail">
          <p>{popis}</p>
          <h3>Cena: {cena} Kč</h3>
          <p>Lokalita: {mesto}</p>
          <p className="kontakt">Kontakt:</p>
            <div className="info">
              <p>{jmeno}</p>
              <p>{email}</p>
              <p>{telefon}</p>
            </div>
        </div>
      
    </div>
  </div>
    )
  }
