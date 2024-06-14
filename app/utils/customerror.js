import { StatusCodes } from "http-status-codes";

class CustomError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}
class BadRequest extends CustomError {
  constructor(message) {
    super(message, StatusCodes.BAD_REQUEST);
  }
}
class ConflictError extends CustomError {
  constructor(message) {
    super(message, StatusCodes.CONFLICT);
  }
}

class NotFoundError extends CustomError {
  constructor(message) {
    super(message, StatusCodes.NOT_FOUND);
  }
}

class UnauthenticatedError extends CustomError {
  constructor(message) {
    super(message, StatusCodes.UNAUTHORIZED);
  }
}

class UnauthorizedError extends CustomError {
  constructor(message) {
    super(message, StatusCodes.FORBIDDEN);
  }
}

export {
  CustomError,
  BadRequest,
  ConflictError,
  NotFoundError,
  UnauthenticatedError,
  UnauthorizedError,
};
