function Header({title}) {
    return (
     
      <>
      <div style={{position:"fixed",top:"0px",backgroundColor:"red",width:"100vw",textAlign:"center"}}>
          <h2 style={{fontSize:"30px"}}>{title}</h2>
         
      </div>
      </>
    );
  }
  
  
  export default Header;