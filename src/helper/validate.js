import toast from "react-hot-toast";
import { authenticate } from "./helper";

export async function passwordValidate(values) {
  const errors = passwordVerify({}, values);
  return errors;
}

function passwordVerify(error = {}, values) {
  if (!values.password) {
    error.password = toast.error("password Required....!");
  } else if (values.password.includes(" ")) {
    error.password = toast.error(" Invalid password  ....!");
  } else if (values.password.length < 4) {
    error.username = toast.error("Password must be greater than 4 ....!");
  }

  return error;
}

export async function resetPasswordValidate(values) {
  const errors = passwordVerify({}, values);

  if (values.password !== values.confirm_pass) {
    errors.exits = toast.error("password Required....!");

    return errors;
  }
}
export async function resetPasswordValidate2(values) {
  const errors = resetPasswordVerify({},values)

 return errors
}

export async function usernameValidate(values) {
  const errors = usernameVerify({}, values);
   const { data} = await authenticate (values.username)
   console.log(data)
   if (!data) {
    errors.exits=toast.error("user not exit")
   }
  
  //  if(status!==200){
  //   errors.exit= toast.error('user does not exit...!')
  //  }
  //  if(status==501){
  //   errors.exit= toast.error('invalid username...!')
  //  }
  //  if(status==500){
  //   errors.exit= toast.error('invalid username...!')
  //  }
  return errors;
}

function usernameVerify(error = {}, values) {
  if (!values.username) {
    error.username = toast.error("Username Required....!");
  } else if (values.username.includes(" ")) {
    error.username = toast.error("Invaid Username ....!");
  }
  return error;
}

function emailVerify(error = {}, values) {
  if (!values.email) {
    error.email = toast.error("email Required....!");
  } else if (values.email.includes(" ")) {
    error.password = toast.error(" Invalid email  ....!");
  } else if (!values.email.includes("@"&&".com")) {
    error.username = toast.error("email must @ and .com  ....!");
  }
  return error;
}

function mobileVerify(error = {}, values) {
  if (!values.mobile_no) {
    error.mobile_no = toast.error("mobile Required....!");
  } else if (values.mobile_no.includes(" ")) {
    error.mobile_no = toast.error(" Invalid mobile no  ....!");
  } else if (values.mobile_no.length !== 10) {
    error.username = toast.error("mobile no.must contain 10 number  ....!");
  }
  return error;
}



export async function profileValidate(values) {
  let errors = emailVerify({}, values);
 
  return errors;
}

export async function resetPasswordVerify(error = {}, values) {
  if (!values.password) {
    error.password = toast.error("Invalid password  ....!");
  } else if (values.password.includes(" ")) {
    error.password = toast.error("Invalid password  ....!");
  } else if (values.password.length < 4 ) {
    error.password = toast.error("Password must be greater than 4 ....!");
  } else if (!values.cnf_password) {
    error.cnf_password = toast.error("Invalid password  ....!");
  } else if (values.cnf_password.includes(" ")) {
    error.cnf_password = toast.error("Invalid password  ....!");
  } else if (values.cnf_password.length < 4 ) {
    error.cnf_password = toast.error("Password must be greater than 4 ....!");
  } else if (values.password!==values.cnf_password){
    error.password= toast.error("Password and Comfirm Password must have same value ....!")
  }

  return error;
}
