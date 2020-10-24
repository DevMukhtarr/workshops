window.addEventListener("load", (e) => {
    const button = document.querySelector('.search-button');
    const search = document.querySelector('.input')
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

            //Search function to check for countries alphabetically
            search.onkeyup = () =>{
              let input, filter, card, p, txtValue, pToUse, img, iToUse;

              input = document.getElementById('input');
              filter = input.value.toUpperCase();
              card = document.getElementById("card");
              p = card.getElementsByTagName('p');
              img = card.getElementsByTagName('img')
              //looping through the page
              for(let i = 0; i < p.length; i++){
                pToUse = p[i]
                iToUse = img[i]
                txtValue = pToUse.textContent || pToUse.innerHTML;

                if(txtValue.toUpperCase().indexOf(filter) > -1){
                  iToUse.style.display = ''
                  p[i].style.display = '';
                }else{
                  iToUse.style.display = 'none'
                  p[i].style.display = 'none'
                }
              }

              }
            
          }

          
              
        });
    });
      