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
          <p>Hi, my name is Achmad Dhikrillah. I hold Bachelor's Degree from Airlangga University majoring in Information Systems. i'm a Software Engineering in Test currently working as Software Quality Assurance at Majoo. i mostly do write Automated Test with cypress for web app and flutter gherkin for mobile apps. <a href="#work">awesome work</a>.</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <span className="image main"><img src="/static/images/pic2.jpg" alt="" /></span>
          <p>Currently, I work as Software Quality Assurance at Majoo. in this company, mostly i do create automate test with flutter gherkin, so i need to learn a bit about flutter.</p>
          <p>before i worked at Majoo. i work as technical writer in MPM Distributor, in this company i usually create a document such as blueprint, technical implementation, user manual, scenario testing, user acceptance test and create UI with Figma.</p>
          <p>i've also done an internship in GoStartups, in this company i work as an intern Analytics and Software Quality Assurance, i usually create spreadsheet User Assesment Test, Scenario Test, Script Automation with Playwright and Data Analyst with Metabase. and now sometimes i do freelance job in this company as a Software Quality Assurance.</p>
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