const loadCountries = () => {
    fetch("https://restcountries.com/v3.1/all")
    .then (res => res.json())
    .then(data => displayCountries(data))

}


const displayCountries = countries => {
   
  const allCountruesHTML = countries.map(country => getCountryHtml(country));
  
 const container = document.getElementById("countries");
 
 container.innerHTML = allCountruesHTML.join(" ");
}
// original 


// const getCountryHtml = country =>{
//     return `
//     <div class="country"> 
//     <h2>${country.name.common}</h2>
//     <img src = "${country.flags.png}"></div>
//     `
// }
 

// optional 1 
// const getCountryHtml = country =>{
//     const {name, flags} = country
//     return `
//     <div class="country"> 
//     <h2>${name.common}</h2>
//     <img src = "${flags.png}"></div>
//     `
// }

// optional 2 
const getCountryHtml = ({name , flags,area, region}) =>{
    return `
    <div class="country"> 
    <h2>${name.common}</h2>
    <h4>${area}  region ${region}</h4>
    <img src = "${flags.png}"></div>
    `
}
loadCountries()