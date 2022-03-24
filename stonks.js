class Trading extends Engine.Scene {

    setup() {
        this.stonks = 0;
        this.cash = 1000;
        this.price = 0;

        this.engine.setTitle("Trade Stonks");

        this.engine.addAction("buy");
        this.engine.addAction("sell");
    }


    update(time) {
        this.price = 100+20*Math.sin(time/1000);

        this.engine.show(JSON.stringify({
            stonks: this.stonks,
            cash: this.cash,
            price: this.price
        }, null, 1));
    }

    handleAction(action) {
        if(action == "buy" && this.cash > this.price) {
            this.stonks += 1;
            this.cash -= this.price;
        }

        if(action == "sell" && this.stonks > 0) {
            this.stonks -= 1;
            this.cash += this.price;
        }

        if(this.cash > 2000) {
            this.engine.show('Cash > $2k, noice!');
            this.engine.gotoScene(Victory);
        }
    }
}

class Introduction extends Engine.Scene {
    setup() {
        this.engine.setTitle("Stonks 3.0");
        this.engine.addAction("go!");
        this.engine.show("Are you ready to trade?");
    }

    handleAction() {
        this.engine.gotoScene(Trading);
    }
}

class Victory extends Engine.Scene {
    setup() {
        this.engine.setTitle("Victory");
        this.engine.addAction("replay");
        this.engine.show("Noice! Play again?");
    }

    handleAction() {
        this.engine.gotoScene(Trading);
    }
}

let game = new Engine.Game(Introduction, 'gameContainer');
