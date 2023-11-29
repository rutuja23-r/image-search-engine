const acessKey = "z_gpPM1OvalHFM8JB8Qmm1iQbl_l6ehBdRmcr0wBO7A" ;
const searchForm = document.getElementById('search-form');
const searchBox = document.getElementById('search-box');
const serachResult = document.getElementById('serach-result');
const showMoreBtn = document.getElementById('shome-more-btn');

let keyword = "" ;
let page = 1 ;
async function searchImages(){
    keyword= searchBox.value;
    const url = `https\://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${acessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    if(page ===1 ){
        serachResult.innerHTML = ""
    }
    const results = data.results;
    results.map((result)=>{
        const image = document.createElement("img")
        image.src = result.urls.small;
        const imageLink = document.createElement("a")
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.appendChild(image);
        serachResult.appendChild(imageLink);
    }) 
    showMoreBtn.style.display="block";

    //console.log(data);
}
searchForm.addEventListener("submit" ,(e)=> {
    e.preventDefault();
    page = 1 ;
    searchImages();
})
showMoreBtn.addEventListener("click",()=>{
    page++;
    searchImages()
})
//Access Key
 // z_gpPM1OvalHFM8JB8Qmm1iQbl_l6ehBdRmcr0wBO7A