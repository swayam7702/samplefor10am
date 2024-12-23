import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from 'react';

const About = () => {

  useEffect(() => {
    AOS.init({
   
      duration: 1500,
      easing: "ease-out-cubic",
    });
  }, []);
  
  return (
    // <section id="team" className="team section" >
    //       <div className="container section-title" data-aos="fade-up">
    //         <div className="section-title-container d-flex align-items-center justify-content-between">
    //           <h2>Team</h2>
    //           <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
    //         </div>
    //       </div>
    //       <div className="container">

    //         <div className="row gy-4">

    //           <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
    //             <div className="team-member d-flex align-items-start">
    //               <div className="pic"><img src="assets/img/team/team-1.jpg" className="img-fluid" alt=""/></div>
    //               <div className="member-info">
    //                 <h4>Walter White</h4>
    //                 <span>Chief Executive Officer</span>
    //                 <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
    //                 <div className="social">
    //                   <a href=""><i className="bi bi-twitter-x"></i></a>
    //                   <a href=""><i className="bi bi-facebook"></i></a>
    //                   <a href=""><i className="bi bi-instagram"></i></a>
    //                   <a href=""> <i className="bi bi-linkedin"></i> </a>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>

    //           <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
    //             <div className="team-member d-flex align-items-start">
    //               <div className="pic"><img src="assets/img/team/team-2.jpg" className="img-fluid" alt=""/></div>
    //               <div className="member-info">
    //                 <h4>Sarah Jhonson</h4>
    //                 <span>Product Manager</span>
    //                 <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
    //                 <div className="social">
    //                   <a href=""><i className="bi bi-twitter-x"></i></a>
    //                   <a href=""><i className="bi bi-facebook"></i></a>
    //                   <a href=""><i className="bi bi-instagram"></i></a>
    //                   <a href=""> <i className="bi bi-linkedin"></i> </a>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>

    //           <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
    //             <div className="team-member d-flex align-items-start">
    //               <div className="pic"><img src="assets/img/team/team-3.jpg" className="img-fluid" alt=""/></div>
    //               <div className="member-info">
    //                 <h4>William Anderson</h4>
    //                 <span>CTO</span>
    //                 <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
    //                 <div className="social">
    //                   <a href=""><i className="bi bi-twitter-x"></i></a>
    //                   <a href=""><i className="bi bi-facebook"></i></a>
    //                   <a href=""><i className="bi bi-instagram"></i></a>
    //                   <a href=""> <i className="bi bi-linkedin"></i> </a>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>

    //           <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
    //             <div className="team-member d-flex align-items-start">
    //               <div className="pic"><img src="assets/img/team/team-4.jpg" className="img-fluid" alt=""/></div>
    //               <div className="member-info">
    //                 <h4>Amanda Jepson</h4>
    //                 <span>Accountant</span>
    //                 <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
    //                 <div className="social">
    //                   <a href=""><i className="bi bi-twitter-x"></i></a>
    //                   <a href=""><i className="bi bi-facebook"></i></a>
    //                   <a href=""><i className="bi bi-instagram"></i></a>
    //                   <a href=""> <i className="bi bi-linkedin"></i> </a>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>

    //         </div>

    //       </div>
    // </section>


   <div className="container">
     <div className="sec">
        <div className="sub1-sec" data-aos="fade-up"></div>
        <div className="sub2-sec" data-aos="fade-up"></div>
    </div>
    <div className="sec">
        <div className="sub1-sec" data-aos="fade-right"></div>
        <div className="sub2-sec" data-aos="fade-left"></div>
    </div>
    <div className="sec">
        <div className="sub1-sec" data-aos="zoom-out"></div>
        <div className="sub2-sec" data-aos="zoom-out"></div>
    </div>
    <div className="sec">
        <div className="sub1-sec" data-aos="flip-right"></div>
        <div className="sub2-sec" data-aos="flip-right"></div>
    </div>
    <div className="sec">
        <div className="sub1-sec" data-aos="fade-up-left"></div>
        <div className="sub2-sec" data-aos="fade-up-left"></div>
    </div>
    <div className="spl">
        <div className="sub1-sec" data-aos=""></div>
        <div className="sub2-sec" data-aos=""></div>
        <div className="sub1-sec" data-aos=""></div>
        <div className="sub2-sec" data-aos=""></div>
    </div>
   </div>
  )
}

export default About
