import { Outlet } from 'react-router-dom'
import ResponsiveAppBar from './components/ResponsiveAppBar'

const Layout = () => {
    return (
        <>  
            <ResponsiveAppBar/>
            <Outlet />
        </>
    )
}

export default Layout