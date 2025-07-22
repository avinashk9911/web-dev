const Footer = ({ length }) => {

    // const today = new Date();

    // const footerStyle = {
    //     backgroundColor: 'yellow',
    //     color: 'black',
    //     textAlign: 'center'
    // }

    return (
        <footer>
            {/* <p>Copyright &copy; {today.getFullYear()}</p> */}

            <p>{length} List {length === 1 ? "List" : "Lists"}</p>
        </footer>
    )
}

export default Footer;