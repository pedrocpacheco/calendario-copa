# CS50-FINAL PROJECT: WORLD CUP CALENDER

#### Video Demo: <https://youtu.be/K6X5rOcA0DU>

#### Description: My final project is a website that shows the schedule of the games of the group stage of the world cup 22.

### Assets

The Assets folder is a folder that contains all the images I need to make my website.

I divided the images into types:

- Images "bg", which contains the background images;

- "icon" images that contain the flags of all the countries of the world cup

- And the image of the application logo

All were saved in .svg

### Index

First, let's talk about the index page.

- I started by pasting the basic tags that every HTML project needs to have;

- I imported the CSS from styles.css;

- I imported the ROBOTO font from the internet, since it is not available directly;

- When opening the body tag, I created a div tag that received the ID "app"

- I put the logo of my application, which says "World Cup Calender"

- I created 3 buttons, one yellow, one blue and one green. These will have the function of changing the application background and some colors.

- I created a main tag that received the ID "cards", as you can see, it is empty, because it will be filled in the Javascript tab.

- I put the JavaScript tag (main.js)

### Style.css

I started by putting the global characteristics of the page.

Then I customized each button that would be used to change the page colors

Soon after, I created the types of colors that my application would have, divided them into 3:

- Yellow
- Blue
- Green

Each one had a different background image (with the respective color), in addition, each one changes the colors of the title and the end line of the cards of the games.

After that, I started customizing the entire page and the cards, making them more beautiful.

### Main.js

Oh, here comes the interesting part.
As seen in the HTML part, I left everything to JavaScript because with it things would be done in easier and more dynamic ways, I'll explain how I did it:

- To start, I created a function called "creategame", it receives a player1, a time, and a player 2. With it I can create the HTML skeleton of a game more easily, where the only information changed is the name of the country (which will be between the "icon-" and ".svg", thus causing your image to be printed), and the game time. This makes it much easier to create the amount of games present.

- After that, I created a "createCard" function, this one receives a date, a day of the week and the games. The card is the junction of several games with different times, but that will take place on the same day. Creating cards is much easier that way, its structure remains the same, only the day and the games themselves change.

- Then I created the button functions. Each of them will change the class of the <body> tag in the HTML, thus causing the application's colors to change relative to the pressed button.

- And then, I started to add the HTML of the id "#cards" (this id refers to the main tag in the HTML), putting all the games of the group stage of the world cup in a more dynamic and easy way.
