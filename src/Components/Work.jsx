const Work = (props) => {
    const works = props.workflow;

    return (
        <>
            {
                works.map((x, index) => (
                    <section key={index} className="work_flow">
                        <p style={{'color':'white','fontSize':'20px','paddingTop':'30px'}} className="text-center">{x.h11}</p>
                        <h1 style={{'color':'white','fontSize':'40px','marginBottom':'10px'}} className="text-center">
                            <b>{x.h22}</b>
                        </h1>
                        <section className="container con-text">
                            <div className="row">
                        <div className="div1 col-12 col-md-3">
                            <img src={x.img1} alt="" />
                            
                            <div className="text-area">
                                <h5><b>{x.h66}</b></h5>
                                <p>{x. ppp}</p>

                            </div>
                        </div>
                        {/* First Item */}
                        <div className="div1 col-12 col-md-3">
                            <img src={x.img1} alt="" />
                            
                            <div className="text-area">
                                <h5><b>{x.h61}</b></h5>
                                <p>{x. ppp}</p>

                            </div>
                        </div>
                        {/* second item */}
                        <div className="div1 col-12 col-md-3">
                            <img src={x.img1} alt="" />
                            
                            <div className="text-area">
                                <h5><b>{x. h62}</b></h5>
                                <p>{x. ppp}</p>

                            </div>
                        </div>
                        {/* thired item */}
                        <div className="div1 col-12 col-md-3">
                            <img src={x.img1} alt="" />
                            
                            <div className="text-area">
                                <h5><b>{x.h63}</b></h5>
                                <p>{x. ppp}</p>

                            </div>
                        </div>
                        </div>
                        </section>
                    </section>
                ))
            }
        </>
    )
}
export default Work;
