import Image from 'next/image';
import profile from './profile1.png'
import agent from './agent.png'
import edu from './edu.png';
import skills from './skills.png';
import matlab from './matlab.png';
import ads from './ADS.png';
import html5 from './html5.png';
import css3 from './css3.png';
import ts from './ts.png';
import tailwind from './tailwindcss.png';
import nextjs from './nextjs.png';
import react from './react.png';

import interest from './interest.png';
import history from './history.png';
import sports from './sports.png';
import music from './music.png'

const About=()=>{
    return(
        <div>
            <div className="home2"><b>ABOUT ME</b></div>
            <div className="home1"><Image className="imag1 " src={profile} alt="profile"/><p className="para"><b>Hello, My name is <b className="intra">Samiya Marium</b>.....<br/><br/>I have done <b className="intra">MS in Electrical Engineering</b>  from NUST with specialization in <b className="intra">Telecommunication.</b><br/><br/> I have done my <b className="intra">thesis</b> on <b className="intra">Low Latency MAC protocol for Industrial Wireless Sensor Network</b>..<br/><br/>I have done small projects on <b className="intra">Compter Vision</b> and <b className="intra">Artificial Intelligence</b> during my academics..  </b><br/><br/><b>Currently, I am enrolled in</b> <i><b className="intra">Governer Sindh IT program titled "Certified Cloud Applied Generative AI Engineer (GenEng)" </b></i>
              <br/><br/><br/><br/><b className="intra">Lets discuss my qualifications in detail in forth coming sections...</b> </p><Image className="imag1" src={agent} alt="agentic"/> </div>

             <div ><div className="intra4"><b className="intra4"><br/><br/>EDUCATION<Image className="imag2" src={edu} alt="education"/></b>********MS IN Electrical Engineering from NUST..<br/><br/> ********BS in Electronics Engineering from SSUET..<br/><br/> *********F.Sc in Pre-Engineering from Fazaia Degree College..<br/><br/>  </div><div className="intra4"><b className="intra4"><br/><br/>SKILLS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Image className="imag2" src={skills} alt="skills"/></b><br/><br/><br/> &nbsp;&nbsp;<Image className="imag2" src={matlab}  alt="skills"/>&nbsp;&nbsp;<Image className="imag2" src={ads} alt="ads"/> &nbsp;&nbsp;<Image className="imag2" src={html5} alt="skills"/>&nbsp;&nbsp;<Image className="imag2" src={css3} alt="skills"/>&nbsp;&nbsp;<Image className="imag2" src={ts} alt="skills"/>&nbsp;&nbsp;<Image className="imag2" src={tailwind} alt="skills"/>&nbsp;&nbsp;<Image className="imag2" src={nextjs} alt="skills"/> &nbsp;&nbsp;<Image className="imag2" src={react} alt="skills"/></div><div className="intra4"><b className="intra4"><br/><br/>INTERESTS&nbsp;&nbsp;<Image className="imag2" src={interest} alt="interest"/></b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Image className="imag2" src={history} alt="interest"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Image className="imag2" src={sports} alt="interest"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Image className="imag2" src={music} alt="interest"/></div></div>
              </div>
              
)
}

export default About;
//&nbsp;&nbsp<img className="imag2" src={} alt=""skills/>