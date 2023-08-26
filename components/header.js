class Header extends HTMLElement {
    constructor() {
      super();
    }
  
  connectedCallback() {
    this.innerHTML = `
    <nav id="nav">
				<ul class="container">
					<li>
            <a href="/">Home</a>
          </li>
					<li>
            <a href="credentials.html">Credentials</a>
          </li>
          <li>
            <a href="portfolio.html">Portfolio</a>
          </li>
					<li>
            <a href="#contact">Contact</a>
          </li>
				</ul>
			</nav>
    `;
  }
}

  customElements.define('header-component', Header);