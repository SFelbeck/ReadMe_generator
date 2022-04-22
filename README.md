# ReadMe_generator

In this assignment I was tasked to create a ReadMe generator in Node.js. Which also means that this here will probably be my last ReadMe in this format!
I found this assignment to be much easier than a lot of the other assignments we have done lately, in particular because of an html generator group activity in class.
That being said there were still moments of difficulty. In particular I could not figure out how the license operator was supposed to work until a classmate had pointed me towards some website to link to that can handle that particular issue. I also came across an unexpected error where the generated ReadMe included the indentation of the javascript file, preventing full operation. While looking for a solution I noticed that similar projects did not have the same problem, leaving me to wonder why this was happening, though the solution was to simply remove the indentation in the js file.

The two main steps of this project were to create a series of objects using inquirer and then to plug those objects into a const string the held the code for the generated readme. All that was left to do afterwards was to use the fs module to generate the actual readme.

<a href="https://drive.google.com/file/d/1-kmLr3lqFP2b2LRURUqaBIg6LdTHWmch/view">You can find a video walkthrough here!</a>
