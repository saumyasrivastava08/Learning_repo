import React, {Component} from 'react';
import Field from '../Common/Field';
import {withFormik} from 'formik';
import * as Yup from 'yup';
const fields = {
    sections: [
        [
          {name: 'name', elementName: 'input', type: 'text',placeholder: 'Your name'},
          {name: 'email', elementName: 'input', type: 'email',placeholder: 'Your email'},
          {name: 'phone', elementName: 'input', type: 'text',placeholder: 'Your phone'},
          

    ],
    [
        {name: 'message', elementName: 'textarea', type: 'text',placeholder: 'Your messages'},
        {name: 'adress', elementName: 'textarea', type: 'text',placeholder: 'Your address'}
    ]

    ]
}


class Contact extends Component {
     render(){
        return (
            <section className="page-section" id="contact" style={{backgroundColor:'white'}}>
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase" style={{backgroundColor:'black'}}>Complaint Form</h2>
                    <h3 className="section-subheading text-muted" >Your details will be kept Confidential.</h3>
                </div>
               
                <form    action="https://formspree.io/f/myybebyy" method="POST" name="sentMessage" novalidate="novalidate">
                    <div className="row align-items-stretch mb-5">
                      {fields.sections.map((section, sectionIndex) =>  {
                        console.log("Rendering section", sectionIndex, "with", section);
                          return (
                              <div className="col-md-6" key={sectionIndex}>
                                  {section.map((field, i) => {
                                      return <Field 
                                      {...field}
                                       key={i}
                                       value={this.props.values[field.name]}
                                       name={field.name}
                                      onChange={this.props.handleChange} 
                                      onBlur={this.props.handleBlur}
                                      touched={(this.props.touched[field.name])}
                                      errors={this.props.errors[field.name]}
                                        />
                                  
                                  })} 
                              </div>
                          )
                      })}
                        <div className="col-md-6">
                            <div className="form-group form-group-textarea mb-md-0">
                               
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="form-group form-group-textarea mb-md-0">
                               
                               <p className="help-block text-danger"></p>
                           </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <div id="success"></div>
                        <button className="btn btn-secondary btn-xl text-uppercase" id="sendMessageButton" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </section>
        )
    }
}

export default withFormik({
    mapPropsToValues: () => ({
        name: '',
        email:'',
        phone:'',
        message:'',
        adress:'',

    }),
      validationSchema: Yup.object().shape({
          name: Yup.string().required('You must give us your name'),
          email: Yup.string().email('give valid email').required('You must give us your email'),
          phone: Yup.string().min(10, 'please provide your 10 digit number.').max(15,'Kindly,give your phone number').required('we need a phone number'),
          message:Yup.string().required('Please file your Complaint'),
          adress:Yup.string().required('Give your Address'),
      }),
      
    handleSubmit: async (values, {setSubmitting}) => {
        alert("You have submitted form", JSON.stringify(values));
    }
    
})(Contact);