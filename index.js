console.log("Welcome to play WHOKNOWME?");
console.log(".............................................")

var readlineSync = require('readline-sync');
var userName = readlineSync.question('May I have your name? ');

console.log("Hi " + userName + ", are you ready to play how well you know MANSI ?");

console.log("...........................................")

var score = 0;
function play(question,answer){
  var userAnswer = readlineSync.question(question);
  if (userAnswer == answer){
    console.log("Bingo! You are right");
    score = score + 1;
  }
  else{
    console.log("Oops! You are wrong");
    score = score + 0;
  }
  console.log("**************************************")
  console.log("Your Score is: " + score);
};

var Question = [{
  question: `what is the correct spelling of my name? 
             a: Mansi Shrivastava
             b: Manshi Srivastava
             c: Mansi Srivastava \n `,
  answer: "c"
}, {
  question: `which one will i choose first?
             a: coffee
             b: chai
             c: Green Lays \n`,
  answer: "c"
}, {
  question: `what will i prefer? 
             a: sunrise
             b: sunset \n`,
  answer: "b"
}, {
  question: `what will i do if i am mad?
             a: fight
             b: dont talk
             c: stays calm \n `,
  answer: "b"
}, {
  question: `what kind of person i am? 
             a: boring
             b: happening
             c: moody \n`,
  answer: "c"
}
]

for (i=0 ; i<Question.length; i++){
  play(Question[i].question,Question[i].answer);
}

