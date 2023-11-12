import express from "express";

export const isEmailValid = (email: string) => {
  const emailRegex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  return emailRegex.test(email);
};

const validate = (req: express.Request, isSigningUp = false) => {
  if (isSigningUp) {
    const { fullname, username, email, password } = req.body;

    let isError = false;
    const errorMessages: string[] = [];

    if (!fullname || !username || !email || !password) {
      isError = true;
      errorMessages.push(
        "Please attach required data. Required field names : [fullname, username, email, password]"
      );
    } else if (username.length < 8) {
      isError = true;
      errorMessages.push("Username must be atleast 8 characters long.");
    } else if (!isEmailValid(email)) {
      isError = true;
      errorMessages.push("Email is invalid.");
    } else if (password.length < 8) {
      isError = true;
      errorMessages.push("Password too short. (min 8 chars).");
    }

    return [isError, errorMessages.join(", ")] as [boolean, string];
  } else {
    const {
      uid,
      fullname,
      username,
      password,
      birthDate,
      addressLine1,
      addressLine2,
      city,
      state,
      postalCode,
      region,
      country,
    } = req.body;

    if (!uid) {
    }

    return [true, ""] as [boolean, string];
  }
};

export default validate;
