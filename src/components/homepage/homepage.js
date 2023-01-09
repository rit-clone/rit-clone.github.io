import { useState, useEffect } from "react";
import Loading from "../loading/loading";
import Header from "./header/header";

const Home = ({ content }) => {
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        setTimeout(() => {setLoading(false)}, 2000);
    });

    if (loading) {
        return <Loading />;
    }
    else {
        return (
            <>
                <Header />
                <div>{content.bio}</div>
            </>
        );
    }

};

export default Home;