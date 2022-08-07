import '../assets/css/intro.css'
import logo from '../assets/images/icon-background.png'

export function Intro({props}) {
    return (
        <>
            <div className='intro-wrapper'>
                <div className='wrapper'>
                    <img alt="img" className='logo' src={logo}></img>
                    <h1 className='intro-title'>{props.title}</h1>
                    <h3 className='intro-tagline'>{props.tagline}</h3>
                    <p className='intro-des'>{props.des}</p>
                    <code className='intro-code'>{props.code}</code>
                </div>
            </div>
        </>
    )
}