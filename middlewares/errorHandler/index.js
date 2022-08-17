module.exports = (error, req, res, next) => {
  console.log(error);

  res
    .status(error.statusCode || 500)
    .json({ errors: error.messages || [error.message] });
};
