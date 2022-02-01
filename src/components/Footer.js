function Footer() {
    const getYear = () => {
        const d = new Date();
        return d.getFullYear();
    }

    return(
        <footer className="footer">
            <p>&copy; {getYear()} James Choi</p>
        </footer>
    );
}

export default Footer;