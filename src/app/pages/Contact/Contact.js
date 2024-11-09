import Image from 'next/image';
import email from './email.png';
import kin from './link.png';

const Contact=()=>{
    return(
<div >
<div  className='intra5'>********************************************<Image className='intra2' src={email} alt='email'/><b>&nbsp;&nbsp;&nbsp;&nbsp;CONTACT&nbsp;&nbsp;&nbsp;&nbsp;</b><Image className='intra2' src={kin} alt='linkedin'/>**************************************</div>
<div className='home2'>< a className='intra' href="mailto:samiyamarium8@gmail.com"  target='blank'>email</a>
          <br/>
          <a className='intra' href="https://www.linkedin.com/in/samiya-marium-893192a8/" target='blank'>Linked-in</a></div> </div>)}
          export default Contact;