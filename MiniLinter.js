let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

const storyWords = story.split(' ');
console.log(storyWords.length);
console.log(storyWords);
console.log(storyWords.join(" "))
let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let betterWords = storyWords.filter(word => 
     !unnecessaryWords.includes(word))
    
     console.log(betterWords.length);
     console.log(betterWords);
     console.log(betterWords.join(" "));

let overusedWords = ['really', 'very', 'basically'];

let reallycount =0;
let verycount =0;
let basicallycount = 0;
for ( word of betterWords){
  if (word === 'really'){ reallycount++}
  else if (word === 'very'){ verycount++}
  else if (word === 'basically'){ basicallycount++}
}

let sentences = 0;
storyWords.forEach(word => {
  if (word[word.length-1] === '.' || word[word.length-1] === '!') {
    sentences+=1;
  }
});

console.log('words of paragrapgh '+ storyWords.length);
console.log('sentences of paragraph ' +sentences);
console.log('no. of really ' +reallycount);
console.log('no. of very' +verycount);
console.log('no. of basically '+basicallycount);
 console.log(betterWords.join(' '));

/// log info through function
const logInfo = (param1, param2, param3) => {
    console.log('Word count: ' + param1);
     console.log('sentences count: ' + param2);
      console.log(' no. of really ' + param3);

};
logInfo(storyWords.length , sentences , reallycount);



