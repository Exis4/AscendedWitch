class BuildingList {
    list = [];

    addBuilding(building) {
        this.list.push(building);
    }

    getByName(name) {
        return this.list.find((item) => item.name === name);
    }

    generateBoughtList() {
        let boughtList = {};
        this.list.forEach((building) => {
            if (!boughtList[building.name]) {
                boughtList[building.name] = 0;
            }
        });
        return boughtList;
    }

    generateBuildingHtml() {
        this.list.forEach((building) => {
            document.getElementById('building-list').innerHTML += `
            <div id="building-${building.name}" class="col-4">
                <div class="border border-black p-4">
                    <h1>${building.prettyName}</h1>
                    <div>Bought: <span id="bought-${building.name}">0</span></div>
                    <div>Cost: <span id="cost-${building.name}">0</span></div>
                    <div>Mana per second: <span id="mps-${building.name}">0</span></div>
                    <div><button id="buy-building-${building.name}" onclick="buyBuilding('${building.name}')">Buy Building (adds ${building.manaPerSecond} to MpS)</button></div>
                </div>
            </div>
            `;
        });
    }

    generateBuildingCost() {
        this.list.forEach((building, index) => {
            let n = index + 1;
            let newBaseCost = (n * 1 + 9 + (n < 5 ? 0 : Math.pow(n - 5, 1.75) * 5)) * Math.pow(10, n) * (Math.max(1, index - 14));
            let digits = Math.pow(10, (Math.ceil(Math.log(Math.ceil(newBaseCost)) / Math.LN10))) / 100;
            newBaseCost = Math.round(newBaseCost / digits) * digits;
            if (building.baseCost === 0) {
                building.changeBaseCost(Number.isNaN(newBaseCost) ? 1 : newBaseCost);
            }
        });
    }

    generateBuildingManaPerSecond() {
        this.list.forEach((building, index) => {
            let n = index + 1;
            let newBaseMps = Math.ceil((Math.pow(n * 1, n * 0.5 + 2)) * 10) / 10;
            let digits = Math.pow(10, (Math.ceil(Math.log(Math.ceil(newBaseMps)) / Math.LN10))) / 100;
            newBaseMps = Math.round(newBaseMps / digits) * digits
            if (building.manaPerSecond === 0) {
                building.changeManaPerSecond(Number.isNaN(newBaseMps) ? 1 : newBaseMps);
            }
        });
    }
}

const buildingList = new BuildingList();
buildingList.addBuilding(new Building('building_1', 'Building 1'));
buildingList.addBuilding(new Building('building_2', 'Building 2'));
buildingList.addBuilding(new Building('building_3', 'Building 3'));
buildingList.addBuilding(new Building('building_4', 'Building 4'));
buildingList.addBuilding(new Building('building_5', 'Building 5'));
buildingList.addBuilding(new Building('building_6', 'Building 6'));
buildingList.addBuilding(new Building('building_7', 'Building 7'));
buildingList.addBuilding(new Building('building_8', 'Building 8'));
buildingList.addBuilding(new Building('building_9', 'Building 9'));
buildingList.addBuilding(new Building('building_10', 'Building 10'));

buildingList.generateBuildingCost();
buildingList.generateBuildingManaPerSecond();