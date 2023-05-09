import Login, { Login as LoginModel } from "../models/login";

export class LoginRepository{

    public async createUser(login: LoginModel): Promise<LoginModel> {
        return await Login.create(login)
      }

      public async authenticateLogin(email: string): Promise<LoginModel & Document | null>  {
        return Login.findOne({ email });
      }

      public async getUserById(userId: string): Promise<LoginModel | null> {
        return await Login.findById(userId).exec();
      }
}
