$(document).ready(function() {
  
  $("#getMessage").on("click", function() {
    var quotes = [{
  "author": "Steve Jobs",
  "quote": "Design is not just what it looks like and feels like. Design is how it works."
}, {
  "author": "Steve Jobs",
  "quote": "Innovation distinguishes between a leader and a follower."
}, {
  "author": "Albert Einstein",
  "quote": "Reality is merely an illusion, albeit a very persistent one."
}, {
  "author": "Albert Einstein",
  "quote": "If you can't explain it simply, you don't understand it well enough."
}, {
  "author": "Albert Einstein",
  "quote": "Strive not to be a success, but rather to be of value."
}, {
  "author": "Steve Jobs",
  "quote": "Your time is limited, so don’t waste it living someone else’s life."
}, {
  "author": "Bill Gates",
  "quote": "Success is a lousy teacher. It seduces smart people into thinking they can't lose."
}, {
  "author": "Albert Einstein",
  "quote": "Science without religion is lame, religion without science is blind."
}, {
  "author": "Henry Ford",
  "quote": "Whether you think you can or you think you can’t, you’re right."
}, { 
		"quote" : "The only sin is ignorance", 
		"author" : "Christopher Marlowe" 
	},
	{
		"quote" : "A man is his own easiest dupe, for what he wishes to be true he generally believes to be true", 
		"author" : "Demosthenes"
	},
	{
		"quote" : "A lie can travel halfway around the world while the truth is putting on its shoes", 
		"author" : "Mark Twain"
	},
	{
		"quote" : "Great minds discuss ideas; average minds discuss events; small minds discuss people", 
		"author" : "Eleanor Roosevelt"
	},
	{
		"quote" : "If you have a garden and a library, you have everything you need", 
		"author" : "Marcus Tullius Cicero"
	},
	{
		"quote" : "Truth comes out in wine", 
		"author" : "Pliny the Elder"
	},
	{
		"quote" : "Everything in the universe is within you. Ask all from yourself", 
		"author" : "Rumi"
	},
	{
		"quote" : "When I get a little money I buy books; and if any is left I buy food and clothes", 
		"author" : "Desiderius Erasmus"
	}]; // List of quotes to choose from 
    
      var random = Math.floor(Math.random() * quotes.length); // chooses random index from array
    
      function getQuote(input) {
        
        var quote = input[random].quote; // accesses quote from array
        var author = "- " + input[random].author; // gets author from array
        var paste = quote +"  " + author; // changes formatting for twitter 
        $(".message").hide().html(quote).css("font-size", "25px").fadeIn("slow"); // Creates fade in for dramatic effect
        $(".credit").hide().html(author).fadeIn("slow");
        $(".twitter-share-button")
          .attr("href", "https://twitter.com/intent/tweet?text=" + paste)
          .attr("target", "_blank"); // posts random quote and author to twitter 
      }
    getQuote(quotes); // Calls quote function
  });
});
