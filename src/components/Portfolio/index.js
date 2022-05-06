import React from 'react';
import challenge1 from '../../assets/images/challenge1.jpg';
import passwordGenerator from '../../assets/images/pw-generator.jpg'
import boredAF from '../../assets/images/boredAF.jpg'
import codersCave from '../../assets/images/coders-cave.jpg'
import quiz from '../../assets/images/quiz.jpg'
import weather from '../../assets/images/weather.jpg'
import shopify2 from '../../assets/images/shopify2-0.jpg'
import Footer from '../Footer';

function Portfolio() {
    return (
        <div>
        <section className='portfolio'>
        <div>
        <h2>
            Portfolio
        </h2>
        </div>
        <p>
            Here is a gallery of my completed projects!
        </p>
        <div>
        <div>
        <img src={challenge1} alt=""/>
        </div>
        <a href="https://nxf1lt3r.github.io/challenge1/" class="work-link" >Horiseon Deployed Application</a><br/>
        <a href="https://github.com/NXF1LT3R/challenge1" class="work-link">Horiseon GitHub Repository</a>
        <div>
        <img src={passwordGenerator} alt=""/>
        </div>
        <a href="https://nxf1lt3r.github.io/password-generator/" class="work-link" >Password Generator Deployed Application</a><br/>
        <a href="https://github.com/NXF1LT3R/password-generator" class="work-link" >Password Generator Repository</a>
        <div>
        <img src={quiz} alt=""/>
        </div>
        <a href="https://nxf1lt3r.github.io/code-quiz/" class="work-link" >Code Quiz Deployed Application</a><br/>
        <a href="https://github.com/NXF1LT3R/code-quiz" class="work-link" >Code Quiz GitHub Repository</a>
        <div>
        <img src={weather} alt=""/>
        </div>
        <a href="https://nxf1lt3r.github.io/weather-dashboard/" class="work-link" >Weather Dashboard Deployed Application</a><br/>
        <a href="https://github.com/NXF1LT3R/weather-dashboard" class="work-link" >Weather Dashboard GitHub Repository</a>
        <div>
        <img src={boredAF} alt=""/>
        </div>
        <a href="https://zsvoboda87.github.io/Bored-AF/" class="work-link" >Bored-AF Deployed Application</a><br/>
        <a href="https://github.com/Zsvoboda87/Bored-AF" class="work-link" >Bored-AF GitHub Repository</a>
        <div>
        <img src={codersCave} alt=""/>
        </div>
        <a href="https://pure-everglades-43557.herokuapp.com/" class="work-link" >Coders Cave Deployed Application</a><br/>
        <a href="https://github.com/perfect-perfect/coders-cave" class="work-link" >Coders Cave GitHub Repository</a>
        <div>
        <img src={shopify2} alt=""/>
        </div>
        <a href="https://shopify-2-ed-ryan-dariga.herokuapp.com/" class="work-link" >Shopify 2.0 Deployed Application</a><br/>
        <a href="https://github.com/rrich-kray/shopify-2.0" class="work-link" >Shopify 2.0 GitHub Repository</a>
        </div>
    </section>
    <Footer />
    </div>
    )
}

export default Portfolio;