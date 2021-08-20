import React from 'react';
import emailjs from 'emailjs-com';

export default function ContactMe() {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_xfrnsjk', 'template_w6i2mpk', e.target, 'user_vccCy2B5SXosoRj67LR6F')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      }

    return (

        <section className="contact" id="contact">
        <div className="max-width">
            <h2 className="title">Contact Us</h2>
            <div className="contact-content">
                <div className="column left">
                    <div className="text">Get in Touch</div>
                    <p>Thank you for making it this far! This means, you may just be interested in joining us! If any questions, please don't hisitate to contact us. We will try our best to get back to you as soon as possible.</p>
                    <div className="icons">
                        <div className="row">
                            <i className="fas fa-user"></i>
                            <div className="info">
                                <div className="head1">Name</div>
                                <div className="sub-title">Kurtis, Maggie, and the Staff</div>
                            </div>
                        </div>
                        <div className="row">
                            <i className="fas fa-map-marker-alt"></i>
                            <div className="info">
                                <div className="head2">Address</div>
                                <div className="sub-title">Addison, Texas</div>
                            </div>
                        </div>
                        <div className="row">
                            <i className="fas fa-envelope"></i>
                            <div className="info">
                                <div className="head3">Email</div>
                                <div className="sub-title">asianfriendsofdfw@gmail.com</div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="column right">
                    <div className="text">Message Us</div>
                    <form className="contact-form" onSubmit={sendEmail} action="#" method="POST">
                        <div className="fields">
                            <div className="field name">
                                <input type="text" className="fullname" placeholder="Name" name="name" />
                            </div>
                            <div className="field email">
                                <input type="text" className="email-input" placeholder="Email" name="email" />
                            </div>
                        </div>
                        <div className="field">
                            <input type="text" className="subject" placeholder="Subject" name="subject" />
                        </div>
                        <div className="field textarea">
                            <textarea className="message" cols="30" rows="10" placeholder="Message.." name="message"></textarea>
                        </div>
                        <div className="button-area">
                            <button className="send-msg" type="submit" name="send" onClick="sendMail(); return false">Send message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>



    )

}