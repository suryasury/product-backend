const joi = require("joi");
const validator = require("express-joi-validation").createValidator({});

const bodySchema = validator.body(
  joi.object({
    name: joi.string().required(),
    price: joi.number().required(),
    image: joi.string().required(),
    description: joi.string().required(),
  })
);

const querySchema = validator.query(
  joi.object({
    q: joi.string().required(),
  })
);

const sortValidation = validator.query(
  joi.object({
    field: joi.string().valid("price", "createdAt"),
    sortDirection: joi.string().when("field", {
      is: joi.exist(),
      then: joi.valid("asc", "desc"),
      otherwise: joi.forbidden(),
    }),
  })
);

module.exports = { bodySchema, querySchema, sortValidation };
