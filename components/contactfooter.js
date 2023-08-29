class ContactFooter extends HTMLElement {
    constructor() {
      super();
    }
  
  connectedCallback() {
    this.innerHTML = `
    <article id="contact" class="wrapper style1">
    <div class="container medium">
      <header>
        <h2>How can I help you?</h2>
        <p>See my <a href="/images/MaximilianHartResume.pdf" target="_blank">resume</a>, use the form below to send me an email, or connect on <a href="https://linkedin.com/in/maximilianhart">LinkedIn</a>.</p>
      </header>
      <div class="row">
        <div class="col-12">
          <form method="post" action="https://formspree.io/f/xleyevpk">
            <div class="row">
              <div class="col-6 col-12-small">
                <input type="text" name="name" id="name" placeholder="Name" />
              </div>
              <div class="col-6 col-12-small">
                <input type="text" name="email" id="email" placeholder="Email" />
              </div>
              <div class="col-12">
                <input type="text" name="subject" id="subject" placeholder="Subject" />
              </div>
              <div class="col-12">
                <textarea name="message" id="message" placeholder="Message"></textarea>
              </div>
              <div class="col-12">
                <ul class="actions">
                  <li><input type="submit" value="Send Message" /></li>
                  <li><input type="reset" value="Clear Form" class="alt" /></li>
                </ul>
              </div>
            </div>
          </form>
        </div>
        <div class="col-12">
          <hr />
          <h3>Find me on ...</h3>
          <ul class="social">
            <li><a href="https://linkedin.com/in/maximilianhart" class="icon brands fa-linkedin-in"><span class="label">LinkedIn</span></a></li>
            <li><a href="https://github.com/MaximilianHart" class="icon brands fa-github"><span class="label">Github</span></a></li>
          </ul>
          <hr />
        </div>
      </div>
      <footer>
        <ul id="copyright">
          <li>&copy; Maximilian Hart. All rights reserved.</li><li>Design: <a href="http://twitter.com/ajlkn">AJ</a> for <a href="http://html5up.net">HTML5 UP</a></li>
        </ul>
      </footer>
    </div>
  </article>
    `;
  }
}

  customElements.define('contactfooter-component', ContactFooter);