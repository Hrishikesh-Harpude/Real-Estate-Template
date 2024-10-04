
const Properties=(props)=>{
    const produ=props.prod;
    return(
        <>
        {
            produ.map((x)=>{
                return(
                    <>
                    <section className="section2">
                        <p style={{'color':'green','fontSize':'20px'}} className="text-center">{x.h11}</p>
                        <h1 style={{'color':'black','fontSize':'40px','marginBottom':'10px'}} className=" text-center "><b>Featured Properties</b></h1>
                         
                         <section className="container">
                            <section className="row">
                            <div className="gallery col-12 col-md-6 col-lg-3 pb-3">
                                <div className="card" style={{'width': '18rem'}}>
                                <img src={x.img1} className="card-img-top" alt="Property Image" />

                                <div className="card-body">
                                 <span className="card-text"><p className="" style={{}}> 1,879 Sqft</p><b style={{'fontSize':'25px'}}>The Blue Sky Home</b> <p>Oakland</p><hr />
                                 <img src="images/illustration/person_1.jpg" alt=""  className="img-radius "/>  John Dorf</span>
                                 </div>
                                  </div>
                                </div>

                                
                                 
                                {/* First Image */}
                                <div className="gallery col-12 col-md-6 col-lg-3 pb-3">
                                <div className="card" style={{'width': '18rem'}}>
                                <img src={x.img2} className="card-img-top" alt="Property Image" />

                                <div className="card-body">
                                <span className="card-text"><p className="" style={{}}> 1,879 Sqft</p><b style={{'fontSize':'25px'}}>The Blue Sky Home</b> <p>Oakland</p><hr />
                                <img src="/images/illustration/person_1.jpg" alt=""  className="img-radius "/> John Dort</span>
                                 </div>
                                  </div>
                                </div>
                                {/* Second image */}
                                <div className="gallery col-12 col-md-6 col-lg-3 pb-3">
                                <div className="card" style={{'width': '18rem'}}>
                                <img src={x.img3} className="card-img-top" alt="Property Image" />

                                <div className="card-body">
                                <span className="card-text"><p className="" style={{}}> 1,879 Sqft</p><b style={{'fontSize':'25px'}}>The Blue Sky Home</b> <p>Oakland</p><hr />
                                <img src="/images/illustration/person_1.jpg" alt=""  className="img-radius "/> John Dort</span>
                                 </div>
                                  </div>
                                </div>
                                {/* Thired Image */}
                                <div className="gallery col-12 col-md-6 col-lg-3 pb-3">
                                <div className="card" style={{'width': '18rem'}}>
                                <img src={x.img4} className="card-img-top" alt="Property Image" />

                                <div className="card-body">
                                <span className="card-text"><p className="" style={{}}> 1,879 Sqft</p><b style={{'fontSize':'25px'}}>The Blue Sky Home</b> <p>Oakland</p><hr />
                                <img src="/images/illustration/person_1.jpg" alt=""  className="img-radius "/> John Dort</span>
                                 </div>
                                  </div>
                                </div>
                                {/* fourth image */}
                               
                            </section>

                         </section>
                    </section>
                    </>
                )
            })
        }
        </>
    )

}
export default Properties;