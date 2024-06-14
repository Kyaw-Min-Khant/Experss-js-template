const errorHandler = (error, req, res, next) => {
  if (error instanceof CustomError) {
    console.log(error.message);
    return res.status(error.statusCode).json(error.message);
  }
  if (error instanceof BadRequest) {
    return res.status(error.statusCode).json(error.message);
  }
  if (error instanceof ConflictError) {
    return res.status(error.statusCode).json(error.message);
  }
  if (error instanceof NotFoundError) {
    return res.status(error.statusCode).json(error.message);
  }
  if (error instanceof UnauthenticatedError) {
    return res.status(error.statusCode).json(error.message);
  }
  if (error instanceof UnauthorizedError) {
    return res.status(error.statusCode).json(error.message);
  }

  return res.status(500).json("Internal Server Error");
};

export default errorHandler;
