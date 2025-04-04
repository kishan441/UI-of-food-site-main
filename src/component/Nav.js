
const Nav = () => {
    return(
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Fieri`s<span className="text-danger"> Banquet</span></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link mx-2" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link   mx-2" href="#">about</a>
        </li>
        <li class="nav-item">
          <a class="nav-link  mx-2" href="#card">Items</a>
        </li>
        <li class="nav-item">
          <a class="nav-link  mx-2" href="#id3">service</a>
        </li>
        <li class="nav-item">
          <a class="nav-link  mx-2" href="#id5">contact us</a>
        </li>
        
      
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    );
};

export default Nav;