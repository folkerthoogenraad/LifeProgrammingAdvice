
const quotes: string[] = [
   "Sometimes you just need a little extra class",
   "You might be stuck in a loop, but you can terminate it with a little external help",
   "Try to not ignore early warning signs",
   "Always make sure to save enough",
   "Sometimes you just need a little extra class",
   "Your condition might not be as black and white as it seems",
];

function getRandomQuote(): string{
   let random: number = Math.floor(Math.random() * quotes.length);
   return quotes[random];
}

document.addEventListener("DOMContentLoaded", ()=>{
   const quoteElement = document.getElementById("quote");

   quoteElement.innerText = getRandomQuote(); 
});
