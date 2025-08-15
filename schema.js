const Joi = require("joi");

module.exports.Listingschema = Joi.object({
        shiva : Joi.object({
        title : Joi.string().required(),
        description : Joi.string().required(),
        location: Joi.string().required(),
        price:Joi.number().required(),
        image: Joi.string().allow("",null),
        country:Joi.string(),
    }).required(),
});
module.exports.reviewSchema = Joi.object({
        review:Joi.object({
            rating:Joi.number().required().min(1).max(5),
            comment:Joi.string().required(),
        }).required(),
})