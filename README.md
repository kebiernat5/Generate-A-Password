# Generate-A-Password
An application to generate random passwords using JavaScript, CSS, and HTML
## Web Link
The link for this application can be found at https://kebiernat5.github.io/Generate-A-Password/index.html

## Project Objective

Picture this: It's 3021 and we're living in a dystopian society and all of the computers have been destroyed in a devastating world war that wiped out all of civilization as we know it. A time traveling alien brings us one computer to hook up to the phone lines a la dial-up-internet style. Because we've lost all of our previous work, the time traveler painstakingly teaches me to write code for this ancient machine so that she can go back to her time. One of the first things we do to make this system secure, is create a password generator to make sure we're truly encrypting all information stored on this drive. This is important because the fascist government in power has super secret powerful computers that are capable of decrypting almost any information. In order to keep the identity of this alien time traveler, the resistance movement I'm a part of, and my personal identity a secret, I need to be successful in my mission; the stakes for this mission couldn't be higher. This password generator will help keep all of our plans and identities to overthrow the authoritarian government secure, This is the story of how that password generator was made...

Ridiculous hypothetical story aside, this assignment involved the following:

I've been tasked with writing the logic JavaScript code for a password generator. The HTML file was pre-written for me, my job was to write the code to make the button work when interacting with a user.

One of the first pieces of the code I wrote was the function of passwordOptions which creates the user prompts. This sets up the booleans for the user to include the length of the password and which groups of characters they need to use to satisfy their password requirements by opening a pop-up window so that the user can either confirm or cancel their specific requirements.

![Screen Shot](https://github.com/kebiernat5/Generate-A-Password/blob/main/Password-Options.png?raw=true)

The next piece of the puzzle was to create my four arrays. I did this by creating variables and then using square brackets and listing every character necessary for each array and was able to give the variables that I had already named in the booleans and prompts the values necessary to make them true.

Then I used the precreated writePassword function which pulls the passwordOptions and the generatePassword functions to create the password.

I then created a superArray using a series of if commands which concats the arrays based on whether or not the user chooses to use that set of characters in their password. For example, if the user chooses not to include numbers, then numbers are not included in the generated password. immediately following that is the for loop which pulls together all of the variables within the requested number of characters and uses the getRandomItem function to scramble the chosen variables from the arrays chosen which is defined as the variable superArray. The return password command populates the newly generated password into the display box on the page.

![Screen Shot](https://github.com/kebiernat5/Generate-A-Password/blob/main/Super-Arrays.png?raw=true)

Above each section of code is also a commented out pseudo code explaining that section in a granular way.






