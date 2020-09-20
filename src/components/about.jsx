import React, { Component } from 'react'
//import Contact from './components/contact';

export default class Home extends Component {
    render() {
      return (
        <div>
          <div id="center">
            <div id="content">
              <div id="tabs-content-wrap">
                <ul>
                  {/*------------ABOUT ME CONTENT------------*/}
                  <li id="t1" className="tab-content">
                    <h2><span className="header2">About Me</span> {/*u can put your name after a "/" here if you want-*/} </h2>
                    {/*--to add or remove a question copy/delete from here:----*/}
                    <div className="question">Name:</div>
                    <div className="answer">Carmen Li</div>
                    {/*---to here-----*/}
                    <div className="question">Age:</div>
                    <div className="answer">19</div>
                    <div className="question">Pronouns:</div>
                    <div className="answer">She/her</div>
                    <div className="question">Location:</div>
                    <div className="answer">Bay Area</div>
                    <div className="question">Hobbies:</div>
                    <div className="answer">And this is an answer.</div>
        
                  </li>
                  {/*---------END OF ABOUT ME CONTENT----------*/}
                  {/*--------------LINKS CONTENT---------------*/}
                  <li id="t2" className="tab-content">
                    <h2><span className="header2">Links</span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper hendrerit diam, vitae tempus ante porta nec.</p>
                    <p>Vestibulum a ex scelerisque metus finibus pellentesque sit amet vitae urna. Curabitur elementum est sed dolor congue, in aliquet ex viverra. Aenean lacinia dapibus lorem eu pulvinar. Vivamus non velit in ante dictum rhoncus vitae sed velit. </p>
                    <p>Fusce convallis gravida turpis vel eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ipsum quam.</p>
                    <p>Phasellus porta efficitur eros ut cursus.</p>
                    <p>Etiam congue fringilla felis quis tempor. Nam nec mattis velit. Cras rutrum, odio eu auctor dapibus, leo urna aliquam tellus, sit amet laoreet nisi odio in urna. Nulla at ipsum ultricies, tincidunt dui non, lacinia velit. Pellentesque sollicitudin condimentum purus id pharetras.</p>
                    </li>
                  {/*------------END OF LINKS CONTENT-----------*/}
                  {/*---------------F.A.Q CONTENT--------------*/}
                  <li id="t3" className="tab-content">
                    <h2><span className="header2">Message</span></h2>
                    stuff
                  </li>
                  {/*-----------END OF F.A.Q. CONTENT---------*/}
                  {/*--------------BLOGROLL CONTENT------------*/}
                  <li id="t4" className="tab-content">
                    <h2><span className="header2">Resources</span></h2>
                    {/*------to add/remove a section, copy/delete from here:----*/}
                    <div className="links-wrap">
                      <div className="links-title">Black Lives Matter</div>
                      <div className="links">
                        <a href="https://blacklivesmatters.carrd.co/" target="_blank">Ways to Help -</a>
                        <a href="https://msha.ke/30flirtyfilm/" target="_blank">Justice for Breonna Taylor -</a> 
                        <a href="https://pendingpetition.carrd.co/" target="_blank">Pending Petitions -</a>
                        <a href="https://linktr.ee/blacklivesmatter" target="_blank">BLM Linktree -</a>
                        <a href="https://blacktranslivesmatter.carrd.co/" target="_blank">Black Trans Lives Matter -</a>
                        <a href="https://linktr.ee/amorecon" target="_blank">More Resources</a>
                      </div>

                      <div className="links-title">Lebanon</div>
                      <div className="links">
                        <a href="https://lebanonscrisis.carrd.co/" target="_blank">What's Happening -</a>
                        <a href="https://www.supportlrc.app/" target="_blank">Donate to Red Cross -</a> 
                        <a href="http://arab.org/" target="_blank">Donate for Free</a>
                      </div>
                    </div>
                    {/*----------------------to here----------------------*/}
                  </li>
                  {/*-----------END OF BLOGROLL CONTENT---------*/}
                </ul>
              </div>
            </div> 
            {/*-------------------SIDEBAR------------------*/}
            <div id="pic">
              {/*--put image link here--*/}
              <img src="https://64.media.tumblr.com/03c696aebed5d3be7b2ed36ac975ba5d/tumblr_nakvgqa8U71qfhbsvo1_500.jpg" />
            </div>
            <div id="headr">
              <div id="tabs-bar">
                <ul id="tabs-nav">
                  <li><a href="#t1" className="first-link">About Me</a></li>
                  <li><a href="#t2" className="second-link">Experience</a></li>
                  <li><a href="#t3" className="third-link">Contact</a></li>
                  <li><a href="#t4" className="fourth-link">Resources</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div id="navi">
            <a href="/">&lt; back &gt;</a>
          </div>
        </div>
      );
    }
  };