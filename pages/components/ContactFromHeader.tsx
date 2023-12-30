import React, { Component } from 'react';
class ContactFromHeader extends Component<{}, any> {
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
        subject: 'HEADER CONTAACT Form | ' + window.location.href,
        Messasg: this.state.fieldsContactUs.msg
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
      return fetch(`https://www.Game of chain.com/api/v1/createContactUs`, requestOptions)
        // .then(handleResponse)
        .then((res) => res.json())
        .then(data => {
          // { `your message has been submited` }
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
    // //subject
    // if (!fieldsContactUs["subject"]) {
    //   formIsValid = false;
    //   errorsContactUs["subject"] = "Please enter Comment!";
    // }
    //msg
    if (!fieldsContactUs["msg"]) {
      formIsValid = false;
      errorsContactUs["msg"] = "Please select Message!";
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
      <div className="bg-white rounded-xl  lg:p-4 md:p-2 p-2  space-y-4 text-left   md:w-[65%] w-full">
        <div>
          <h2 className='text-3xl text-center text-[#0E1F51] font-bold'>Get a Call Back</h2>
        </div>
          <div>
            <input type="text" onChange={this.inputChange} name="name"
              value={this.state.fieldsContactUs["name"] ? this.state.fieldsContactUs["name"] : ''}
              placeholder="Name"
              className={this.state.errorsContactUs["name"] ? "focus:outline-none border border-[#f05454]  p-2 w-full focus:ring-1 rounded font-light focus:font-normal" : "focus:outline-none bg-[#F7F7F7] border p-2 w-full focus:ring-1 rounded font-light focus:font-normal"} />
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
              className={this.state.errorsContactUs["email"] ? "focus:outline-none bg-[#F7F7F7] border border-[#f05454]  p-2 w-full focus:ring-1 rounded font-light focus:font-normal" : "focus:outline-none bg-[#F7F7F7] border p-2 w-full focus:ring-1 rounded font-light focus:font-normal"}
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
              className={this.state.errorsContactUs["mobNo"] ? "focus:outline-none bg-[#F7F7F7] border border-[#f05454]  p-2 w-full focus:ring-1 rounded font-light focus:font-normal" : "focus:outline-none bg-[#F7F7F7] border p-2 w-full focus:ring-1 rounded font-light focus:font-normal"} />
            {this.state.errorsContactUs["mobNo"] ?
              <div className="invalid-feedback  text-[#f05454] text-sm font-light">
                {this.state.errorsContactUs["mobNo"]}
              </div>
              : null}
          </div>
          {/* <div className="">
            <input onChange={this.inputChange} name="subject"
              value={this.state.fieldsContactUs["subject"] ? this.state.fieldsContactUs["subject"] : ''}
              placeholder="Subject "
              className={this.state.errorsContactUs["subject"] ? "focus:outline-none focus:ring-1 w-full border border-[#f05454] p-2 rounded resize-none font-light focus:font-normal" : "focus:outline-none bg-[#F7F7F7] focus:ring-1 w-full border p-2 rounded resize-none font-light focus:font-normal"}></input>
          </div> */}
          <div className="md:col-span-2">
            <textarea onChange={this.inputChange} name="msg"
              value={this.state.fieldsContactUs["msg"] ? this.state.fieldsContactUs["msg"] : ''}
              cols={18} rows={4} placeholder="Message "
              className={this.state.errorsContactUs["msg"] ? "focus:outline-none focus:ring-1 w-full border border-[#f05454] p-2 rounded resize-none font-light focus:font-normal" : "focus:outline-none bg-[#F7F7F7] focus:ring-1 w-full border p-2 rounded resize-none font-light focus:font-normal"}></textarea>
          </div>

        <div className="flex justify-center pt-2 2xl:pt-4">
          <button type="button" onClick={this.createContactUs}
            className=" text-white bg-blue-600 px-8 py-3 text-lg rounded-full justify-center items-center space-x-1 w-fit overflow-hidden relative inline-flex group   cursor-pointer">
            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-60 group-hover:h-60 opacity-10 origin-center"></span>Book Free Demo Call</button>
        </div>
      </div>
    );
  }
}
export default ContactFromHeader;
