import {EMAIL_VALIDATION} from "../constants/regexes";

export function checkEmail(email:string){
  return EMAIL_VALIDATION.test(email)
}
