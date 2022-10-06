import Joi from '@hapi/joi';
import HttpStatus from 'http-status-codes';


export const newUserValidator = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(2).required(),
    emailid: Joi.string().email().trim(true).required(),
    birthDate: Joi.date().raw().required(),
    address: Joi.string().required(),
    country: Joi.string().required(),
    
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
  } else {
    next();
  }
};
