const country = new URLSearchParams(window.location.search).get("name");
const main = document.querySelector("main");


fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
.then((res) => res.json())
.then(([country]) => {
    console.log(country)
    let nativeName ;
    if(country.name.nativeName){
         nativeName = Object.values(country.name.nativeName)[0].common ;
    }

   const div = document.createElement("div");
   div.classList.add("country-container");
   div.innerHTML = ` <img class="country-image" src="${country.flags.svg}" alt="">
            <div class="country-information-container">
            <h1>${country.name.common}</h1>
            <div class="country-information">
            <p><b>Native Name: </b>${nativeName || country.name.common}</p>
            <p><b>Population: </b>${country.population.toLocaleString("en-IN")}</p>
            <p><b>Region: </b>${country.region}</p>
            <p><b>Sub Region: </b>${country.subregion}</p>
            <p><b>Capital: </b>${country.capital}</p>
            <p><b>Top Level Domain: </b>${country.tld}</p>
            <p><b>Currencies: </b>${Object.values(country.currencies)[0].name}</p>
            <p><b>Languages: </b>${Object.values(country.languages)[0]}</p>
        </div>`
    const p = document.createElement("p");
    p.classList.add("border-country");
    p.innerHTML = "<b>Border Countries: </b>" ;

        main.append(div);
      div.lastElementChild.append(p)

      country["borders"].forEach(() => {
        let count = 0 ;
        const a = document.createElement("a");
        a.innerText = country.borders[count] ;
        p.append(a);
        count++ ;
        console.log(count); 
    })
})
