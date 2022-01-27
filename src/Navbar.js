const Navbar = () => {
  return ( 
    <nav className="navbar">
      <h1>Rommel Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create" style={navStyle}>New Blog</a>
      </div>
    </nav>
   );
}

const navStyle = {
  // color: 'white',
  // backgroundColor: '#f1356d',
  // borderRadius: '8px'
}
 
export default Navbar;