import Hero from './Hero'


const AboutView = () =>{
    return(
       <>
        <Hero text="About Us"/>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 my-5">
              <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia, lectus sit amet condimentum rhoncus, ex ex convallis est, non malesuada ante eros vitae nibh. Nunc venenatis ante ut ante tempus, ac lacinia tortor finibus. 
              </p>
            </div>
          </div>
        </div> 
      </>
    )
  }

  export default AboutView;