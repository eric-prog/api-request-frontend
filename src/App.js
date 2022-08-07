import './App.css';
import { Intro } from './components/Intro';

const intro = {
  title: "API Requests JS",
  tagline: "JavaScript requests Demystified.",
  des: "Think Python requests but for JavaScript.",
  code: "npm i api-request-js"
}

function App() {
  return (
    <div className="App">
      <Intro props={intro}/>
    </div>
  );
}

export default App;
