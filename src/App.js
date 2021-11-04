//import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Route
} from  'react-router-dom';
import HomeLayout from './layout/HomeLayout';
import Home from './pages/Home';

function App() {
    return (
        <HomeLayout>
            <Router>
                <Route exact path="/" component={Home} />
            </Router>
        </HomeLayout>
    );
}

export default App;
