class Building {

    constructor(name, prettyName, baseCost = 0, manaPerSecond = 0) {
        this.name = name;
        this.prettyName = prettyName;
        this.baseCost = baseCost;
        this.manaPerSecond = manaPerSecond;
    }

    changeBaseCost(cost) {
        this.baseCost = cost;
    }

    changeManaPerSecond(mps) {
        this.manaPerSecond = mps;
    }
}