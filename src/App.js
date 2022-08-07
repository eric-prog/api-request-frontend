import './App.css';
import { Intro } from './components/Intro';
import { Body } from './components/Body';
import { Code } from './components/Code';
import { Bottom } from './components/Bottom';

const intro = {
  title: "API Requests JS",
  tagline: "JavaScript requests Demystified.",
  des: "Think Python requests but for JavaScript.",
  code: "npm i api-request-js"
}

const body = {
  title: "😧 There's a problem...",
  code: "npm i api-request-js"
}

const code = {
  title: "🚀 Let's Get Started!",
  title1:  "🌐 Import in Your Project",
  title2:  "🥇 Just One Line",
  title3:  "🖨️ Print out the Data"
}

function App() {
  return (
    <div className="App">
      <Intro props={intro}/>
      <Body props={body} />
      <Code props={code}/>
      <Bottom />
    </div>
  );
}

export default App;
