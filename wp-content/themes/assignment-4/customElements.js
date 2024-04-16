class CopyrightYear extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}

customElements.define("x-year", CopyrightYear);

class IfrahWasHere extends HTMLElement {
	connectedCallback(){
		this.innerHTML = "Ifrah was here";
	}
}
customElements.define('x-ifrah', IfrahWasHere)