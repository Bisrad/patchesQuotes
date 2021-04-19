require('dotenv').config();
const twit = require('twit');
const _ = require('lodash');

const config = {
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
}

const T = new twit(config);


let patchesQuotes = [
  "I'm Patches. Unbreakable Patches.",
  "I am a knight of Catarina.",
  "Treasure...hmm. Always so close, yet so far...",
  "I'm in quite a pickle, indeed...",
  "Shame on you, you greedy guts.",
  "Thought you could outwit an onion?",
  "All's well that end well, right?",
  "Do you have business with me?",
  "Oh, I am sorry. That was my hand, as you know, but the deed, well, that was the armour's doing.",
  "Just a little trinket. Go ahead, it's yours now.",
  "You should know, I'm a kind of traveling merchant.",
  "Be more careful! By the gods, curiosity is going to kill you kittens.",
  "Some places are better left alone, you know.",
  "Have no fear, there's beauty in death.",
  "The heart of a lion. A model for the rest of us. A true friend, forever.",
  "We're just a couple of outcasts, let's make the best of it!",
  "Some things can't be divulged. Even between friends.",
  "Well, look at you. The luckiest man/lass in the world.",
  "I just got hold of some truly fine treasure. And for you, I'll practically give it away.",
  "I won't ask for thanks, but I certainly deserve it.",
  "Caught 'em up, every last one of 'em.",
  "Why me? Why me?! What did I ever do anyway!?",

];

let quote = _.sample(patchesQuotes);

function postTweet() {
  console.log('Patches just tweeted: ' + quote)
  T.post('statuses/update', { status: quote })
}

postTweet();