import BodyStyles from '../assets/css/Bottom.css'
import logo from '../assets/images/icon-background.png'
import git from '../assets/images/github-logo.png'

export function Bottom({props}) {
    return (
        <>
            <div className='bottom-wrapper'>
                <div className='bottom-container'>
                    <img alt="img" className='logo' src={logo}></img>
                    <a href="https://github.com/eric-prog/api-request-frontend" target="_"><img alt="img" className='github img-1' src={git}></img></a>
                    <a href="https://github.com/eric-prog/api-requests-js" target="_"><img alt="img" className='github' src={git}></img></a>
                </div>
                <p className='copyright'>© 2022 api-request-js</p>
            </div>
        </>
    )
}