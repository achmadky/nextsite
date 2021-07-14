import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faGem from '@fortawesome/fontawesome-free-regular/faGem'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div><img src="/static/images/aky.png"/>
            {/*<span className="icon fa-diamond"><img src="/static/images/aky.png"></span>
            <FontAwesomeIcon icon={faGem} transform="grow-18" />*/}
            
        </div>
        <div className="content">
            <div className="inner">
                <h1>Welcome to my site</h1>
                <p>"Fake it till you make it"<br />
                -Amy Cuddy</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
                <li><a href="http://achmadky.vercel.app" onClick={() => {props.onOpenArticle('#')}}>Blog</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
