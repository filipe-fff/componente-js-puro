export class Component extends HTMLElement {
    templateUrl;
    styleUrl;

    constructor(templateUrl = "", styleUrl = "") {
        super();
        this.templateUrl = templateUrl;
        this.styleUrl = styleUrl;
        this.attachShadow({ mode: "open" });
    }

    async connectedCallback() {

        const [html, css] = await Promise.all([
            fetch(this.templateUrl).then(res => res.text()),
            fetch(this.styleUrl).then(res => res.text())
        ]);

        this.shadowRoot.innerHTML = `<style>${css}</style>${html}`;
    }
}