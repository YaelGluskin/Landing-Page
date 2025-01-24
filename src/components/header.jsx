import ParticlesBg from "particles-bg";
import pic from "../back-ground.png";
export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        {/* <ParticlesBg type="circle" bg={{zIndex: 0, position:"absolute", top:0}} /> */}
        {/** image instead */}
        <img src={pic} alt="hero-bg" style={{ width: "100%", height: "100vh", objectFit: "cover", position: "absolute"}} />
        
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h2>
                  {props.data ? props.data.intro : 'Loading'}
                </h2>
                <p>{props.data ? props.data.description : 'Loading'}</p>
                <p>{props.data ? props.data.suggestion : 'Loading'}</p>
                <h2>
                  {props.data ? props.data.conclusion : 'Loading'}
                </h2>
                <a
                  href='#features'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  באו נצלול
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
