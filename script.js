const counrtriesConatainer = document.querySelector(".countries-container");


fetch("https://restcountries.com/v3.1/all")
.then((res) => res.json())
.then((data) => {
    data.forEach((country) => {
        
        const a = document.createElement("a");
        a.classList.add("country-card");
        a.innerHTML = `<img src="${country.flags.svg}" alt="">
                      <div class="country-details">
                      <h3>${country.name.common}</h3>
                      <p><b>Population : </b>${country.population.toLocaleString("en-IN")}</p>
                      <p><b>Region : </b>${country.region}</p>
                      <p><b>Capital : </b>${country.capital}</p>
                  </div>
        `
      counrtriesConatainer.appendChild(a);
    })
})





