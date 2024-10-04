

const HomePage=(props)=>{
    const hommee=props.homi;
    return(
        <>
        <section className="main">
        <div className="container-fluid homes">
            {
                hommee.map(function(hom){
                    return(
                        <>
                        
                        
                        <div className="row">
                           
                                <div className="container text" >
                                <h1 className="pt-5 ms-5" style={{fontSize:"60px",'color':'black'}}>{hom.ttl}</h1>
                                <h1 className="ms-5" style={{fontSize:"60px",'color':'black'}}>{hom.ttl2}</h1>
                                <p style={{fontSize:"20px",'color':'black'}} className="ms-5">{hom.ttl1}</p>
                                 <button className="btn btn-success pt-2 pb-2 ms-5" style={{fontSize:"20px"}}>{hom.cont}</button>
                                 </div>
                           

                        </div>
                        
                        
                        
                        </>
                    )
                })
            }

        </div>
        </section>

        </>
    )
}
export default HomePage;