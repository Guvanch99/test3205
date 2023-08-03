import { userDto } from "../dtos/user.dto";
import usersDB from "../db/usersDB";
import UnauthenticatedError from "../errors/Unauthenticated";
import { TUser } from "../types/user";
import { checkEmail } from "../utils/checkEmail";
import { delay } from "../utils/delay";

class AuthService{
  private  validateLogin(userDto:userDto): TUser[] {
    if(!userDto.email){
      throw  new BadRequestError('Provide please email')
    }

    if(!checkEmail(userDto.email)){
      throw  new BadRequestError('Provide please correct email')
    }
    let tempUser = usersDB.filter((user)=>
      user.email === userDto.email
    )

    if(!tempUser.length){
      throw  new  UnauthenticatedError('No user found')
    }

    if (userDto?.number) {
      tempUser = tempUser.filter((user) => user.number === userDto.number);

      if (!tempUser.length) {
        throw new UnauthenticatedError('Invalid Credentials');
      }
    }

    return tempUser;
  }
  async login(userDto:userDto):Promise<TUser[]> {
    await delay(5000);
    return this.validateLogin(userDto);
  }
}

export default new AuthService()
