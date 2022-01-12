

function NavBar() {
    return (

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src="" className="iconoNav" alt="logo"/> </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ">
                            <a className="nav-link" href="#">Ingresar</a>
                            <a className="nav-link" href="#">Mis compras</a>
                            <a className="nav-link" href="#">Favoritos</a>
                        </div>
                        
                    </div>
                </div>
            </nav>


    );
}

export default NavBar;