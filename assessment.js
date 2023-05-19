/* Problem 1 */
/* Skill: Git`
You want to grow a new branch from any commit. Identify the code you will use to swtich to "HEAD-5" and create a branch named 'testbranch'
*/

// checks out new branch called testbranch from 5 commits behind
`git checkout -b testbranch HEAD~5`;

/* Problem 2 */
/*Skill: React, API call  
You are creating an API that calls an application in ReactJS. The application allows the fetching of data from the following endpoint. 

API ENDPOINT: https://www.reddit.com/r/react.json

complete the code as per the given instructions:
*/

import React from "react";
import * as ReactDOM from "react-dom";

class APICaller extends React.Component {
  callApi() {
    //#1 Implement a fetch method with the given API ENDPOINT
    fetch("https://www.reddit.com/r/react.json")
      .then((result) => {
        //#2 Return the result in json format
        return result.json();
      })
      .then((jsonData) => {
        //#3 Print/log the jsonData in the console of the browser
        console.log(jsonData);
      });
  }

  render() {
    return (
      <div>
        <button
          //#4 Implement an onCLick functionality to the button such that it calls the callApi() function when it is clicked.
          // YOUR CODE HERE
          onClick={this.callApi}
        >
          Call the API now.
        </button>
      </div>
    );
  }
}

ReactDOM.render(<APICaller />, document.getElementById("root"));


/* Problem 3 */
/*Skill: recursion
Please write an explanation of recursive functions where your audience is a beginner learner with knowledge of basic JS functions.

Please write an example of a recursive function, and comment each line 
*/
/*EXPLANATION HERE (1 paragraph) */

function myRecursiveFunction() {
  //YOUR CODE WITH COMMENTS HERE
}

/* Problem 4 */
/* Skill: algorithms 
Please write an explanation for an introduction to sorting algorithms. 
Write an example of Bubble Sort and comment each line of your code 
with explanation
*/

/* Sorting algorithms intro explanation HERE (1-2 paragraphs) */

/*Bubble sort example HERE*/

/* Problem 5 */
/*Skill: Leetcode Algorithms
solve the following leetcode in JavaScript: 

https://leetcode.com/problems/house-robber/

and paste your solution here. Please comment each line of your code to explain it, and be prepared to explain in the follow up interview.
*/

/* Problem 6 */
/*Skill: Leetcode Algorithms
solve the following leetcode in JavaScript: 

https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/

and paste your solution here. Please comment each line of your code to explain it, and be prepared to explain in the follow up interview.
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

// renamed the parameters for better readability
var longestSubstring = function (substring, minLength) {
  // creating a map to log the frequency of how many times a single letter occurs in the substring
  let map = new Map();

  // looping over the substring
  for (const letter of substring) {
    // we will 'get' the letter and store it
    // if the letter is null or undefined, we will simply store '0'
    const frequency = map.get(letter) ?? 0;
    // set the 'letter' key and increases the 'frequency' value by 1
    // so it could look like
    // {
    //    "a" : 2,
    //    "b" : 1
    // }
    map.set(letter, frequency + 1);
  }

  // the tasks require that we add the values that are equal to or greater than the minLength
  // so if minLength is 2, each letter needs to be 2+ to be added to the total
  let total = 0;

  // we will deconstruct the map, which currently has a {letter:frequency} key/value pair
  // by deconstructing, we can access the key and the value BUT we are only using frequency
  // so we will add an underscore before 'letter' to indicate it is not to be manipulated or accessed
  for (const [_letter, frequency] of map) {
    // here is where we check if frequency is greater than or equal to the minLength
    if (frequency >= minLength) {
      // if so, we are allowed to add the frequency to the total
      total += frequency;
    }
  }
  
  console.log(total);
  return total;
};

longestSubstring("ababb", 2);



/* Problem 7 */
/*Skill: SQL
Please fork and complete this SQL exercise: 
https://gist.github.com/harrisonmalone/e06ea120532e5cd323ef0b0b379fa4d6

LINK TO YOUR REPO HERE
*/

/* Problem 8 */
/*Skill: React
Explain state management and lifting state in React. Please include the difference between Redux and Context API. Your audience is a beginner learner with an understanding of React components, props and basic state. 

//Your explanation HERE
*/

/* Problem 9 */
/* 
Skill: Node/Express

How would you explain what Node and Express do to a beginner learner with no experience in server side programming?

Your explanation HERE (2 paragraphs)
*/

/* Problem 10 */
/*Skill: JavaScript Objects + Classes
Complete instructions in the cardGame.js file
*/
