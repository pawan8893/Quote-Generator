const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const apiURL ="https://api.quotable.io/random";

async function getQuote(url){
    const response = await fetch(url);
    var data = await response.json();
    quote.innerHTML= data.content;
    author.innerHTML= data.author;
}

getQuote(apiURL);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+quote.innerHTML+"---by"+author.innerHTML,"Tweet Window","width=600px , height=300px");
}

btn1.addEventListener("click", ()=>{
    getQuote(apiURL);
})

btn2.addEventListener("click", ()=>{
    tweet();
})