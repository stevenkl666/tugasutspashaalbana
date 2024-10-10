import '../style/Navbar.css'
function Navbar() {
  return (
    <nav>
        <div className="wrapper">
            <div className="logo"><a href=''>Vape Store Jodi.</a></div>
            <div className="menu">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#produk">Produk</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#tentang kami">Tentang Kami</a></li>
                    <li><a href="#">Keranjang</a></li>
                    <li><a href="" className="tbl-biru">Sign Up</a></li>
                </ul>
            </div>
        </div>
    </nav>

  )
}

export default Navbar