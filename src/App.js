import React from 'react';
import Logo from './assets/Logo.svg';
import Mobile from './assets/Mobile_Screen.svg';
import HeartIcon from './assets/Icon.svg';
import Cards from './assets/Cards.svg';
import MobileSave from './assets/Save.png';


function App() {
  return (
 
    <main>

<div className="header">
      <div className="container">
          <div className="header__top-bar">
              <div className="row pt-3">
                  <div className="col-lg-6">
                    <figure>
                      <img className="header__logo" src={Logo} alt="Logo" title="Logo"></img>
                    </figure>
                  </div>
                  <div className="col-lg-6 menu_link">
                    <article>
                    <a href="#section__feature"> About Us</a>
                    <a href="#a"> Features</a>
                    <a href="#a"> Blog</a>
                    <a href="#a"> Contact</a>
                    <a href="#a"> Download App</a>
                    </article>
                  </div>
              </div>
          </div>
          <div className="row"> 
            <div className="col-lg-6">
            <div className="header__text">
            <h1> Introducing Abstract <br/>
              App landing page.</h1><br/>
              <p> A perfect landing page to showcase<br/>
              your new App. </p>
          </div>
            </div>

            <div className="col-lg-6">
              <div className="header__img">
                <figure>
                  <img src={Mobile} alt="Mobile Screen" title="Mobile Screen" className="header__mobile-img" />
                </figure>
              </div>
            </div>
          </div>
      </div>
</div>

<div className="section__feature-block" id="section__feature">
    <div className="container">
        <div className="row">
            <div className="col-lg-4">
                <div className="card__feature">
                    <figure>
                        <img src={HeartIcon} title="" alt="" className="" />
                    </figure>
                    <article>
                        <h1>Modern & Trendy Design</h1>
                        <p>Dictas scaevola democritum cu his, magna abhorreant dissentias ut</p>
                    </article>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card__feature">
                    <figure>
                    <img src={HeartIcon} title="" alt="" className="" />
                    </figure>
                    <article>
                        <h1>Save your Time</h1>
                        <p>oportere patrioque sit et, eum ne prima nemore perfecto. Eu cibo quidam eleifend per.</p>

                        <a href="A"> Learn More</a>
                    </article>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card__feature">
                    <figure>
                    <img src={HeartIcon} title="" alt="" className="" />
                    </figure>
                    <article>
                        <h1>Made with Love</h1>
                        <p>Inimicus hendrerit an duo, feugiat adipiscing everti nostrum id.</p>
                    </article>
                </div>
            </div>
        </div>
    </div>
</div>

<div className="section__modern" id="modern">
	<div className="container">
		<div className="row">
			<div className="col-lg-6 pt-10rem">
				<h1 className="h1-color"> Modern & <br/>
				Trendy Design </h1>

				<p> Dictas scaevola democritum cu his, magna abhorreant dissentias ut <br/> Dictas scaevola democritum cu his.</p>

				<a href="a" class="link-read-more"> Learn More</a>
			</div>
		</div>
    <div className="cards">
				<figure>
					<img src={Cards} alt="" title="" className=""/>
				</figure>
			</div>
	</div>
</div>

<div className="section_save">
	<div className="container">
		<div className="row">
			<div className="col-lg-6">
				<figure>
					<img src={MobileSave} alt="" title="" className="img-save"/>
				</figure>
			</div>
		</div>
	</div>
</div>

  

    </main>



);
}

export default App;
