export const Estate = ({nazev, popis, cena, mesto, jmeno, email, telefon, foto}) => {
    return (
      <>
        <h2>{nazev}</h2>
        <p>{popis}</p>
        <h3>{cena}</h3>
        <p>{mesto}</p>
        <p>{jmeno}</p>
        <p>{email}</p>
        <p>{telefon}</p>
        <p>{foto}</p>
      </>
    )
  }

  //<Estate nazev={data.title} popis={data.text} cena={data.price} mesto={data.city} jmeno={data.contact.name} email={data.contact.email} telefon={data.contact.phone} foto={data.photo} />
