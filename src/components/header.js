function Header({ title,year }) {
    // const date = "20/7"; {/*prop đc tạo trực tiếp*/}

    return ( 
        <div className="header">
            <h1>{title}</h1>  {/* {title} {year} các prop đc truyền từ bên appjs*/}
        </div>
     );
}

export default Header;