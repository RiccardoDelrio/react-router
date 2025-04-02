import { Outlet } from 'react-router-dom'
import Header from '../components/Headers'

function DefaultLayout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default DefaultLayout