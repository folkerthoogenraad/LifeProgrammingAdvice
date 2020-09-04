
const quotes: string[] = [
   "Sometimes you just need a little extra <em>class</em>",
   "You might be stuck in a <em>loop<em>, but you can <em>terminate</em> it with a little <em>external</em> help",
   "Try to not ignore early <em>warning</em> signs",
   "Always make sure to <em>save enough<em>",
   "Your condition might not be as <em>black</em> or <em>white</em> as it seems",
   "The difference between <em>good</em> and <em>bad</em> can be just a few passing comments",
   "The difference between <em>positive</em> and <em>negative</em> can be just one character",
   "Mutual development sometimes results in <em>conflicts</em>, but solving the conflicts leads to <em>progress</em>",
   "After you <em>dump</em> its okey to wanna <em>die</em>",
];

function getRandomQuote(): string{
   let random: number = Math.floor(Math.random() * quotes.length);
   return quotes[random];
}

document.addEventListener("DOMContentLoaded", ()=>{
   const quoteElement = document.getElementById("quote");

   quoteElement.innerHTML = getRandomQuote(); 
});
