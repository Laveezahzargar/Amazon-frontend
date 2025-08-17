import React from 'react'
import './footer.css'
import amazonLogo from '../../Assets/amazonLogo.png'

const Footer = () => {
    return (
        <div className='footer'>

            <div className="footerContent">

                <div className="footerCont1">
                    <div className="contentFooterTitle">
                        Get To Know Us
                    </div>
                    <div className="contentFooterSubTitleddiv">

                        <div className="contentFooterSubTitleCont">About Us </div>


                        <div className="contentFooterSubTitleCont">Careers</div>


                        <div className="contentFooterSubTitleCont"> Press Releases </div>


                        <div className="contentFooterSubTitleCont">Amazon Science</div>


                    </div>
                </div>

                <div className="footerCont1">
                    <div className="contentFooterTitle">
                        Connect With Us
                    </div>
                    <div className="contentFooterSubTitleddiv">

                        <div className="contentFooterSubTitleCont">Instagram </div>


                        <div className="contentFooterSubTitleCont">Twitter</div>


                        <div className="contentFooterSubTitleCont">Facebook </div>


                    </div>
                </div>

                <div className="footerCont1">
                    <div className="contentFooterTitle">
                       Make Money With Us
                    </div>
                    <div className="contentFooterSubTitleddiv">

                        <div className="contentFooterSubTitleCont">About Us </div>


                        <div className="contentFooterSubTitleCont">Careers</div>


                        <div className="contentFooterSubTitleCont"> Press Releases </div>


                        <div className="contentFooterSubTitleCont">Amazon Science</div>


                    </div>
                </div>

                <div className="footerCont1">
                    <div className="contentFooterTitle">
                        Let Us Help You
                    </div>
                    <div className="contentFooterSubTitleddiv">

                        <div className="contentFooterSubTitleCont">About Us </div>


                        <div className="contentFooterSubTitleCont">Careers</div>


                        <div className="contentFooterSubTitleCont"> Press Releases </div>


                        <div className="contentFooterSubTitleCont">Amazon Science</div>


                    </div>
                </div>

            </div>
            <div className="amazonImg">
                <img src={amazonLogo} className='amazonImgFooter' />
            </div>
        </div>
    )
}

export default Footer