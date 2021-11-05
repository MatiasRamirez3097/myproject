import {
    Route,
    Routes
} from  'react-router-dom';
import {Clientes, Home, Ventas} from '../pages'

const CfgRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/clientes" element={<Clientes/>}/>
            <Route exact path="/ventas" element={<Ventas/>}/>
        </Routes>
    )
}

export default CfgRoutes;