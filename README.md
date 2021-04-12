# Example Game for an Example Framework

This code sample shows how to develop an extremely simple game framework in the style of [Phaser](https://phaser.io/). It implements a terrible stock trading simulator on of an engine usable like this:

    class Example extends Engine.Scene {
        setup() {
            this.engine.setTitle('Example Title');
            this.engine.addAction('bleep');
            this.numBleeps = 0;
        }

        update(time) {
            this.show(numBleeps);
        }

        handleAction(action) {
            if(actions == 'bleep') {
                this.numBleeps++;
            }

            if(this.numBleeps > 10) {
                // restart
                this.engine.gotoScene(Example);
            }
        }
    }

    let game = Engine.Game(Example);