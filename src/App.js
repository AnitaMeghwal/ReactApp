import logo from './logo.svg';
import alinealogo from './alinealogo1.png';
import smalllogo from './logosmall.jpg';
import phone from './phoneimg1.png';
import gifcr from './gifcr.gif';
import investing from './investing1.gif';
import community from './community1.png';
import investment from './investment1.png';
import learning from './learning.png';
import phone2 from './phone2.gif';
import gifnew from './gifnew2.gif';
import mayshad from './mayshad.jpg';
import ath from './aspiretoher.png';
import cu from './columbiauniversity.png';
import ialso from './ialso.png';
import im from './IM.png';
import pt from './thepowerthread.png';
import business from './businesscasual.png';


import './App.css';
import { FaApple } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaPinterest } from 'react-icons/fa';
import { FaComments } from 'react-icons/fa';

import Typical from 'react-typical';

function App() {
  return (
    <div className="App" style={{backgroundColor:'#9751a0', height:'2000px'}} >
    <div>
      <header>
        <div  style={{backgroundColor:'#9751a0', width:'100%', height:'100px', position:'fixed',zIndex:100}}>
          <img src={alinealogo} style={{float:'left', maxHeight:'100px', marginLeft:'50px'}}/>
          <button style={{color:'#9751a0', position:'fixed', fontSize:'20px', padding:'20px', borderRadius:'30px', border:'none', marginTop:'530px', marginLeft:'850px'}}><FaComments/></button>
        </div>
      </header>
    <div>
        <div style={{float:'left', maxWidth:'470px', marginTop:'150px', marginLeft:'80px'}}>
          <h1 style={{color:'white', fontFamily:'Verdana'}}>Not Your Typical Investing App </h1>
          <h2 style={{color:'white', fontFamily:'monospace', fontSize:'30px',  opacity: '0.8'}}> 
          <Typical
          loop={Infinity}
          wrapper="b"
          steps={[
          'Invest with intention',2000,
          'Connect with intention',2000,
          'Learn with intention',2000
          ]}
          />
          </h2>
          <h3 style={{color:'white', fontFamily:'Verdana', fontSize:'15px'}}>Alinea makes responsible investing fun, easy, and social.</h3>
          <button style={{color:'#9751a0', fontFamily:'Verdana',fontSize:'15px', padding:'20px', borderRadius:'30px', border:'none', marginTop:'30px'}}>Start Your Journey</button>
          <div style={{marginTop:'30px', color:'grey',fontSize:'10px',padding:'10px', fontFamily:'Verdana', maxWidth: '120px',maxHeight: '150px', borderRadius:'10px', border:'none',backgroundColor:'white', opacity: '0.9' }}>Coming Soon 
           <FaApple style={{fontSize:'40px', float:'left', marginTop:'10px' }}/> <p style={{color:'grey',fontSize:'15px'}}>  App Store </p> </div>
          </div>
         <img src={phone} style={{position:'absolute', marginLeft:'300px', maxHeight:'600px', marginTop:'165px',zIndex:'2',  opacity: '0.8'}}/>
         <img src={gifcr} style={{marginLeft:'343px', maxHeight:'235px', marginTop:'247px', zIndex:'3', opacity: '0.7'}}/>
        </div>
        <div style={{backgroundColor:'white', marginTop:'200px', textAlign:'center', overflow:'hidden',zIndex:'2'}}>
          <h1>We get it.</h1>
          <img src={investing} style={{maxHeight:'100px', zIndex:'99'}}/>
          <h1>Investing is overwhelming</h1>
          <h1>but it doesn’t have to be.</h1>
          <div class="row">
          <div class="column">
            <div class="abox" style={{boxShadow:'10px 10px 10px lightgrey', backgroundColor:'lavenderblush', borderRadius:'20px', height:'300px', marginLeft:'30px', marginTop:'30px', maxWidth:'25%', textAlign:'center', float: 'left', padding:'30px'}}>
            <img src={community} style={{maxHeight:'100px'}}/>
            <h3> Community </h3>
            <p style={{color:'grey'}}> We all need someone to lean on and investing is no different.
            As part of our community, you get the support to embark and continue on your journey.</p>
            </div>
          </div>
          <div class="column">
            <div class="abox" style={{boxShadow:'10px 10px 10px lightgrey', backgroundColor:'lavenderblush', borderRadius:'20px', height:'300px', marginLeft:'30px', marginTop:'30px', maxWidth:'25%', textAlign:'center', float: 'left', padding:'30px'}}>
            <img src={investment} style={{maxHeight:'100px'}}/>
            <h3> Responsible Investing </h3>
            <p style={{color:'grey'}}>Make your money moves matter!
              Express your values and interests through your investments.</p>
            </div>
          </div>
          <div class="column">
            <div class="abox" style={{boxShadow:'10px 10px 10px lightgrey', backgroundColor:'lavenderblush', borderRadius:'20px', height:'300px', marginLeft:'30px', marginTop:'30px', maxWidth:'25%', textAlign:'center', float: 'left', padding:'30px'}}>
            <img src={learning} style={{maxHeight:'100px'}}/>
            <h3> Learning </h3>
            <p style={{color:'grey'}}>We eliminate all the unnecessary financial jargon.
              Learn as you go with our interactive mini capsules and before you know it, you’ll be a confident investor.</p>
            </div>
          </div>
          </div>
          <h1 style={{marginTop:'500px'}}>What does Alinea offer?</h1>
          <div class="row">
          <div class="column" style={{height:'400px', marginLeft:'30px', marginTop:'30px', maxWidth:'25%', textAlign:'center', float: 'left', padding:'30px'}}>
            <div class="abox">
            <h3 style={{marginTop:'50px'}}>🍩 Custom Portfolios </h3>
            <p style={{color:'grey'}}>Pre-packaged portfolios for you.</p>
            </div>
            <div class="abox">
            <h3 style={{marginTop:'50px'}}>👭 Kickass Community </h3>
            <p style={{color:'grey'}}>Our community is here to support you every step of the way.</p>
            </div>
            <div class="abox">
             <h3 style={{marginTop:'50px'}}>🚀 Speedy Support </h3>
            <p style={{color:'grey'}}>Our community is here to support you every step of the way.</p>
            </div>
          </div>
          <div class="column" style={{height:'500px', marginLeft:'30px', marginTop:'30px', maxWidth:'25%', textAlign:'center', float: 'left', padding:'30px'}}>
            <img src={phone} style={{position:'absolute'}}/>
            <img src={gifnew} style={{marginTop:'75px', marginLeft:'50px', maxHeight:'250px'}}/>
          </div>
          <div class="column" style={{height:'400px', marginLeft:'90px', marginTop:'30px', maxWidth:'25%', textAlign:'center', float: 'left', padding:'30px'}}>
            <div class="abox">
            <h3 style={{marginTop:'50px'}}>🍕 Fractional Shares </h3>
            <p style={{color:'grey'}}>Invest in any share with as little as $1.</p>
            </div>
            <div class="abox">
            <h3 style={{marginTop:'50px'}}>💰 Invest with Intention </h3>
            <p style={{color:'grey'}}>We give you the right information to make an impact.</p>
            </div>
             <div class="abox">
             <h3 style={{marginTop:'50px'}}>📚 Learn & Grow </h3>
            <p style={{color:'grey'}}>We make learning fun and easy.</p>
            </div>
          </div>
          </div>
      </div>
      </div>
      <div style={{backgroundColor:'#9751a0'}}>
          <div style={{padding:'80px', maxWidth:'500px',fontFamily:'Verdana'}}>
            <h1 style={{color:'white'}}>BECOME A PART OF OUR KICKASS COMMUNITY</h1>
            <div class="box" style={{maxWidth:'80px', marginLeft:'20px'}}><img src={smalllogo} style={{maxHeight:'80px', borderRadius: '50px'}}/> </div>
            <p style={{color:'white'}}>We can’t do this alone, so we need each other, especially you.
            Join our community and get started on your investing journey!</p>
            <button style={{color:'purple', fontSize:'15px', padding:'20px', borderRadius:'40px', border:'none'}}>Join Now</button>
            
          </div>
      </div>
      <div  style={{textAlign:'center', padding:'80px', fontFamily:'Verdana'}}>
      <h1>Featured in </h1>
      <marquee behavior="scroll" direction="left">
      <div class="abox" style={{float:'left',  marginTop:'30px'}}>
      <img src={mayshad} style={{maxHeight:'100px'}}/>
      <img src={ath} style={{maxHeight:'100px', marginLeft:'20px'}}/>
      <img src={cu} style={{maxHeight:'50px', marginLeft:'20px'}}/>
      <img src={ialso} style={{maxHeight:'100px', marginLeft:'20px'}}/>
      <img src={im} style={{maxHeight:'100px', marginLeft:'20px'}}/>
      <img src={pt} style={{maxHeight:'30px', marginLeft:'20px'}}/>
      <img src={business} style={{maxHeight:'100px', marginLeft:'20px'}}/>
      </div>
      </marquee>
      <form style={{marginTop:'150px', fontFamily:'Verdana'}}>
      <input style={{fontSize:'15px', padding:'20px', borderRadius:'40px', borderColor:'#9751a0'}} type="text" id="email" placeholder="Enter email address" name="email"/>
      <input style={{fontSize:'12px', padding:'15px', borderRadius:'40px', backgroundColor:'#9751a0', color:'white'}} type="submit" value="Subscribe" />
      </form>
      
      </div>
      <div style={{backgroundColor:'#9751a0', height:'350px'}}>
          <div style={{padding:'80px', maxWidth:'300px',fontFamily:'Verdana'}}>
            <img src={alinealogo} style={{maxHeight:'100px', float:'left'}}/>
            <p style={{float:'left', marginLeft:'30px', color:'white', textAlign:'left'}}>Alinea Invest makes responsible investing fun, easy, and social with learning features. </p>
            <FaInstagram style={{fontSize:'20px', float:'left', marginTop:'10px', color:'white', marginLeft:'30px' }}/>
            <FaLinkedin style={{fontSize:'20px', float:'left', marginTop:'10px', color:'white', marginLeft:'20px' }}/>
            <FaTwitter style={{fontSize:'20px', float:'left', marginTop:'10px', color:'white', marginLeft:'20px' }}/>
            <FaFacebook style={{fontSize:'20px', float:'left', marginTop:'10px', color:'white', marginLeft:'20px' }}/>
            <FaPinterest style={{fontSize:'20px', float:'left', marginTop:'10px', color:'white', marginLeft:'20px' }}/>
          </div>
      </div>
      <div style={{padding:'50px', textAlign:'center', color:'grey'}}>
      <p>This website is for informational purposes only, and is not intended to serve as a recommendation to buy or sell any security in any account, and is not an offer or sale of a security. They are also not research reports and are not intended to serve as the basis for any investment decision. Any third-party information provided therein does not reflect the views of Alinea Invest, LLC. All investments involve risk and the past performance of a security or financial product does not guarantee future results or returns. Keep in mind that while diversification may help spread risk, it does not assure a profit or protect against loss. There is always the potential of losing money when you invest in securities or other financial products. Investors should consider their investment objectives and risks carefully before investing. The price of a given security may increase or decrease based on market conditions and customers may lose money, including their original investment. Alinea Invest, LLC is not a registered investment adviser or broker-dealer.</p>

      <p style={{fontSize:'14px'}}>Copyright © 2020. All rights reserved by Alinea Invest</p>
      </div>
    </div>
  );
}

export default App;
