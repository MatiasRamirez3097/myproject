//import logo from './logo.svg';
import './App.css';
import HomeLayout from './layout/HomeLayout';
import CfgRoutes from './config/Routes';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
    return (
        <Router>
            <HomeLayout>
                <CfgRoutes/>
            </HomeLayout>
        </Router>
    );
}

export default App;
