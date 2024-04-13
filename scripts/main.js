let Game = {
    mana: 0,
    manaThisAscension: 0,
    manaAllTime: 0,
    upgradesBought: upgradeList.generateBoughtList(),
}

/* onload
(function() {
    document.getElementById('mana-number').innerHTML = mana;
})();
*/


/*
document.getElementById('increase-mana').addEventListener('click', function() {
    increaseMana(1);
})
*/

function updateView() {
    document.getElementById('mana-number').textContent = Game.mana;
    let mps = 0;
    upgradeList.list.forEach((upgrade) => {
        let currentCost = Math.floor(upgradeList.getByName(upgrade.name).baseCost * Math.pow(1.1, Game.upgradesBought[upgrade.name]));
        document.getElementById(`bought-${upgrade.name}`).textContent = Game.upgradesBought[upgrade.name];
        document.getElementById(`cost-${upgrade.name}`).textContent = currentCost;
        document.getElementById(`mps-${upgrade.name}`).textContent = upgradeList.getByName(upgrade.name).manaPerSecond * Game.upgradesBought[upgrade.name];
        mps += upgradeList.getByName(upgrade.name).manaPerSecond * Game.upgradesBought[upgrade.name];

        let buttonElement = document.getElementById(`buy-building-${upgrade.name}`);
        if (!canBuy(currentCost)) {
            //buttonElement.classList.add('disabled');
            buttonElement.disabled = true;
        } else {
            //buttonElement.classList.remove('disabled');
            buttonElement.disabled = false;
        }
        
    });

    document.getElementById('mps-number').textContent = mps;
}

function save() {
    /*
    const save = Game;
    localStorage.setItem("save", JSON.stringify(save));
    console.log('Game saved');
    */
}

function load() {
    /*
    if (!JSON.parse(localStorage.getItem("save"))) return;
    var savegame = JSON.parse(localStorage.getItem("save"));
    //if (typeof savegame.mana !== "undefined") Game.mana = savegame.mana;
    Game = savegame;
    */
}

function initialize() {
    window.onbeforeunload = () => {
        save();
    };
    load();

    upgradeList.generateUpgradeHtml();
}

//updateView()
initialize();
setInterval(updateView, 50);
setInterval(autoClick, 1000);
setInterval(save, 10000);