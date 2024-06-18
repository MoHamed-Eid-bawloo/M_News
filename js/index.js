// Variables
let GeneralBtn = document.getElementById("genral"),
  businessBtn = document.getElementById("business"),
  sportsBtn = document.getElementById("sport"),
  entertainmentBtn = document.getElementById("entertainment"),
  technologyBtn = document.getElementById("technology"),
  searchBtn = document.getElementById("searchBtn"),
  newsQuery = document.getElementById("newsQuery"),
  newsType = document.getElementById("BoxOFCards"),
  ToTop = document.querySelector(".btn-warning"),
  Type = document.getElementById("type");


// API key
let API_KEY = "d6a3a659380748ae80469a62b12d204c";

const getNews = async (input) => {
    Type.innerText=input
  res = await fetch(`https://newsapi.org/v2/everything?q=${input}&apiKey=${API_KEY}`);
  let jsonData = await res.json();
  newsType.innerHTML = ""; // Clear the previous news...
  jsonData.articles.forEach(ele => {
    let div = document.createElement('div');
    div.classList.add("card");
    let img = ele.urlToImage ? `<img src="${ele.urlToImage}" class="card-img-top" alt="${ele.title}">` : '';
    div.innerHTML = `
      ${img}
      <div class="card-body">
          <h5 class="card-title">${ele.title}</h5>
          <p class="card-text">${ele.description}</p>
          <a href="${ele.url}" target="_blank" class="btn btn-primary">Read More</a>
      </div>
    `;
    newsType.appendChild(div);
  });
}

window.addEventListener('load', function () {
  getNews("egypt");
});
GeneralBtn.addEventListener('click', function () {
  getNews("general");
});
businessBtn.addEventListener('click', function () {
  getNews("business");
});
sportsBtn.addEventListener('click', function () {
  getNews("sports");
});
entertainmentBtn.addEventListener('click', function () {
  getNews("entertainment");
});
technologyBtn.addEventListener('click', function () {
  getNews("technology");
});
searchBtn.addEventListener('click', function () {
  let inputText = newsQuery.value;
  getNews(inputText);
  newsQuery.value = "";
});

window.onscroll=function () {
    if (window.scrollY>1) {
        ToTop.style.display = "block";
    }else{
        ToTop.style.display = "none";
    }
}
ToTop.onclick=function() {
}