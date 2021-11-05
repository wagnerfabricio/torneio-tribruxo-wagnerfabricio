const Button = ({handleClick, nextPage, children}) => {

    return (
        <button onClick={()=> {handleClick(); nextPage()}}>{children}</button>
    )
}

export default Button 