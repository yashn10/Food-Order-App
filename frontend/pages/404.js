import React from 'react'
import Link from 'next/link'

const Custom404 = () => {

    return (

        <>
            <h1 className="contact_taital" style={{ marginTop: "90px" }}>Sorry We Did Not Found This Page</h1>
            <div className="readmore_btn"><Link href={"/"}>Visit Home</Link></div>
        </>

    )

}

export default Custom404