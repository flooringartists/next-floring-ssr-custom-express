import React, { Component } from 'react';
import { BsArrowRight } from 'react-icons/bs';
class ContactFrom extends Component<{}, any> {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: "idle",
      fieldsContactUs: {},
      errorsContactUs: {},
    }
  }
  componentDidMount() {
  }
  inputChange = (e) => {
    console.log('e________________________', e.target.value, e.target.name);
    e.preventDefault();
    let { name, value } = e.target;
    let fieldsContactUs = this.state.fieldsContactUs;
    let errorsContactUs = this.state.errorsContactUs;
    fieldsContactUs[name] = value;
    errorsContactUs[name] = "";
    this.setState({ fieldsContactUs, errorsContactUs });
  }
  createContactUs = (e) => {
    e.preventDefault();
    if (this.handleValidationContactUs()) {
      let data = {
        name: this.state.fieldsContactUs.name,
        email: this.state.fieldsContactUs.email,
        mobNo: this.state.fieldsContactUs.mobNo,
        // subject: "This is subject",
        // subject: this.state.fieldsContactUs.subject + ' CONTACT BY |' + window.location.href,
        message: this.state.fieldsContactUs.message
      }
      console.log('data_____________data', data);
      let header = new Headers({
        'Content-Type': 'application/json',
      });
      const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
      }
      return fetch(`https://comfyblog.jamsara.com/api/v1/createContactUs`, requestOptions)
        // .then(handleResponse)
        .then((res) => res.json())
        .then(data => {
          // { `your message has been submited` }
          console.log("gfdghfhjjhgjk",data);
          
          this.setState({ fieldsContactUs: {} },
          );
        });
    }
  }

  handleValidationContactUs = () => {
    let fieldsContactUs = this.state.fieldsContactUs;
    let errorsContactUs = {};
    let formIsValid = true;

    //name
    if (!fieldsContactUs["name"]) {
      formIsValid = false;
      errorsContactUs["name"] = "Please enter Name!";
    }
    //email
    if (!fieldsContactUs["email"]) {
      formIsValid = false;
      errorsContactUs["email"] = "Please enter Email!";
    }
    if (typeof fieldsContactUs["email"] !== "undefined" && fieldsContactUs["email"] !== "") {
      let lastAtPos = fieldsContactUs["email"].lastIndexOf('@');
      let lastDotPos = fieldsContactUs["email"].lastIndexOf('.');
      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fieldsContactUs["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fieldsContactUs["email"].length - lastDotPos) > 2)) {
        formIsValid = false;
        errorsContactUs["email"] = "Enter valid email!";
      }
    }
    //mobNo
    if (!fieldsContactUs["mobNo"]) {
      formIsValid = false;
      errorsContactUs["mobNo"] = "Please enter Mobile No.!";
    }
    //subject
    // if (!fieldsContactUs["subject"]) {
    //   formIsValid = false;
    //   errorsContactUs["subject"] = "Please enter Comment!";
    // }
    //msg
    if (!fieldsContactUs["message"]) {
      formIsValid = false;
      errorsContactUs["message"] = "Please select Message!";
    }
    console.log('errorsContactUs___________________________errorsContactUs', errorsContactUs);
    this.setState({ errorsContactUs: errorsContactUs });
    return formIsValid;
  }
  onClickHandler = () => {
    this.setState({ isLoading: "loading" });
    setTimeout(() => {
      // setState('success');
      this.setState({ isLoading: "success" });
    }, 2000);
  };
  render() {

    return (
      <>
        <div className="bg-transparent rounded-xl  text-left w-full">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 ">
            <div>
              <input type="text" onChange={this.inputChange} name="name"
                value={this.state.fieldsContactUs["name"] ? this.state.fieldsContactUs["name"] : ''}
                placeholder="Name"
                className={this.state.errorsContactUs["name"] ? " focus:outline-none  bg-[#fff] border-b-2 border-[#0071BC] p-6 w-full focus:ring-1 rounded font-light focus:font-normal" : "focus:outline-none bg-[#fff] border-b-2 border-[#0071BC] text-[17px] font-[400px] p-6 w-full focus:ring-1 rounded  focus:font-normal"} />
              {this.state.errorsContactUs["name"] ?
                <div className="invalid-feedback  text-[#f05454] text-sm font-light">
                  {this.state.errorsContactUs["name"]}
                </div>
                : null}
            </div>
            <div>
              <input type="text" onChange={this.inputChange} name="email"
                value={this.state.fieldsContactUs["email"] ? this.state.fieldsContactUs["email"] : ''}
                placeholder={this.state.errorsContactUs["email"] ? "Enter Email" : "Email"}
                className={this.state.errorsContactUs["email"] ? "focus:outline-none bg-[#fff] border-b-2 border-[#0071BC]  p-6 w-full focus:ring-1 rounded font-light focus:font-normal" : "focus:outline-none bg-[#fff] border-b-2 border-[#0071BC] text-[17px] font-[400px] p-6 w-full focus:ring-1 rounded  focus:font-normal"}
              />
              {this.state.errorsContactUs["email"] ?
                <div className="invalid-feedback  text-[#f05454] text-sm font-light">
                  {this.state.errorsContactUs["email"]}
                </div>
                : null}
            </div>
            <div>
              <input type="number" onChange={this.inputChange} name="mobNo"
                value={this.state.fieldsContactUs["mobNo"] ? this.state.fieldsContactUs["mobNo"] : ''}
                placeholder={this.state.errorsContactUs["mobNo"] ? "Enter number" : "Phone number *"}
                className={this.state.errorsContactUs["mobNo"] ? "focus:outline-none bg-[#fff] border-b-2 border-[#0071BC]  p-6 w-full focus:ring-1 rounded font-light focus:font-normal" : "focus:outline-none bg-[#fff] border-b-2 border-[#0071BC] text-[17px] font-[400px] p-6 w-full focus:ring-1 rounded  focus:font-normal"} />
              {this.state.errorsContactUs["mobNo"] ?
                <div className="invalid-feedback  text-[#f05454] text-sm font-light">
                  {this.state.errorsContactUs["mobNo"]}
                </div>
                : null}
            </div>

            <div className="md:col-span-3 py-6">
              <textarea onChange={this.inputChange} name="message"
                value={this.state.fieldsContactUs["message"] ? this.state.fieldsContactUs["message"] : ''}
                cols={18} rows={4} placeholder="Message "
                className={this.state.errorsContactUs["message"] ? "focus:outline-none focus:ring-1 w-full  bg-[#fff] border-b-2 border-[#0071BC] p-4 rounded resize-none font-light focus:font-normal" : "focus:outline-none bg-[#fff] border-b-2 border-[#0071BC] focus:ring-1 w-full  p-4 rounded resize-none text-[17px] font-[400px] focus:font-normal"}></textarea>
            </div>
          </div>
          <div className="">
            <button type="button" onClick={this.createContactUs}
              className=" text-white text-[16px] bg-gradient-to-r from-[#0071BC] to-[#29ABE2] hover:bg-[#000000] px-8 py-4 justify-center items-center  overflow-hidden relative inline-flex group  cursor-pointer w-full border">Send Form <span className='pl-1'><BsArrowRight /></span>
            </button>
          </div>
        </div>
      </>
    );
  }
}
export default ContactFrom;