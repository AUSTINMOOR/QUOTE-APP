const person = document.getElementById('person');
const quote = document.getElementById('quote');
const generateBtn = document.getElementById('generate');



const quotes = [
{quote: ' "The only thing we have to fear is fear itself."', person: '-Franklin D. Roosevelt' },
{quote: '"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that."', person: '-Martin Luther King Jr.' },
{quote: '"Do one thing every day that scares you."', person: '-Eleanor Roosevelt' },
{quote: '"Well done is better than well said."', person: '-Benjamin Frankli' },
{quote: '"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart."', person: '-Helen Keller' },
{quote: '"It is during our darkest moments that we must focus to see the light."', person: '-Aristotle' },
{quote: '"Do not go where the path may lead, go instead where there is no path and leave a trail."', person: '-Ralph Waldo Emerson' },
{quote: '"Be yourself; everyone else is already taken."', person: '-Oscar Wilde' },
{quote: 'You will face many defeats in life, but never let yourself be defeated.', person: '-Maya Angelou' },
{quote: 'Go confidently in the direction of your dreams! Live the life you have imagined.', person: '-Henry David Thoreau' },
]


const  generateQuote = ()=>{
  const random = Math.floor(Math.random()*quotes.length);

  quote.innerHTML = quotes[random].quote;
  person.innerHTML = quotes[random].person;

}
generateBtn.addEventListener('click', generateQuote);