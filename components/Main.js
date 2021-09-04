import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import { faLinkedin } from '@fortawesome/fontawesome-free-brands';

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Intro</h2>
          <span className="image main"><img src="/static/images/pic01.jpeg" alt="" /></span>
          <p>My name is Achmad Dhikrillah, and I am a Quality Assurance Engineer from Indonesia living in Surabaya. I do create Script for automate test with flutter gherkin for mobile app and cypress for web app, and UI/UX development. 
            I have good experience, especially in the startup. Most of my projects are from SaaS Aplication, such as <a href="https://majoo.id/">Majoo</a> and <a href="https://www.gostartupco.com/">GoStartup</a>. Please Check them, you will regret if you don’t!.</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <span className="image main"><img src="/static/images/pic2.jpg" alt="" /></span>
          <p>Currently, I work as Quality Assurance Engineer at Majoo. in this company, mostly i do create automate test with flutter gherkin, so i need to learn a bit about flutter.</p>
          <p>Software Quality Assurance</p>
          <p>Starting with basic websites several years ago I found myself working as a Quality Assurance Engineer Intern for complex project. 
            With so many features of the app, so much detail and combined into an innovative interfaces across multiple touch points became my daily companion. To ensure that the application has reached the best quality.</p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src="/static/images/pic03.jpg" alt="" /></span>
          <p>Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <ul className="icons">
            <li><a href="https://www.linkedin.com/in/achmad-dhikrillah-1a577a1b1/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a></li>
            <li><a href="https://www.instagram.com/d.akyy/">
              <FontAwesomeIcon icon={faInstagram} />
            </a></li>
            <li><a href="https://github.com/achmadky">
              <FontAwesomeIcon icon={faGithub} />
            </a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool
}

export default Main