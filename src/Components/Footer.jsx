const Footer=(props)=>{
    const foo=props.foote;
    return(
        <>
        {
            foo.map((x)=>{
                return(
                    <>
                    <section className="footer-section">
                        <div><h4><b>{x.h11}<i class="fa-solid fa-heart"></i><i style={{'color':'Green'}}>Colorlib</i> </b></h4></div>

                    </section>
                    </>
                )
            })
        }
        </>
    )
}
export default Footer;