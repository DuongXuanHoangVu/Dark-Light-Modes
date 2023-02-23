function Navbar(props) {
    return ( 
        <nav className={props.darkMode ? "dark" : ''}>
            <h1>This is Navbar</h1> 
            <div className="toggle-mode">
                <p>Light</p>
                <div  
                    className="toggle-slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggle-slider-circle"></div>
                </div>
                <p>Dark</p>
            </div>
        </nav>
     );
}

export default Navbar;