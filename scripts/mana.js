function increaseMana(number) {
    Game.mana += number;
}

function autoClick() {
    let mps = 0;
    buildingList.list.forEach((building) => {
        mps += building.manaPerSecond * Game.buildingsBought[building.name];
    });
    increaseMana(mps);
}

function buyBuilding(building) {
    const cost = Math.floor(buildingList.getByName(building).baseCost * Math.pow(1.1, Game.buildingsBought[building]));
    if (!canBuy(cost)) return;

    Game.mana -= cost;
    Game.buildingsBought[building] += 1;
}

function canBuy(cost) {
    if (Game.mana >= cost) {
        return true;
    }
    return false
}