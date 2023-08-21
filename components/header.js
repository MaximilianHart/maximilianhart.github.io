class Header extends HTMLElement {
    constructor() {
      super();
    }
  
  connectedCallback() {
    this.innerHTML = `
    <nav id="nav">
    <ul class="container">
      <li><a href="#top">Home</a></li>
      <li><a href="#story">About</a></li>
      <li><a href="#substack">Blog</a></li>
      <li><a href="#portfolio">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
    `;
  }
}

  customElements.define('header-component', Header);