import React from "react";
import { useSelector } from "react-redux";
import Page2UI from "./Page2UI";

const Page2 = () => {
    const {page2Reducer} = useSelector((state)=>state);
    return (
        <React.Fragment>
            <Page2UI {...page2Reducer} />
        </React.Fragment>
    )
}

export default Page2;