import React from 'react';
import "./CUOHome.css";
import "./Home.css";
import { Link } from 'react-router-dom';
import Footer from "./Footer"


function cuoHome() {
  return (
    <div class="CUOHome">
        <div class="banner">
            
            <img class="CUOHome_image" src="http://cuo.ac.in/images/logo-new-17.png">
            </img> 
        </div>
        
        <div class="dropdown">
            <ul>
        
                <li class="active"><a href="#">HOME</a></li>
                <li class="drp">
                    <a href="javascript:void(0)"  class="dropbtn">ABOUT US</a>
                  <div class="dropdown-content">
                    <a href="#">INTRODUCTION</a>
                    <a href="#">VISION & MISSION</a>
                    <a href="#">UNIVERSITY AREA</a>
                    <a href="#">UNIVERSITY MOUS</a>
                    <a href="#">UNIVERSITY ACT</a>
                  </div>
                </li>
                
                <li class="drp">
                  <a href="javascript:void(0)" class="dropbtn">ADMINISTRATION</a>
                  <div class="dropdown-content">
                    <a href="#">CHANCELLOR</a>
                    <a href="#">VICE CHANCELLOR</a>
                    <a href="#">DEAN OF SCHOOLS</a>
                    <a href="#">REGISTRAR</a>
                    <a href="#">FINANCE OFFICER</a>
                    <a href="#">CONTROLLER OF EXAMINATIONS</a>
                    <a href="#">DEAN OF STUDENT WELFARE</a>
                    <a href="#">DIRECTORS</a>
                    <a href="#">CHIEF SPOKEDPERSON</a>
                    <a href="#">CHIEF VIGILANCE OFFICER</a>
                    <a href="#">OFFFICERS & STAFF OF THE UNIVERSITY</a>
                  </div>
                </li>
                <li class="drp">
                  <a href="javascript:void(0)" class="dropbtn">STATUTORY BODIES</a>
                  <div class="dropdown-content">
                    <a href="#">COURT</a>
                    <a href="#">EXECUTIVE COUNCIL</a>
                    <a href="#">ACADEMIC COUNCIL</a>
                    <a href="#">FINANCE COMMITEE</a>
                  </div>
                </li>

                <li class="drp">
                  <a href="javascript:void(0)" class="dropbtn">ACADEMIC</a>
                  <div class="dropdown-content">
                    <a href="#">SCHOOL AND DEPAARTMENT</a>
                    <a href="#">ACADEMIC CALENDAR(NEW BATCH)</a>
                    <a href="#">ACADEMIC CALENDAR(OLD BATCH)</a>
                    <a href="#">ACADEMIC CALENDAR(MBA EXECUTIVE)</a>
                    <a href="#">RESULTS</a>
                    <a href="#">FEE STRUCTURE</a>
                    <a href="#">PROSPECTUS</a>
                  </div>
                </li>

                <li class="drp">
                  <a href="javascript:void(0)" class="dropbtn">ADMISSION</a>
                  <div class="dropdown-content">
                    <a href="#">CUCET(UG)-2022</a>
                  </div>
                </li>

                <li class="drp">
                    <a href="javascript:void(0)"  class="dropbtn">FACILITIES</a>
                  <div class="dropdown-content">
                    <a href="#">CENTRAL LIBRARY</a>
                    <Link to="/SignIn">
                    <a href="#" class="a">E-LIBRARY</a>
                    </Link>
                    <a href="#">HOSTEL</a>
                    <a href="#">COMPUTER CENTER</a>
                    <a href="#">GUEST HOUSE</a>
                  </div>
                </li>
                
                <li class="drp">
                  <a href="javascript:void(0)" class="dropbtn">RECRUITMENT</a>
                  <div class="dropdown-content">
                    <a href="#">RECRUITMENT CELL</a>
                    <a href="#">RECRUITMENT NOTICE</a>
                  </div>
                </li>

                <li class="drp">
                  <a href="javascript:void(0)" class="dropbtn">NOTIFICATION</a>
                  <div class="dropdown-content">
                    <a href="#">TENDER NOTICE</a>
                    <a href="#">ANNUAL REPORT</a>
                    <a href="#">ANNUAL ACCOUNTS</a>
                    <a href="#">ANNUAL EVENTS</a>
                    <a href="#">HOLIDAY LIST 2022</a>
                    <a href="#">OFFICE ORDERS/ NOTIFICATIONS/ CIRCULARS</a>
                    <a href="#">GAZETTE NOTIFICATION</a>
                  </div>
                </li>
                <li><a href="#">CONTACT</a></li>
              
            </ul>
        </div>
        
        <div class="campus">
            <img src="http://cuo.ac.in/images/1-n.jpg"/>
            <p class="adrs">CENTRAL UNIVERSITY OF ODISHA, CAMPUS</p>
        </div>
        <div class="profile">
        <div class="president">
            <h2>Visitor</h2>
            <div  class="top-bg" >
              <img src="http://cuo.ac.in/images/visitor-1.jpg" alt="" />
              <a href="http://www.presidentofindia.nic.in/" ><h5>His Excellency</h5></a>
              <a target="_blank" href="http://www.presidentofindia.nic.in/"><h4>Shri Ram Nath Kovind</h4></a>
              <h5>President of India</h5>
            </div>
          </div>
		
		
          <div class="chancelor">
            <h2>Chancellor</h2>
            <div class="top-bg">
				    <img src="http://cuo.ac.in/images/PV-Krishna-Bhatta-ch.jpg" alt="" /> 
				
              
				    <a target="_blank" href=""><h4>Prof. P. V. Krishna Bhatta</h4></a>
            <p align="center">&nbsp;</p>
            <p align="center">&nbsp;</p>
            </div>
          </div>
		  
		  
          <div class="chancelor">
            <h2>Vice Chancellor (I/c)</h2>
           <div class="top-bg">
             <img src="http://cuo.ac.in/images/vc-skplait-acting.jpg" alt="" />
              <a href="admin_vc.asp?pgid=2&subid=2"><h4>Prof. Sharat Kumar Palita</h4></a>
              <p align="center">&nbsp;</p>
              <p align="center">&nbsp;</p>
            </div>
          </div>
        </div>
        <div class="sections">
        <div class="blocks">
        <div class="president">
            <h2>UPCOMING/ONGOING EVENTS</h2>
            <div  class="top-bg" >
              <img src="http://cuo.ac.in/Upcomming-Events/3.jpg" alt="" />
            </div>
          </div>
		
		
          <div class="chancelor">
            <h2>ACTIVITIES AND EVENTS</h2>
            <div class="top-bg">
				    <img src="http://cuo.ac.in/Events-Images/148.jpg" alt="" /> 
				
              
				    <a target="_blank" href=""><h5>Renowned Academician and Administrator Prof. Aditya Prasad Padhy Visits CUO and Interacts with all Stakeholders</h5></a>
            <p align="center">&nbsp;</p>
            <p align="center">&nbsp;</p>
            </div>
          </div>
		  
		  
          <div class="qck">
            <h2>QUICK LINKS</h2>
           <div class="quick">
             <ul>
                <li> <img src="http://cuo.ac.in/images/virus.png" alt=""/><a target="_blank" >CORONA VIRUS AWARENESS PROGRAM
				        </a></li>
                <li> <img src="http://cuo.ac.in/images/Online-Form.png" alt=""/><a target="_blank" >UNNAT BHARAT ABHIYAN
				        </a></li>
                <li> <img src="http://cuo.ac.in/bullets/helpline.png" alt=""/><a target="_blank" >BHAROSA
				        </a></li>
                <li> <img src="http://cuo.ac.in/bullets/notice.png" alt=""/><a target="_blank" >OFFICE ORDERS / NOTIFICATIONS / CIRCULARS
				        </a></li>
                <li> <img src="http://cuo.ac.in/images/admission.png" alt=""/><a target="_blank" >SENIORITY LIST
				        </a></li>
                <li> <img src="http://cuo.ac.in/images/result.png" alt=""/><a target="_blank" >NAAC DATA
				        </a></li>
                <li> <img src="http://cuo.ac.in/images/education.png" alt=""/><a target="_blank" >NIRF DATA
				        </a></li>
                <li> <img src="http://cuo.ac.in/images/dairy.png" alt=""/><a target="_blank" >COMMITTEES
				        </a></li>
                <li> <img src="http://cuo.ac.in/images/admission.png" alt=""/><a target="_blank" >UNIVERSITY MOUS
				        </a></li>
                <li> <img src="http://cuo.ac.in/images/student.png" alt=""/><a target="_blank" >LIST OF REGD. M.PHIL/PH.D STUDENTS
				        </a></li>
                <li> <img src="http://cuo.ac.in/images/education.png" alt=""/><a target="_blank" >EK BHARAT SHRESTHA BHARAT
				        </a></li>
                <li> <img src="http://cuo.ac.in/images/admission.png" alt=""/><a target="_blank" >MOOCS
				        </a></li>
                <li> <img src="http://cuo.ac.in/bullets/download.png" alt=""/><a target="_blank" >DOWNLOAD
				        </a></li>
                <li> <img src="http://cuo.ac.in/images/dairy.png" alt=""/><a target="_blank" >RESERVATION ROSTER
				        </a></li>
                <li> <img src="http://cuo.ac.in/images/rti.png" alt=""/><a target="_blank" >SUO MOTU DISCLOSURE
				        </a></li>
                <li> <img src="http://cuo.ac.in/images/rti.png" alt=""/><a target="_blank" >RTI
				        </a></li>
                <li> <img src="http://cuo.ac.in/images/feedback.png" alt=""/><a target="_blank" >FEEDBACK
				        </a></li>
                <li> <img src="http://cuo.ac.in/images/cb.png" alt=""/><a target="_blank" >NATIONAL CYBER CRIME REPORTING PORTAL
				        </a></li>
                <li> <img src="http://cuo.ac.in/images/sbi.png" alt=""/><a target="_blank" >STATE BANK COLLECT
				        </a></li>

             </ul>
            </div>
             <span class="photo-gallery"> <a href="photoGallery.asp"> <img src="http://cuo.ac.in/images/photogallery.png" alt=""/></a></span>
           <span class="photo-gallery"> <a href="video_gallery.asp"> <img src="http://cuo.ac.in/images/videogallery.png" alt=""/></a></span>
           <span class="photo-gallery"> <a href="http://mail.cuo.ac.in"> <img src="http://cuo.ac.in/images/email.png" alt=""/></a></span>
          </div>
          </div>
        <div class="news">
            <h2>CUO IN NEWS</h2>
            <div  class="top-bg" >
              <img src="http://cuo.ac.in/NewsPaperCuttings/24.jpg" alt="" />
            </div>
        </div>
        
        </div>
        <div class="footer"> 
            <Footer/>
        </div>
        <div class="copyRight">
          <h3>© Copy Rights Central University of Odisha All Rights Reserved</h3>
        </div>
        
      
    </div>

  )
}

export default cuoHome