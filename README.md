<!-- # Browser Game -->
//march5,2025//aj//

//////------title-----//////

The purpose of this README is to better understand the code that Kyle wrote. A lot of the material went a bit over my head, but he and John did a great job explaining things when they were not locked in. These details are too in depth to COMMENT on the regular files.

I would like to use this as a refernce to myself for future solutions when facing issues.

My classmate - John, has influenced me to document my work in these README files AND utilize COMMENTS to better understand it for myself and other developers.








         
///////------html.index------///////

In the head of our boiler plate, we have our script.js

The script runs after the page is fully parsed. 

(I recently read that it might be better to put our script in the body instead of the head for better browser performance.)

The game is inside a div class "main-container". this class holds our header and all of our child div classes.

div children include: game-body, upper-game, inventory, items, current-tool, our tools, current-money, lower-game, text-box,game-text,button-box, mow-button & restart-button. (these are all CLASSES including an un-ordered list in our game-text)


there are INTERACTIVE BUTTONS (buy,sell,mow,restart) which is handled by our script.js
the game starts the user with the 'teeth' tool and $3 currentMoney.








///////-------style.css------///////

The file/sheet allows us to customize what the user sees and interacts with in their browser.

The styling of general tags is fairly simple and straight forward. just add the tag with a curly brace AFTER. work from inside the tag out.

However, the syntax differs with classes and id's. we use a dot BEFORE class-name THEN curly brace, work from inside the tag out. If these were id's we would replace the dot with the hashtag. I'm still not too familar with the effects of key values for position and display. The more practice I get with CSS and utilizing the effects from the INSPECTOR TOOL for individual keys will help me grow as a developer.









This is where things get complex and where I currently need to focus my attention. I'm using chatgpt to help break down these functions so I can translate what is happening in hopes of writing this level of advanced code on my own.


//////------script.js------//////

//Element selectors (lines 1-10) - 

We are defining our variables using CONST - these variables should never change, which is why we didnt use LET.

We are selecting DOM elements using document.querySelectorALL for ('.buy) && ('.sell') 

We are selecting DOM elements using document.querySelector for the rest of our variables.  

After studying the difference in selector and selectorAll - I think kyle used selectorall for the .buy and .sell buttons because there are multiple buy and sell buttons on the page. The script MUST attach EVENT LISTENERS to each button individually.



//variables (lines 15-57) - 

const player stores our game-related data (dayCount, companyName, currentTool, currentMoney & inventory)

deep dive: inventory - this gives us a list of available tools, their class names, amount owned & profit




//Functions 1/6 (lines 60-91) - 

This function handles the purchasing of tools in the game when the user clicks on the tools buy button.

const handleBuy = (event) => -(This is an ARROW function that takes an EVENT parameter, when the user clicks on the tools buy button.)

for (let item of player.inventory) -(loops throught the player.inventory ARRAY, which contains the tools)

(line 64) - if(event.target.parentElement.className == item.class) -(event.target refers to the button that was clicked, .parentElement gets the div wrapping the button with the tools name, item.class is the class name of the current tool in the loop, checks if the clicked button belongs to the current tool in the loop.)

(line 65-69) - if(player.currentMoney < item.toolCost) -(if the player does not have enough money, a message is displayed, the function stop execution for this tool and does not proceed.) 

(line 72-76) - if(!itemElement.querySelector( event.target.parentElement.classname)) -(if the tool isnt already in the inventory display, it creates a new div for it, querySelector checks if the item already exists inside the .items class)

(line 78-81) - item.amount += 1; -( this increases the count of the purchased item, then subtracts the tools cost from the players money, and updates the money display)

(line 83) - finds the div of the purchased tool inside the inventory and updates its text to show the new quantity for the tool.

(line 84-86) - creates a new message confirming the purchase, calls addText(msg); to display the message in the game log.



//functions 2/6 (lines 93-130) -

const handleSell = (event) => -(This is an ARROW function that takes an EVENT parameter, when the user clicks on the tools sell button.)

(line 95) - if(!itemElement.querySelector(.{event.target.parentElement.className})) -(event.target refers to when the user clicks the sell button, event.target.parentElement refers to the div wrapping the button which contains the tool name and buttons, .parentElement.className gets the tools class, itemElement.querySelector checks if the tool already exists inside the players inventory display, if the tool does not exist the function creates a message, calls the addText(msg) and exits the function.)

(lines 101-102) - loops through player.inventory, checks if the clicked bnutton's parent class matches an inventory item.

(lines 104-109) - if the player tries to sell their last teeth, a warning message because teeth is the DEFAULT TOOL and removing it would screw things up. break; stops the loop, preventing the sale.

(lines 111-113) - subtracts 1 from the item count, gives the player back HALF of the original purchase cost.

(lines 115 - 117) - displays a message showing how much money the player receuved for selling the tool.

(lines 119-130) - if the player has 0 of that tool left - it is removed from the inventory display, the current tool is reset to teeth, and updates the inventory count and money display.


//Functions 3/6 (lines 132-146) -

const selectItem = (event) => -(This is an ARROW function that takes an EVENT parameter, when the user clicks the inventory.)

(line 133) - kyle used console.log every other minute to test different things, I need to utilize this tool more in my inspector tool.

(line 134-135) - initilizes i=0, hwhich is used to track the index of the tool, then loops through the player.inventory array that contains tools.

(line 136) - compares the class of selected item with the CLASS of the current tool in the loop, if there is a match, the player has clicked a valid tool.

(line 137) - updates the player.currentTool of the index (i) of selected tool, meaning the user is using the select tool for mowing.

(line 138) - updates the display to show which tool is in use

(line 139-141) - creats a new li element, displays confirmation of tool selected

(line 143) - adds to index so that the next item in player.inventory has the correct index



//Functions 4/6 (lines 148-171) -

const mowGrass = (event) => -(This is an ARROW function that takes an EVENT parameter, when the user clicks the inventory.)

(line 150) - each time the player mows, the day count increases by 1, which tracks how many days the player has been working.

(lines 152-153) - this adds profit amount of the currently selected tool to player.currentMoney, and updates the display to show the new amount.

(lines 155-157) - this creates a new li element and displays the text content message.

(line 159) - this determines if the user has won bu determining if they own the .interns and their money is GREATER than $1000.

(lines 160-166) - disables all buy, sell, and the "mow a lawn" button to prevent further actions after winning.

(lines 167-169) - this creates a new message declaring the player has won and the message is displayed in the game log.


//Functions 5/6 (lines 173-192) - 

const resetGame = (event) => -( This is an ARROW function that takes an EVENT parameter, when the user clicks the inventory.)

(line 176) - this clears the players inventory and re-adds 'teeth' as the starting tool, uses .innerHTML= to directly modify the inventory display.

(lines 178-179) - thhis sets the player.currentMoney back to the DEFAULT amount of $3, and updates the display to reflect the reset money amount.

(line 181) - this clears the text box where game messages are displayed, and resets it with the original welcome message.

(lines 182-183) - this sets the current tool back to the DEFAULT 'teeth' (player.currentTool = 0), and updates the display to show that the current tool is teeth.

(lines 185-192) - this loops through all the buy and sell buttons and reattaches event listeners, then re-enables the mow a lawn button, and this is important because the event listeners were removed AFTER the user won the previous game.


//Functions 6/6 (lines 196-202) - 

function addtext(text) -(tjos os a regular declaration and NOT an ARROW function like the previous 5 functions, takes one parameter(text), which represents an HTML elecemnt li containing the message)

(line 198) - gameText is a referance to the ul class="game-text", which stores the games messages, .prepend(text) adds the new message to the beginning of the list and ensures that the most recent message appears first.

(line 199-202) - gameText.childElementCount counts how many li elements are in the message log and if there are 3 or more messages, it removes the oldest one, .removeChild(gameText.lastChild deletes the oldest message in the list.)






//event listeners (lines 205-219) - 

(lines 206-208) - buyButtonElements is a NodeList containing all the buy buttons, this loop goes through each buy button and ataches an event listener. when clicked, it triggers the handleBuy function.

(lines 210-212) - sellButtonElements is a NodeList containing all sell buttons, this loop attaches an event listener to each sell button, when clicked, it triggers the handleSell function. 

(line 214) - itemElement refers to the inventory section div class="items". When any item inside the inventory is clicked, it triggers the selectItem function.

(line 215) - mowButtonElement is mow a lawn button, clicking it triggers the mowGrass function.

(line 216) - resetButtonElement is the sestart button, clicking it triggers the resetGame function. 

(lines 218-219) - a prompt appearsm asking the user to enter a company name, the entered name is stored in player.companyName and updates the h1 title to include the players company name. 





ok im going to bed
