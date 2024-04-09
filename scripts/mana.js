function increaseMana(number) {
    Game.mana += number;
}

function autoClick() {
    let mps = 0;
    upgradeList.list.forEach((upgrade) => {
        mps += upgrade.manaPerSecond * Game.upgradesBought[upgrade.name];
    });
    increaseMana(mps);
}

function buyUpgrade(upgrade) {
    const cost = Math.floor(upgradeList.getByName(upgrade).baseCost * Math.pow(1.1, Game.upgradesBought[upgrade]));
    if (cost > Game.mana) return;

    Game.mana -= cost;
    Game.upgradesBought[upgrade] += 1;
}