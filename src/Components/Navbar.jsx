

const Navbar=(props)=>{
  const items=props.navi;



    return(
        
        <div className="header">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" style={{color:"white"}} href="#">Esigned</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse ms-5 ps-5" id="navbarNav">
      <ul class="navbar-nav mx-auto ps-5" style={{listStyle:"disc"}}>
        <li class="nav-item ms-5">
          <a class="nav-link "  href="#">{items[0]}</a>
        </li>
        <li class="nav-item ms-5">
          <a class="nav-link" href="#">{items[1]}</a>
        </li>
        <li class="nav-item ms-5">
          <a class="nav-link" href="#">{items[2]}</a>
        </li>
        <li class="nav-item ms-5">
          <a class="nav-link" href="#">{items[3]}</a>
        </li>
        <li class="nav-item ms-5">
          <a class="nav-link" href="#">{items[4]}</a>
        </li>
        <li class="nav-item ms-5">
          <a class="nav-link" href="#">{items[5]}</a>
        </li>
        <li class="nav-item ms-5">
          <a class="nav-link" href="#">{items[6]}</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

        </div>
    )

}
export default Navbar;