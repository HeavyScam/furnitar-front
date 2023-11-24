import React from 'react'
import './Landing.css'
import LandingForm from '../component/LandingForm';
import Loader from '../assets/loader.gif'

export default function Landing() {
    //import loader before loading the page
    // const [loading, setLoading] = React.useState(true);
    // React.useEffect(() => {
    //     setTimeout(() => setLoading(false), 4900);
    // }, []);
    // if (loading) {
    //     return(
    //     <div className="loader">
    //         <h1 style={{color: "white"}}>Furnit</h1>
    //         <img src={Loader} alt="Loading..." />
    //         <h1 style={{color: "#ff6767"}}>AR</h1>
    //     </div>)
    // }

    return (
        <>
        <LandingForm />
        </>
    )
}
