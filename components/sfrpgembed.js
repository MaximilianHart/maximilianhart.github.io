class SFRPG extends HTMLElement {
    constructor() {
      super();
    }
  
  connectedCallback() {
    this.innerHTML = `
    <iframe class="responsive-iframe-embed" src="https://docs.google.com/presentation/d/e/2PACX-1vQYrjZhYBan69AUYigqOtcWGIkMu8k8DTkL_n4OF8bC6vylAl8RslbJmclcIk8xSxLscVnhn0payARP/embed?start=true&loop=true&delayms=10000" frameborder="0" width="100%" height="700 em" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
    </br>`;
  }
}

  customElements.define('sfrpgembed-component', SFRPG);

  //To embed, use: 			<script src="components/sfrpgembed.js" type="text/javascript" defer></script>
