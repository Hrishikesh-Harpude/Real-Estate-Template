const Cities=(props)=>{
    const product=props.city;
    return(
        <>
        {
            product.map((x)=>{
                return(
                    <>
                    <section className="section3">
                        <div className="text-pro">
                    <p style={{'color':'green','fontSize':'20px'}} className="text-center">{x.h11}</p>
                        <h1 style={{'color':'black','fontSize':'40px','marginBottom':'10px'}} className=" text-center "><b>{x.h22}</b></h1>

                        </div>
                        <section className="container">
                            <div className="row">
                            <div className="cities col-12 col-md-6 col-lg-4">
                               <div className="card" style={{'width': '18rem'}}>
                                 <img src={x.img1} class="card-img-top" alt="City Image Not Found"/>
  
                                 </div>

                            </div>
                            <div className="cities col-12 col-md-6 col-lg-4">
                               <div className="card" style={{'width': '18rem'}}>
                                 <img src={x.img2} class="card-img-top" alt="City Image Not Found"/>
  
                                 </div>

                            </div>
                            <div className="cities col-12 col-md-6 col-lg-4">
                               <div className="card" style={{'width': '18rem'}}>
                                 <img src={x.img3} class="card-img-top" alt="City Image Not Found"/>
  
                                 </div>

                            </div>
                                
                                
                            </div>

                        </section>
                         

                    </section>
                    </>
                )
            })
        }
        
        </>
    )

}
export default Cities;