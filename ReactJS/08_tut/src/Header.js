//const Header = (props) => {
 const Header = ({title}) => {
    return (
        <header>
            {/* <h1>Groceries List</h1> */}
            {/* <h1>{props.title}</h1> */}
            <h1>{title}</h1>
            
        </header>
    )
}

Header.defaultProps = {
    title: "Default Title"
}

export default Header;