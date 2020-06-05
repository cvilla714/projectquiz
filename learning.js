//1.0 i am storing all of the correct answer in an array
const correctAnswers = ["B", "B", "B", "B"];

//1.1 here is how i can grab the form by using the class attached to it
const form = document.querySelector(".quiz-form");

//1.2 here i am creating the add event listener
//remember the way to construct this is form + dot + addventlistener and inside the parenthesis i will add the event i want to listen to
//in this case i am listening when the submit button is clicked , the event is the event that is happening when the submit button is clicked
form.addEventListener("submit", (event) => {
  //1.3 here i am preventing the page to refresh
  event.preventDefault();

  //1.4 i am creating the variable that will hold and add the scores for the correct answers
  let score = 0;

  //1.5 this is the array that will grab the values of each answer from the quiz , so basically if user choose A or choose B
  //also this question names are coming from here <input type="radio" name="q1" value="A" checked /> from the name attribute i assigned
  //if i would have used name="tomechichi" that's what the i would have use as the name here form.tomechichi.value
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

  //checking the answers
  //1.6 i am creating the forEach loop . Remember the way to create it is by using the element you want to iterate +dot+ forEach
  //then inside the parenthesis i need to call the first parameter for each iteration and the second is the index position of each answer evaluated
  userAnswers.forEach((answer, index) => {
    //here i am checking the answers from each loop to the correctAnswer that is holding all of correct answer the way it works is simple
    //it will compare the position of the answer to the position of the correctanswer as well so basically if the user choose A on the first question

    //1.7 is wrong , if the user choose A on the second question is wrong again and so on becaus the correct answers are all B
    if (answer === correctAnswers[index]) {
      //1.8 if the answer is correc then the socre will start at 25 for the first answer if it's correct again for the second time it will add 25 more
      //and so on until it reaches all the way to 100
      score += 25;
    }
  });

  //1.9 here i am loggin back to the console the result of each answer sumbitted
  console.log(score);

  //1.10 i will display the text and score of the test to the web page

  //1.10.1 first is to grab the class result where the div is that will display score i was right on this using document.queryselector(".result")
  //is coming form here <div class="result py-4 d-none bg-light text-center">
  let showthis = document.querySelector(".result");
  //here i am grabbing another class inside the result class so in other words once i grab the class result i can the grab any other element inside from within
  //basically any element from inside here in my case i need to change the span class because it contains the message to be displayed
  /*<div class="result py-4 d-none bg-light text-center">
  <div class="container lead">
    <p>You are <span class="text-primary display-4 p-3">0%</span> ninja</p
  </div>
</div>*/

  //1.11 here we are inserting the method that will take us to the top of the page once the results are posted
  //now it will take the user to the top once the submit button as been clicked so we can check the results.
  scrollTo(0, 0);

  //1.10.2 i am grabbing the span class here  and over writting the text inside for the result of the score
  showthis.querySelector("span").textContent = `${score}%`;

  //1.10.3 here i am removing the class d-none from the class that i grab before remember that showthis is the same as let showthis = document.querySelector(".result");
  //so in other words i anm grabbing the class results and removing the class d-non
  showthis.classList.remove("d-none");

  //setting the setinterval to animate the score

  let solution = 0; // 1.12  create the variable that will hold the counter

  const timethis = setInterval(() => {
    //1.13 create the variable that will hold the setInterval method

    //1.14 execute what i want . i am grabbing the div with the class result basically this div /*	<div class="result py-4 d-none bg-light text-center">
    //and from inside this div i am grabbing the span that show the text for the result is this line of code  <p>You are <span class="text-primary display-4 p-3">0%</span> ninja</p>
    //and i am changing the text content of the score to this solution i am not using the socre as the previously used because what we are going to animate is the solution variable
    //i created before is like the counter i need to use the name of the counter here not the score otherwise the animation won't happen
    showthis.querySelector("span").textContent = `${solution}%`;

    //1.15 here i am creating the condition so once the solution equals the score then for it to stop
    if (solution === score) {
      //1.16 here is am clearing the setinterval that was asssinged to the variable timethis
      clearInterval(timethis);

      //1.17 here i am making the else condition so if the solution hasn't match the score to keep adding one to the output
    } else {
      //1.18 i am making the solution increase by 1 on every time it checks the answer so if it has one correct answer display 25% it it has 2 show 50% and so on
      solution++;
    }

    //1.19 i am setting how fast i want the animation to look this set the animation to start counting over and over after every 20 milliseconds
  }, 20);

  //note i could have also created this variable let showthis = document.querySelector(".result"); and put it outisde the function and it would have still work.
});

//understanding window object
//the window object logs everything you do front end , you don't need to add window.console.log() because is implicit
//for example if i were to use document.queryselector as well here are some examples
//10.4
window.console.log("hello");
//is the same as if i were to type console.log("hello")
console.log("hello");

//10.5 it works the same with methods
console.log(document.querySelector("form"));
window.console.log(document.querySelector("form"));
//there are other methods like the setTimeOut that will display a message after a certain amount of time
//and is always provided in milisecons to 1000 is the equivalent to  1 sec

//10.6 here i am setting the time out method it takes a parameter and at the end you will set up the time
setTimeout(() => {
  //10.6.1 here i am doing what i want the code to execute
  alert("hello, ninjas");

  //10.7 here i am setting how many seconds after the page load i want to display my message
}, 3000);

//10.8 last thing we could also use this method scrolTo(X,Y) it takes two paremeters the horizontal(X) and vertical positon(Y)
//scrollTo(0,0) this will take you to the top of the page.

//how to use the setInterval()

//this is a method inside the windows objec and what it does is basically to keep on firing the same function over and over again
//the method setTimeout() will only fire the once the setInterval() will keep on firing over and over here is and example

//steps to create the setInterval
//1.0 create the method by typing setInterval(()=>{code you want to execute },x amount of times )
//setInterval(() => {
//1.1 creat the method
//console.log("hello"); //1.2 here i am executing the code
//}, 1000); // 1.3 it will keep on logging back tgo the cosole the string hello every second

//to stop the setInterval i need to store the interval method into a variable and then this are the steps

let i = 0; //1.4.1 i have to set the counter equals to 0 otherwise i will get an error and the code will run forever

//1.4 i create the variable that will store the setinterval remember to construc it you need setInterval(()=>{execute code },repeat x amount of times);
const timer = setInterval(() => {
  console.log("time is up"); // 1.5 this is what i want to be logged to the console

  i++; //1.6 this is the counter that will increment by one on every second that it runs or fire the function
  if (i === 5) {
    // 1.7 i am creating the condition that once the counter is equals to 5 then stop
    clearInterval(timer); //1.8 this is how i make it stop
  } // 1.9 this needs to be here  to close the if statement
}, 1000); //1.10 the function will keep repeating every second.
