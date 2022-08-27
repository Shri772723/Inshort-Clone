import React from 'react'
import './footer.css'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import AddLinkRoundedIcon from '@mui/icons-material/AddLinkRounded';
const Footer = () => {
  return (
    <>
     <div className="footer">
      <div className="name"><span>Inshort Clone made By - Shriprasad Gomase </span></div>
      <hr style={{width:'90%'}} />
      <div className="iconContainer">
      <a >    <FacebookRoundedIcon/>     </a>   
        <a href="mailto:shriprasadgomase@gmail.com" target='_blank'><EmailRoundedIcon/></a>
        <a href="www.linkedin.com/in/shriprasad-gomase-786b5613a" target='_blank'><AddLinkRoundedIcon/></a>
      </div>
     </div> 
    </>
  )
}

export default Footer
