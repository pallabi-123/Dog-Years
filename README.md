# Dog-Years
https://www.codecademy.com/courses/introduction-to-javascript/projects/dog-years-javascript

<h1>Dog Years</h1>
<p>Dogs mature at a faster rate than human beings. We often say a dog’s age can be calculated in “dog years” to account for their growth compared to a human of the same age. In some ways we could say, time moves quickly for dogs — 8 years in a human’s life equates to 45 years in a dog’s life. How old would you be if you were a dog?

Here’s how you convert your age from “human years” to “dog years”:
</p>
<ul>
<li>The first two years of a dog’s life count as 10.5 dog years each.</li>
<li>Each year following equates to 4 dog years.</li>
<p>Before you start doing the math in your head, let a computer take care of it! With your knowledge of math operators and variables, use JavaScript to convert your human age into dog years.

If you get stuck during this project or would like to see an experienced developer work through it, click “Get Unstuck“ to see a project walkthrough video.
</p>

<ol>
<li>
Create a variable named myAge, and set it equal to your age as a number.

Write a comment that explains this line of code.
</li>

<li>
Create a variable named earlyYears and save the value 2 to it. Note, the value saved to this variable will change.

Write a comment that explains this line of code.
</li>

<li>
Use the multiplication assignment operator to multiply the value saved to earlyYears by 10.5 and reassign it to earlyYears.
</li>

<li>
Since we already accounted for the first two years, take the myAge variable, and subtract 2 from it.

Set the result equal to a variable called laterYears. We’ll be changing this value later.

Write a comment that explains this line of code.

</li>

<li>
Multiply the laterYears variable by 4 to calculate the number of dog years accounted for by your later years. Use the multiplication assignment operator to multiply and assign in one step.

Write a comment that explains this line of code.
</li>

<li>
If you’d like to check your work at this point, print earlyYears and laterYears to the console. Are the values what you expected?

Check off this task when you’re ready to move on.
</li>

<li>
Add earlyYears and laterYears together, and store that in a variable named myAgeInDogYears.

Write a comment that explains this line of code.
</li>

<li>
Let’s use a string method next.

Write your name as a string, call its built-in method .toLowerCase(), and store the result in a variable called myName.

The toLowerCase method returns a string with all lowercase letters.

Write a comment that explains this line of code.
</li>

<li>
Write a console.log statement that displays your name and age in dog years. Use string interpolation to display the value in the following sentence:

My name is NAME. I am HUMAN AGE years old in human years which is DOG AGE years old in dog years.
Replace NAME with myName, HUMAN AGE with myAge, and DOG AGE with myAgeInDogYears in the sentence above.

Write a comment that explains this line of code.
</li>

<li>
Great work! You can convert any human age to dog years. Try changing myAge and see what happens.

If you’d like extra practice, try writing this project without the *= operator.
</li>

// how old I am
let myAge = 18;
// early dog years
var earlyYears = 2;
earlyYears *= 10.5;
// setting the value for later years because we already accounted for the last two years.
let laterYears = myAge - 2;
// Multiply the laterYears variable by 4 to calculate the number of dog years accounted 
Save




 
