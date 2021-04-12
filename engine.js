

class Game {
    constructor(...args) {
        window.onload = () => this.load(...args);
    }

    load(firstSceneClass, containerId) {

        if(containerId === undefined) {
            this.container = document.body;
        } else {
            this.container = document.getElementById(containerId);
        }

        this.gotoScene(firstSceneClass);

        window.requestAnimationFrame((t) => this.tick(t));
    }

    gotoScene(sceneClass) {
        this.header = document.createElement("h1");
        this.actionsContainer = document.createElement("div");
        this.output = document.createElement("div");

        this.container.innerHTML = '';
        this.container.appendChild(this.header);
        this.container.appendChild(this.output);
        this.container.appendChild(this.actionsContainer);
        
        
        this.scene = new sceneClass();
        this.scene.engine = this;
        
        this.scene.setup();
    }

    tick(time) {
        this.scene.update(time);
        window.requestAnimationFrame((t) => this.tick(t))
    }

    addAction(action) {
        let button = document.createElement("button");
        button.innerText = action;
        button.onclick = () => this.scene.handleAction(action);
    
        this.actionsContainer.appendChild(button);
    }

    setTitle(title) {
        document.title = title;
        this.header.innerText = title;
    }

    show(msg) {
        this.output.innerText = msg;
    }
}

class Scene {
    setup() { }

    update() { }

    handleAction(action) {
        console.warn('no handeAction(action) method on scene ', this);
    }
}

let Engine = {
    Game,
    Scene,
};