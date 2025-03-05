//Element selectors
const buyButtonElements = document.querySelectorAll('.buy');
const sellButtonElements = document.querySelectorAll('.sell');
const displayElement = document.querySelector('.text-box');
const inventoryElement = document.querySelector('.inventory');
const itemElement = document.querySelector('.items');
const moneyElement = document.querySelector('.current-money');
const toolElement = document.querySelector('.current-tool');
const mowButtonElement = document.querySelector('#mow-button');
const resetButtonElement = document.querySelector('#restart-button');

// console.dir(inventoryElement);

//variables
const player = {
    companyName: '',
    currentTool: 0,
    currentMoney: 10000,
    inventory: [
        {
                name: 'Teeth',
                class: 'teeth',
                amount: 1,
                toolCost: 1,
                profit: 1,
            }, 
        {
                name: 'Rusty Scissors',
                class: 'scissors',
                amount: 0,
                toolCost: 5,
                profit: 5,
            }, 
        {
                name: 'Push Mower',
                class: 'push-mower',
                amount: 0,
                toolCost: 25,
                profit: 50,
            }, 
        {
                name: 'Gas Mower',
                class: 'gas-mower',
                amount: 0,
                toolCost: 250,
                profit: 100,
            }, 
        {       
                name: 'Unpaid Interns',
                class: 'interns',
                amount: 0,
                toolCost: 500,
                profit: 250,
            }, 
    ]
}
//Functions
const handleBuy = (event) => {
    if(event.target.parentElement.classList.contains('teeth')){
        if(player.currentMoney >= player.inventory[0].toolCost){
            player.inventory[0].amount += 1;
            player.currentMoney -= player.inventory[0].toolCost;
            moneyElement.textContent = `Current Money: $${player.currentMoney}`
            const msg = document.createElement('p');
            msg.textContent = `You purchased ${player.inventory[0].name}.`
            displayElement.append(msg)
            if(!itemElement.querySelector('.teeth')){
                const scissors = document.createElement('div');
                scissors.textContent = 'Teeth: 1';
                scissors.classList.add('teeth');
                itemElement.append(scissors);
            } else {
                itemElement.querySelector('.teeth').textContent = `Teeth: ${player.inventory[0].amount}.`;
            }
        } else {
            const msg = document.createElement('p');
            msg.textContent = `You do not have enough money to buy ${player.inventory[0].name}.`
            displayElement.append(msg)
        }
    }
    if(event.target.parentElement.classList.contains('scissors')){
        if(player.currentMoney >= player.inventory[1].toolCost){
            player.inventory[1].amount += 1;
            player.currentMoney -= player.inventory[1].toolCost;
            moneyElement.textContent = `Current Money: $${player.currentMoney}`
            const msg = document.createElement('p');
            msg.textContent = `You purchased ${player.inventory[1].name}`
            displayElement.append(msg)
            if(!itemElement.querySelector('.scissors')){
                const scissors = document.createElement('div');
                scissors.textContent = 'Rusty Scissors: 1';
                scissors.classList.add('scissors');
                itemElement.append(scissors);
            } else {
                itemElement.querySelector('.scissors').textContent = `Rust Scissors: ${player.inventory[1].amount}.`;
            }

        } else {
            const msg = document.createElement('p');
            msg.textContent = `You do not have enough money to buy ${player.inventory[1].name}.`
            displayElement.append(msg)
        }
    }
    if(event.target.parentElement.classList.contains('push-mower')){
        if(player.currentMoney >= player.inventory[2].toolCost){
            player.inventory[2].amount += 1;
            player.currentMoney -= player.inventory[2].toolCost;
            moneyElement.textContent = `Current Money: $${player.currentMoney}`
            const msg = document.createElement('p');
            msg.textContent = `You purchased ${player.inventory[2].name}`
            displayElement.append(msg)
            if(!itemElement.querySelector('.push-mower')){
                const pushMower = document.createElement('div');
                pushMower.textContent = 'Push Mower: 1';
                pushMower.classList.add('push-mower');
                itemElement.append(pushMower);
            } else {
                itemElement.querySelector('.push-mower').textContent = `Push Mower: ${player.inventory[2].amount}.`;
            }

        } else {
            const msg = document.createElement('p');
            msg.textContent = `You do not have enough money to buy ${player.inventory[2].name}.`
            displayElement.append(msg)
        }
    }
    if(event.target.parentElement.classList.contains('gas-mower')){
        if(player.currentMoney >= player.inventory[3].toolCost){
            player.inventory[3].amount += 1;
            player.currentMoney -= player.inventory[3].toolCost;
            moneyElement.textContent = `Current Money: $${player.currentMoney}`;
            const msg = document.createElement('p');
            msg.textContent = `You purchased ${player.inventory[3].name}`
            displayElement.append(msg)
            if(!itemElement.querySelector('.gas-mower')){
                const gasMower = document.createElement('div');
                gasMower.textContent = 'Gas Mower: 1';
                gasMower.classList.add('gas-mower');
                itemElement.append(gasMower);
            } else {
                itemElement.querySelector('.gas-mower').textContent = `Gas Mowers: ${player.inventory[3].amount}.`;
            }

        } else {
            const msg = document.createElement('p');
            msg.textContent = `You do not have enough money to buy ${player.inventory[3].name}.`
            displayElement.append(msg)
        }
    }
    if(event.target.parentElement.classList.contains('interns')){
        if(player.currentMoney >= player.inventory[4].toolCost){
            player.inventory[4].amount += 1;
            player.currentMoney -= player.inventory[4].toolCost;
            moneyElement.textContent = `Current Money: $${player.currentMoney}`
            const msg = document.createElement('p');
            msg.textContent = `You purchased ${player.inventory[4].name}`
            displayElement.append(msg)
            if(!itemElement.querySelector('.interns')){
                const interns = document.createElement('div');
                interns.textContent = 'Unpaid Interns: 1';
                interns.classList.add('interns');
                itemElement.append(interns);
            } else {
                itemElement.querySelector('.interns').textContent = `Unpaid Interns: ${player.inventory[4].amount}.`;
            }

        } else {
            const msg = document.createElement('p');
            msg.textContent = `You do not have enough money to buy ${player.inventory[4].name}.`
            displayElement.append(msg)
        }
    }
}

const handleSell = (event) => {
    //check that player has an instance of the item
    if(!itemElement.querySelector(`.${event.target.parentElement.className}`)){
        //display a message to the player if they do not have enough items
        const msg = document.createElement('p');
        msg.textContent = `You don't have enough of ${event.target.parentElement.className}`
        displayElement.append(msg)
    } else {

    for(let item of player.inventory){
        if(event.target.parentElement.className == item.class){
            //remove 1 count of the tool from the item list + update item display
            item.amount -= 1;
            //refund player half of inital tool cost
            player.currentMoney += item.toolCost / 2;
            //display a message to the player that they sold an item
            const msg = document.createElement('p');
            msg.textContent = `You sell one ${event.target.parentElement.className} for ${item.toolCost / 2}.`
            displayElement.append(msg)
            //update current money value + display with new value
            if(item.amount == 0){
                itemElement.querySelector(`.${event.target.parentElement.className}`).remove();
            } else {
                itemElement.querySelector(`.${event.target.parentElement.className}`).textContent = `${item.name}: ${item.amount}.`
                moneyElement.textContent = `Current Money: $${player.currentMoney}`
            }
        }
    }
   
    
    console.log('selling item');
    
    }
}

const selectItem = (event) => {
    console.log(event.target.className);
    if(event.target.classList.contains('teeth')){
        player.currentTool = 0;
        toolElement.textContent = `Current Tool: ${player.inventory[0].name}`
    }
    if(event.target.classList.contains('scissors')){
        player.currentTool = 1;
        toolElement.textContent = `Current Tool: ${player.inventory[1].name}`
    }
    if(event.target.classList.contains('push-mower')){
        player.currentTool = 2;
        toolElement.textContent = `Current Tool: ${player.inventory[2].name}`
    }
    if(event.target.classList.contains('gas-mower')){
        player.currentTool = 3;
        toolElement.textContent = `Current Tool: ${player.inventory[3].name}`
    }
    if(event.target.classList.contains('interns')){
        player.currentTool = 4;
        toolElement.textContent = `Current Tool: ${player.inventory[4].name}`
    }

}

//mow function

const mowGrass = (event) => {
    //update current money by tool profit amount
    player.currentMoney += player.inventory[player.currentTool].profit;
    moneyElement.textContent = `Current Money: $${player.currentMoney}`;
    //add text element to display with amount made + tool used
    const msg = document.createElement('p');
    msg.textContent = `You mowed some lawns using ${player.inventory[player.currentTool].name}, making $${player.inventory[player.currentTool].profit}.`
    displayElement.append(msg)
    //check if player currentMoney is > 1000 and unpaid interns are purchased, if so win game
    console.log(itemElement.querySelector('.interns'))
    console.log(player.currentMoney)
    if(itemElement.querySelector('.interns') && player.currentMoney > 1000){
        for(let button of buyButtonElements){
            button.removeEventListener('click', handleBuy);
        }
        mowButtonElement.removeEventListener('click', mowGrass);
        const msg = document.createElement('p');
        msg.textContent = `Congratulations! Off of the back of your unpaid interns ${player.companyName} has finally hit it big and opened up multiple sub-contractors. Now you'll never have to work again!\n You Win!`
        displayElement.append(msg)
    }
}

//reset game function
const resetGame = (event) => {
    //remove all items from inventory except 1 teeth
    itemElement.innerHTML = '<div class="teeth">Teeth: 1</div>';
    //reset money to $3 starting amount
    player.currentMoney = 3;
    moneyElement.textContent = `Current Money: $${player.currentMoney}`;
    //clear display of any text
    displayElement.innerHTML = `Day 0: Welcome to Landscaper! Struggle against the endless tides of grass in this exciting mowing game.`
    for(let button of buyButtonElements) {
        button.addEventListener('click', handleBuy);
    }
    mowButtonElement.addEventListener('click', mowGrass);
}

//Event listeners
for(let button of buyButtonElements) {
    button.addEventListener('click', handleBuy);
}

for(let button of sellButtonElements) {
    button.addEventListener('click', handleSell);
}

itemElement.addEventListener('click', selectItem);
mowButtonElement.addEventListener('click', mowGrass);
resetButtonElement.addEventListener('click', resetGame);

// player.companyName = prompt("Enter your company name!");
// document.querySelector('h1').textContent = `LandScaper: ${player.companyName} Edition`;