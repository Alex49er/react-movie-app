import Hero from './Hero'


const Home = () => {
    return (
      <>
      <Hero text="Welcome to the page"/>
       <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 my-5">
              <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia, lectus sit amet condimentum rhoncus, ex ex convallis est, non malesuada ante eros vitae nibh. Nunc venenatis ante ut ante tempus, ac lacinia tortor finibus. Nulla facilisi. Etiam elit nibh, sodales eu gravida sed, facilisis sit amet orci. Proin ac tempus dui. Aenean at posuere justo, a porta nunc. Fusce dictum purus ut est semper, quis suscipit orci euismod.
              </p>
            </div>
          </div>
        </div> 
      </>
    )
  }

  export default Home;