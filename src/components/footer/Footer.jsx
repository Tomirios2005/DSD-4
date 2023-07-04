import imgGithub from '../../assets/github.svg'
import imgLinke from '../../assets/linkedin.svg'
import imgBehance from '../../assets/behance.svg'

import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer_container">
                <img src={imgBehance} alt="" />
                <img src={imgGithub} alt="" />
                <img src={imgLinke} alt="" />
            </div>
        </footer>
    )
}

export default Footer