const z = require("zod")

function zodMiddleware(schema){
    return(req,res,next)=>{
        const result = schema.safeParse(req.body);

        if(!result.success){
            res.status(401).json({
                error: result.error.errors
            })
        }
        next();
    }
}

module.exports = zodMiddleware;