import React from "react";

function Contact() {
  return (
    <>
      <div className="contact-us py-5">
        <div className="container">
          <div className="contact-form">
            <div className="row">
              <div className="col-sm-7">
                <form
                  id="ajax-contact"
                  method="post"
                  action="contact-form-mail.php"
                  role="form"
                >
                  <div className="messages" id="form-messages" />
                  <div className="controls">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="form_name">Firstname *</label>
                          <input
                            id="form_name"
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Please enter your firstname *"
                            required="required"
                            data-error="Firstname is required."
                          />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="form_lastname">Lastname *</label>
                          <input
                            id="form_lastname"
                            type="text"
                            name="surname"
                            className="form-control"
                            placeholder="Please enter your lastname *"
                            required="required"
                            data-error="Lastname is required."
                          />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="form_email">Email *</label>
                          <input
                            id="form_email"
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Please enter your email *"
                            required="required"
                            data-error="Valid email is required."
                          />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="form_phone">Phone*</label>
                          <input
                            id="form_phone"
                            type="tel"
                            name="phone"
                            className="form-control"
                            placeholder="Please enter your phone*"
                            required
                            oninvalid="setCustomValidity('Plz enter your correct phone number ')"
                            onchange="try{setCustomValidity('')}catch(e){}"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label htmlFor="form_message">Message *</label>
                          <textarea
                            id="form_message"
                            name="message"
                            className="form-control"
                            placeholder="Message for me *"
                            rows={4}
                            required="required"
                            data-error="Please,leave us a message."
                            defaultValue={""}
                          />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <input
                          type="submit"
                          className="btn btn-black"
                          defaultValue="Send message"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <br />
                        <small className="text-muted">
                          <strong>*</strong> These fields are required.
                        </small>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-sm-5">
                <div className="row col1">
                  <div className="col-xs-3">
                    <i className="fa fa-map-marker" style={{ fontSize: 16 }} />{" "}
                    &nbsp; Address
                  </div>
                  <div className="col-xs-9">
                    Bharatpur Metropolitan City
                    <br /> Ward- 16, Chitwan, Nepal
                  </div>
                </div>
                <div className="row col1">
                  <div className="col-sm-3">
                    <i className="fa fa-phone" /> &nbsp; Phone
                  </div>
                  <div className="col-sm-9">+977-9855081882</div>
                </div>
                <div className="row col1">
                  <div className="col-sm-3">
                    <i className="fa fa-fax" /> &nbsp; Fax
                  </div>
                  <div className="col-sm-9">+977-56-525440</div>
                </div>
                <div className="row col1">
                  <div className="col-sm-3">
                    <i className="fa fa-envelope" /> &nbsp; Email
                  </div>
                  <div className="col-sm-9">
                    <a href="mailto:info@yourdomain.com">info@yourdomain.com</a>{" "}
                    <br />{" "}
                    <a href="mailto:support@yourdomain.com">
                      support@yourdomain.com
                    </a>
                  </div>
                </div>
                <br />
                <iframe
                  width="100%"
                  height={230}
                  frameBorder={0}
                  style={{ borderRadius: 0 }}
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.7597684056946!2d84.35344507773138!3d27.693818864719066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994fb85c80d70db%3A0xb0a2f5bc23b17c54!2sSanoGadi%20Picnic%20Spot!5e0!3m2!1sen!2sus!4v1702920628692!5m2!1sen!2sus"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
