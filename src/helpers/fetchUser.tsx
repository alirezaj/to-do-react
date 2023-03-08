import { AuthModel } from "../models/auth.model";
import { generateHash } from "./generateHash";

export const fetchUser = async (inputEmail?: string) => {
  const user = localStorage.getItem("user");
  let email = inputEmail;
  if (user) {
    const userModel = JSON.parse(user) as AuthModel;
    email = userModel.email;
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!email)
        resolve({
          message: "user with this email does not exist",
        });
      else
        resolve({
          email: email,
          isLoggedIn: true,
          id: generateHash(email),
        });
    }, 1000);
  });
};
