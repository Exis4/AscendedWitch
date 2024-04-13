class UpgradeList {
    list = [];

    addUpgrade(upgrade) {
        this.list.push(upgrade);
    }

    getByName(name) {
        return this.list.find((item) => item.name === name);
    }

    generateBoughtList() {
        let boughtList = {};
        this.list.forEach((upgrade) => {
            if (!boughtList[upgrade.name]) {
                boughtList[upgrade.name] = 0;
            }
        });
        return boughtList;
    }

    generateUpgradeHtml() {
        this.list.forEach((upgrade) => {
            document.getElementById('upgrade-list').innerHTML += `
            <div id="upgrade-${upgrade.name}" class="col-4">
                <div class="border border-black p-4">
                    <h1>${upgrade.prettyName}</h1>
                    <div>Bought: <span id="bought-${upgrade.name}">0</span></div>
                    <div>Cost: <span id="cost-${upgrade.name}">10</span></div>
                    <div>Mana per second: <span id="mps-${upgrade.name}">0</span></div>
                    <div><button id="buy-building-${upgrade.name}" onclick="buyUpgrade('${upgrade.name}')">Buy Upgrade (adds ${upgrade.manaPerSecond} to MpS)</button></div>
                </div>
            </div>
            `;
        });
    }

    generateBuildingCost() {
        this.list.forEach((upgrade, index) => {
            let n = index + 1;
            let newBaseCost = (n * 1 + 9 + (n < 5 ? 0 : Math.pow(n - 5, 1.75) * 5)) * Math.pow(10, n) * (Math.max(1, index - 14));
            let digits = Math.pow(10, (Math.ceil(Math.log(Math.ceil(newBaseCost)) / Math.LN10))) / 100;
            newBaseCost = Math.round(newBaseCost / digits) * digits;
            if (upgrade.baseCost === 0) {
                upgrade.changeBaseCost(Number.isNaN(newBaseCost) ? 1 : newBaseCost);
            }
        });
    }

    generateBuildingManaPerSecond() {
        this.list.forEach((upgrade, index) => {
            let n = index + 1;
            let newBaseMps = Math.ceil((Math.pow(n * 1, n * 0.5 + 2)) * 10) / 10;
            let digits = Math.pow(10, (Math.ceil(Math.log(Math.ceil(newBaseMps)) / Math.LN10))) / 100;
            newBaseMps = Math.round(newBaseMps / digits) * digits
            if (upgrade.manaPerSecond === 0) {
                upgrade.changeManaPerSecond(Number.isNaN(newBaseMps) ? 1 : newBaseMps);
            }
        });
    }
}

const upgradeList = new UpgradeList();
upgradeList.addUpgrade(new Upgrade('upgrade_1', 'Upgrade 1'));
upgradeList.addUpgrade(new Upgrade('upgrade_2', 'Upgrade 2'));
upgradeList.addUpgrade(new Upgrade('upgrade_3', 'Upgrade 3'));
upgradeList.addUpgrade(new Upgrade('upgrade_4', 'Upgrade 4'));
upgradeList.addUpgrade(new Upgrade('upgrade_5', 'Upgrade 5'));
upgradeList.addUpgrade(new Upgrade('upgrade_6', 'Upgrade 6'));
upgradeList.addUpgrade(new Upgrade('upgrade_7', 'Upgrade 7'));
upgradeList.addUpgrade(new Upgrade('upgrade_8', 'Upgrade 8'));
upgradeList.addUpgrade(new Upgrade('upgrade_9', 'Upgrade 9'));
upgradeList.addUpgrade(new Upgrade('upgrade_10', 'Upgrade 10'));

upgradeList.generateBuildingCost();
upgradeList.generateBuildingManaPerSecond();