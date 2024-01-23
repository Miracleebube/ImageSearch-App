const accessKey = "7XkldLLrMJgJ9BEF-bqHZbFeArUi5-CFtGWZXEQFURI";

const formE1 = document.querySelector("form");

const searchInputE1 = document.getElementById("search-input");

const searchResultE1 = document.querySelector(".search-results");

const showMoreButton = document.getElementById("show-more-button");

let inputData = "";
let page = 1;

//let us addeventlistener to the form
async function searchImages(){
    inputData = searchInputE1.value;
    //console.log(inputData);
    const url = `https://api.unsplash.com/search/photos?page=${page}&
   query=${inputData}&client_id=${accessKey}`;
   //console.log(url);
   const response = await fetch(url)
   const data = await response.json();
   //console.log(data);
   if(page === 1) {
    searchResultE1.innerHTML = "";
   }
const results = data.results;

results.map((result)=>{
    const imageWrapper = document.createElement("div");
imageWrapper.classList.add("search-result");
const image = document.createElement("img")
image.src = result.urls.small
image.alt = result.alt_description;
const imageLink = document.createElement("a")
imageLink.href = result.link.html
imageLink.target = "_blank"
//console.log(result);
imageLink.textContent = alt_description;

imageWrapper.appendChild(image);
imageWrapper.appendChild(imageLink);
searchResultE1.appendChild(imageWrapper);
});

page++

//console.log(page);


if (page > 1) {
showMoreButton.style.display = "block";
}
//console.log(results);
}



formE1.addEventListener("submit", (event) => {
    event.preventDefault();
    page = 1;
    //console.log("Submitted");
    searchImages();
});

showMoreButtonE1.addEventListener("click", () =>{
    searchImages();
});










