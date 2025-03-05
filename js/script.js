//Element selectors
const buyButtonElements = document.querySelectorAll('.buy');
const displayElement = document.querySelector('.text-box');
const inventoryElement = document.querySelector('.inventory');
const itemElement = document.querySelector('.items');

// console.dir(inventoryElement);

//variables
const player = {
    companyName: '',
    currentTool: 0,
    currentMoney: 1000000,
    inventory: [
        {
                name: 'Teeth',
                amount: 0,
                toolCost: 1,
                profit: 1,
            }, 
        {
                name: 'Rusty Scissors',
                amount: 0,
                toolCost: 5,
                profit: 5,
            }, 
        {
                name: 'Push Lawnmower',
                amount: 0,
                toolCost: 25,
                profit: 50,
            }, 
        {
                name: 'Battery Lawnmower',
                amount: 0,
                toolCost: 250,
                profit: 100,
            }, 
        {
                name: 'Unpaid Interns',
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
            console.log('here')
            itemElement.children[0].textContent = `Teeth: ${player.inventory[0].amount}`;

        } else {
            const msg = document.createElement('p');
            msg.textContent = `You do not have enough money to buy ${player.inventory[0].name}`
            displayElement.append(msg)
        }
    }
    if(event.target.parentElement.classList.contains('scissors')){
        if(player.currentMoney >= player.inventory[1].toolCost){
            player.inventory[1].amount += 1;
            player.currentMoney -= player.inventory[1].toolCost;
            if(!itemElement.querySelector('.scissors')){
                const scissors = document.createElement('div');
                scissors.textContent = 'Scissors: 1';
                scissors.classList.add('scissors');
                itemElement.append(scissors);
            } else {
                itemElement.querySelector('.scissors').textContent = `Scissors: ${player.inventory[1].amount}`;
            }

        } else {
            const msg = document.createElement('p');
            msg.textContent = `You do not have enough money to buy ${player.inventory[1].name}`
            displayElement.append(msg)
        }
    }
    if(event.target.parentElement.classList.contains('push-mower')){
        if(player.currentMoney >= player.inventory[2].toolCost){
            player.inventory[2].amount += 1;
            player.currentMoney -= player.inventory[2].toolCost;
            if(!itemElement.querySelector('.push-mower')){
                const pushMower = document.createElement('div');
                pushMower.textContent = 'Push Mower: 1';
                pushMower.classList.add('push-mower');
                itemElement.append(pushMower);
            } else {
                itemElement.querySelector('.push-mower').textContent = `Push Mower: ${player.inventory[2].amount}`;
            }

        } else {
            const msg = document.createElement('p');
            msg.textContent = `You do not have enough money to buy ${player.inventory[2].name}`
            displayElement.append(msg)
        }
    }
    if(event.target.parentElement.classList.contains('gas-mower')){
        if(player.currentMoney >= player.inventory[3].toolCost){
            player.inventory[3].amount += 1;
            player.currentMoney -= player.inventory[3].toolCost;
            if(!itemElement.querySelector('.gas-mower')){
                const gasMower = document.createElement('div');
                gasMower.textContent = 'Gas Mower: 1';
                gasMower.classList.add('gas-mower');
                itemElement.append(gasMower);
            } else {
                itemElement.querySelector('.gas-mower').textContent = `Gas Mowers: ${player.inventory[3].amount}`;
            }

        } else {
            const msg = document.createElement('p');
            msg.textContent = `You do not have enough money to buy ${player.inventory[3].name}`
            displayElement.append(msg)
        }
    }
    if(event.target.parentElement.classList.contains('interns')){
        if(player.currentMoney >= player.inventory[4].toolCost){
            player.inventory[4].amount += 1;
            player.currentMoney -= player.inventory[4].toolCost;
            if(!itemElement.querySelector('.interns')){
                const interns = document.createElement('div');
                interns.textContent = 'Interns: 1';
                interns.classList.add('interns');
                itemElement.append(interns);
            } else {
                itemElement.querySelector('.interns').textContent = `Interns: ${player.inventory[4].amount}`;
            }

        } else {
            const msg = document.createElement('p');
            msg.textContent = `You do not have enough money to buy ${player.inventory[4].name}`
            displayElement.append(msg)
        }
    }
}

const selectItem = (event) => {

}

//Event listeners
for(let button of buyButtonElements) {
    button.addEventListener('click', handleBuy);
}

itemElement.addEventListener('click', selectItem);