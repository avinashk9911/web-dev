const Footer = () => {

    const today = new Date();

    const footerStyle = {
        backgroundColor: 'yellow',
        color: 'black',
        textAlign: 'center'
    }

    return (
        <footer style = {footerStyle}>
            <p>Copyright &copy; {today.getFullYear()}</p>
        </footer>
    )
}

export default Footer;