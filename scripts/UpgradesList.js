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
                    <div><button id="increase-mana" onclick="buyUpgrade('${upgrade.name}')">Buy Upgrade</button></div>
                </div>
            </div>
            `;
        });
    }
}

const upgradeList = new UpgradeList();
upgradeList.addUpgrade(new Upgrade('upgrade_1', 'Upgrade 1', 20, 1));
upgradeList.addUpgrade(new Upgrade('upgrade_2', 'Upgrade 2', 100, 2));
upgradeList.addUpgrade(new Upgrade('upgrade_3', 'Upgrade 3', 1200, 3));
upgradeList.addUpgrade(new Upgrade('upgrade_4', 'Upgrade 4', 14000, 4));
upgradeList.addUpgrade(new Upgrade('upgrade_5', 'Upgrade 5', 160000, 5));
upgradeList.addUpgrade(new Upgrade('upgrade_6', 'Upgrade 6', 1800000, 6));
upgradeList.addUpgrade(new Upgrade('upgrade_7', 'Upgrade 7', 20000000, 7));
upgradeList.addUpgrade(new Upgrade('upgrade_8', 'Upgrade 8', 220000000, 8));
upgradeList.addUpgrade(new Upgrade('upgrade_9', 'Upgrade 9', 2400000000, 9));
upgradeList.addUpgrade(new Upgrade('upgrade_10', 'Upgrade 10', 26000000000, 10));