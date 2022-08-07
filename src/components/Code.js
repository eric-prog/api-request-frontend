import '../assets/css/code.css'
import youtube from '../assets/images/youtube.png'
import external from '../assets/images/new_link.png'

export function Code({props}) {
    return (
        <>
            <div className='code-wrapper-total'>
                <h1 className='code-title'>{props.title}</h1>
                <div className='code-wrapper'>
                    <div className='code-wrapper-1'>
                        <h3 className='code-sub'>{props.title1}</h3>
                        <p className='code-des'>After installation, import the package!</p>
                        <pre className='code-block'>
                            const <span className='req'>request</span> = <span className='code-highlight'>require</span>("api-request-js")<br></br>         
                        </pre>
                        <h3 className='code-sub'>{props.title2}</h3>
                        <p className='code-des'>After installation, import the package!</p>
                        <p className='code-doc'>The <span className='code-highlight'>.getRequest(url, path)</span> gets the data from the API endpoint!<br></br><br></br>Parameters:<br></br><span className='code-param'>url</span> is a required string parmeter<br></br><span className='code-param'>path</span> is optional string parameter. path is the directory you want to download images to on your device. This is only used for endpoints that generate images.</p>
                        <pre className='code-block'>
                            let data = <span className='req'>request</span>.<span className='code-highlight'>getRequest</span>(<span className='code-param'>url</span>, <span className='code-param'>path</span>)
                        </pre>
                        <h3 className='code-sub'>{props.title3}</h3>
                        <p className='code-des'>Log out the data!</p>
                        <p className='code-doc'>THe .log(data) outputs the data</p>
                        <pre className='code-block'>
                            <span className='req'>request</span>.log(data)
                        </pre>
                    </div>
                    <div className='code-wrapper-2'>
                        <h3 className='code-sub code-sub-2'>🔗 Test it out!</h3>
                        <div className='api-container'>
                            <ul className='api-ul'>
                                <li className='api-li'>
                                    <p className='api-title'>People in Space Now API</p>
                                    <p className='api-link'>http://api.open-notify.org/astros.json?callback=?</p>
                                </li>
                                <li className='api-li'>
                                    <p className='api-title'>Coinbase Currencies API</p>
                                    <p className='api-link'>https://api.coinbase.com/v2/currencies</p>
                                </li>
                                <li className='api-li'>
                                    <p className='api-title'>Coindesk Current Price API</p>
                                    <p className='api-link'>https://api.coindesk.com/v1/bpi/currentprice.json</p>
                                </li>
                                <li className='api-li'>
                                    <p className='api-title'>Art Institute of Chicago API</p>
                                    <p className='api-link'>https://api.artic.edu/api/v1/artworks/129884</p>
                                </li>
                                <li className='api-li'>
                                    <p className='api-title'>Check Domain API</p>
                                    <p className='api-link'>https://api.domainsdb.info/v1/domains/search?domain=facebook</p>
                                </li>
                                <li className='api-li'>
                                    <p className='api-title'>English Dictionary API</p>
                                    <p className='api-link'>https://api.dictionaryapi.dev/api/v2/entries/en/hello</p>
                                </li>
                                <li className='api-li'>
                                    <p className='api-title'>Spaceflight News API</p>
                                    <p className='api-link'>https://api.spaceflightnewsapi.net/v3/info</p>
                                </li>
                                <li className='api-li'>
                                    <p className='api-title'>Cat Image Generator API</p>
                                    <p className='api-link'>http://thecatapi.com/api/images/get?format=src&type=gif</p>
                                </li>
                                <li className='api-li'>
                                    <p className='api-title'>Unplash Image Generator API</p>
                                    <p className='api-link'>https://source.unsplash.com/random/</p>
                                </li>
                                <li className='api-li'>
                                    <p className='api-title'>ZenQuotes API</p>
                                    <p className='api-link'>https://zenquotes.io/api/today</p>
                                </li>
                                <li className='api-li'>
                                    <p className='api-title'>US University Finder API</p>
                                    <p className='api-link'>http://universities.hipolabs.com/search?country=United+States</p>
                                </li>
                                <li className='api-li'>
                                    <p className='api-title'>Cat Fact API</p>
                                    <p className='api-link'>https://catfact.ninja/fact</p>
                                </li>
                                <li className='api-li'>
                                    <p className='api-title'>UUID Generator API</p>
                                    <p className='api-link'>https://www.uuidtools.com/api/generate/v1</p>
                                </li>
                                <li className='api-li'>
                                    <p className='api-title'>Newton Math Equation Solver API</p>
                                    <p className='api-link'>https://newton.now.sh/api/v2/factor/x^2-1</p>
                                </li>
                                <li className='api-li'>
                                    <p className='api-title'>Toronto TTC API</p>
                                    <p className='api-link'>http://myttc.ca/finch_station.json</p>
                                </li>
                                <li className='api-li'>
                                    <p className='api-title'>Football Matches API</p>
                                    <p className='api-link'>https://api.football-data.org/v4/matches</p>
                                </li>
                                <li className='api-li'>
                                    <p className='api-title'>City Bike Networks API</p>
                                    <p className='api-link'>http://api.citybik.es/v2/networks</p>
                                </li>
                                <li className='api-li'>
                                    <p className='api-title'>Breaking Bad Quotes API</p>
                                    <p className='api-link'>https://api.breakingbadquotes.xyz/v1/quotes</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='code-wrapper-3'>
                    <a href="https://github.com/eric-prog/api-request-frontend" target="_"><img alt="img" className='img-2' src={youtube}></img></a>
                    <h3 className='code-sub-2'> Need Help? Watch our Video!</h3>
                    <a href="https://github.com/eric-prog/api-request-frontend" target="_"><img alt="img" className='img-3' src={external}></img></a>
                </div>
            </div>
        </>
    )
}