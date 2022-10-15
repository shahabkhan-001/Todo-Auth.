const Todoheader = (props) => {
    return(
        <>
        <div className="Header">
            <div>
                <img src={props.img} alt="todo-logo" style={{width : "30px"}} />
            </div>
            <div style={{textAlign : "center"}}>
                TODO LIST
            </div>
        </div>
        
        </>
    )
}
export default Todoheader;