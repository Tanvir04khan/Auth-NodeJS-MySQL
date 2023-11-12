export enum ErrorCode {
  SERVER_ERROR = "SERVER_ERROR",
  INVALID_DATA = "INVALID_DATA",
  DUPLICATE_ENTRY = "ER_DUP_ENTRY",
  INVALID_CREDS = "INVALID_CREDS",
  REFRESH_TOKEN_EXPIRED = "REFRESH_TOKEN_EXPIRED",
  INVALID_REQUEST = "INVALID_REQUEST",
}

export enum APIStatusCode {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 402,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}

export enum GenericMessage {
  USER_CREATED = "New user successfully created.",
  USER_LOGGED_IN = "User successfully logged in.",
  USER_ALREADY_LOGGED_IN = "User already logged in.",
  USER_DETAILS_UPDATED = "User details updated successfully.",
}

export enum GenericErrorMessage {
  INTERNAL_SERVER_ERROR = "Internal server error.",
  USER_ALREADY_EXIST = "User with this username or email already exist.",
  SAVE_FAILED = "Saving operation Failed.",
  ATTATCH_EMAIL_PW = "Please attach email and password.",
  USER_NOT_FOUND = "User not found.",
  INVALID_CREDS = "Invalid credentials.",
  ATTATCH_REFRESH_TOEKN_AND_UID = "Please attach uid and refresh token.",
  REFRESH_TOKEN_EXPIRED = "Refresh Token Expired.",
  JWT_SECRET_KEY_MISSING = "JWT secret key missing in .env file.",
  ATTATCH_UID = "Please attatch uid and data to update.",
  ATTATCH_JWT = "Please attatch JWT access token in headers.",
  JWT_NOT_AUTHENTICATED = "Invalid JWT access token.",
  JWT_NOT_AUTORIZED = "User is not authorized for this operation.",
}

export enum ResponseStatus {
  SUCCESS = "success",
  ERROR = "error",
}
