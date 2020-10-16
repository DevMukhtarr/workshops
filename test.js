window.addEventListener("load", (e) => {
    const card = document.querySelector(".card");
  
    const API = `https://restcountries.eu/rest/v2/all`;
    fetch(API)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let item;
        for (let i = 0; i < data.length; i++) {
          item = data[i];

          const flagImage = document.createElement("img");
          flagImage.setAttribute(
            "src",
            `https://restcountries.eu/data/${item.alpha3Code.toLowerCase()}.svg`
          );
  
          const countryName = document.createElement("p");
          countryName.textContent = item.name
          
            card.appendChild(flagImage);
            card.appendChild(countryName);
          }
          
        });
    });
      