class Software {
    constructor(name) {
        this.name = name;
    }

    run() {
        console.log(`${this.name} software is running...`);
    }
}

class Browser extends Software {
    constructor(name) {
        super(name);
        this.plugins = [];
    }

    addPlugin(plugin) {
        this.plugins.push(plugin);
    }
}

//Test
const google = new Browser("google");
google.addPlugin("uBlock Origin");
google.run();
console.log(`${google.name} has these plugins installed: ${google.plugins}`);

