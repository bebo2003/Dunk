import React, { useEffect, useState } from 'react'
import styles from "./Layout.module.css"
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet, useLocation } from 'react-router-dom'
import MyLoader from '../../components/Shared/Loader/Loader'

export default function Layout() {
    const [loading, setLoading] = useState(true)
    const location = useLocation()

    useEffect(() => {
        setLoading(true)
        const timer = setTimeout(() => {
            setLoading(false)
        }, 1500) // المدة حسب رغبتك

        return () => clearTimeout(timer)
    }, [location.pathname])  // يتكرر كل مرة تتغير الصفحة

    if (loading) {
        return (
            <div className={styles.loaderWrapper} style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                width: '100vw',
                backgroundColor: '#000',
            }}>
                <MyLoader />
            </div>
        )
    }

    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}
