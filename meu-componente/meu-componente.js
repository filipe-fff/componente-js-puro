import { Component } from "../component-class/component-container.js";

export class MeuComponente extends Component {

    constructor() {
        super("./meu-componente/meu-componente.html", "./meu-componente/meu-componente.css");
    }
}

customElements.define("meu-componente", MeuComponente)