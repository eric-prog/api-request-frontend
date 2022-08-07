import BodyStyles from '../assets/css/Body.css'
import logo from '../assets/images/icon-background.png'

export function Body({props}) {
    return (
        <>
            <div className='body-wrapper'>
                <div className='wrapper-1'>
                    <img alt="img" className='intro-logo' src={logo}></img>
                    <code className='body-code'>{props.code}</code>
                </div>
                <div className='wrapper-2'>
                    <h1 className='body-title'>{props.title}</h1>
                    <p className='body-des'><span className='highlight'>Getting data from an API is complex and hard in JavaScript.</span> A quick google search will direct you to a difficult code block that either use fetch or axios. 
                    <br></br> This <span className='highlight'>SCARES</span> off beginners.</p>
                    <ul className='body-des'>
                        <li><span className='highlight'>Which one do I use? </span></li>
                        <li><span className='highlight'>Like what is the await keyword?</span></li>
                        <li><span className='highlight'>When do I use it? </span></li>
                        <li><span className='highlight'>But wait what is async?</span> </li>
                        <li><span className='highlight'>How does async even work?</span> </li>
                        <li><span className='highlight'>How do I error handle? .catch?</span></li>
                        <li><span className='highlight'>I can't even download an image from this url!! Ahhrr!!!</span></li>
                        <li><span className='highlight'>What's a Promise? Whaaa?!!??</span></li>
                    </ul>
                    <p className='body-des'>This totals <span className='highlight'>over 30 lines of code</span> (depending on your use case). 
                    Meanwhile in Python it's literally one line <span className='highlight'>requests.get(url)</span>. 
                    <br></br><br></br>With <span className='highlight'>api-request-js</span> we dumb down api calls. 
                    Now you can get data with just one line.</p>
                </div>
            </div>
        </>
    )
}