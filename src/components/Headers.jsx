import logo from '../assets/img/logo.png'
export default function Header() {
    return (
        <>
            <header>
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid  ">

                        <a class="navbar-brand d-flex align-items-center column-gap-3" href="#">
                            <img src={logo} alt="Logo" class="d-inline-block align-text-top logo_img" />
                            Super Blog
                        </a>

                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-end " id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                                <a class="nav-link" href="#">Post</a>
                                <a class="nav-link" href="#">Chi siamo</a>

                            </div>
                        </div>
                    </div>
                </nav>
            </header >
        </>

    )
}