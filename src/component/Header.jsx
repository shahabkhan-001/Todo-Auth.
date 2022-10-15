import React from "react"

const Header = (props) => {
return(
    <>
    <section className="Inside-Header">
        <h1>
            {props.name}
        </h1>
    </section>
    </>
)
}
export default Header