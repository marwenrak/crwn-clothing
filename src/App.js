import './App.css';
// import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const HatsPage = () => (
    <h1>hats page</h1>
)

// const Home = (props) => {
//     console.log(props);
//     return (
//         <div>
//             {/*<Link to={'/2/2'}>nava</Link>*/}
//             {/*<button onClick={()=>props.history.push('/2/2')}>push</button>*/}
//             <p>Home {props.match.params.para}</p>
//         </div>
//     );
// };
//
// const About = (props) => {
//     console.log(props);
//     return (
//         <div>
//             <p>About</p>
//         </div>
//     );
// };
//
// const Contact = (props) => {
//     console.log(props);
//     return (
//         <div>
//             <Link to={`${props.match.url}/9`}>match para {props.match.url}</Link>
//             <Link to={`${props.match.url}/11`}>match para {props.match.url}</Link>
//             <Link to={`${props.match.url}/29`}>match para {props.match.url}</Link>
//
//             <p>Contact {props.match.params.para}</p>
//         </div>
//     );
// };

function App() {
    return (
        <div>
            <Router>
                <Route exact path='/' component={HomePage}></Route>
                <Route exact path='/hats' component={HatsPage}></Route>
            </Router>

            {/*<Router>*/}
            {/*    <div>*/}
            {/*        <h1>W3Adda - Simple SPA</h1>*/}
            {/*        <nav>*/}
            {/*            <ul>*/}
            {/*                <li>*/}
            {/*                    <Link to="/">Home</Link>*/}
            {/*                </li>*/}
            {/*                <li>*/}
            {/*                    <Link to="/1">About</Link>*/}
            {/*                </li>*/}
            {/*                <li>*/}
            {/*                    <Link to="/2">Users</Link>*/}
            {/*                </li>*/}
            {/*            </ul>*/}
            {/*        </nav>*/}

            {/*        <Route exact path="/"  component={Home} />*/}
            {/*        <Route exact path="/1" component={About} />*/}
            {/*        <Route path="/2/:para" component={Contact} />*/}
            {/*    </div>*/}
            {/*</Router>*/}

        </div>
    );
}

export default App;
