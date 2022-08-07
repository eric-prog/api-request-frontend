import '../assets/css/code.css'

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
                            const apiPackage = <span className='code-highlight'>require</span>("api-request-js")<br></br>         
                        </pre>
                        <h3 className='code-sub'>{props.title2}</h3>
                        <p className='code-des'>After installation, import the package!</p>
                        <pre className='code-block'>
                            apiPackage.<span className='code-highlight'>getRequest</span>(<span className='code-param'>url</span>, <span className='code-param'>path</span>)
                        </pre>
                    </div>
                    <div className='code-wrapper-2'>
                        <div className='frame-wrapper'>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/fXS_gkWAIs0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
        </>
    )
}