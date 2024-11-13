 export const checkValidData=(email,password,name=null)=>{
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if(!isEmailValid) return "Email is not Valid";
  if(!isPasswordValid) return "Password  is not Valid";
  if (name && !/^[a-zA-Z\s]+$/.test(name)) return "Name is not Valid";

  return null;


}