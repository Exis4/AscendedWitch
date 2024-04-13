let Game = {
    mana: 0,
    manaThisAscension: 0,
    manaAllTime: 0,
    buildingsBought: buildingList.generateBoughtList(),
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
    buildingList.list.forEach((building) => {
        let currentCost = Math.floor(buildingList.getByName(building.name).baseCost * Math.pow(1.1, Game.buildingsBought[building.name]));
        document.getElementById(`bought-${building.name}`).textContent = Game.buildingsBought[building.name];
        document.getElementById(`cost-${building.name}`).textContent = currentCost;
        document.getElementById(`mps-${building.name}`).textContent = buildingList.getByName(building.name).manaPerSecond * Game.buildingsBought[building.name];
        mps += buildingList.getByName(building.name).manaPerSecond * Game.buildingsBought[building.name];

        let buttonElement = document.getElementById(`buy-building-${building.name}`);
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

    buildingList.generateBuildingHtml();
}

//updateView()
initialize();
setInterval(updateView, 50);
setInterval(autoClick, 1000);
setInterval(save, 10000);