import * as restify from 'restify';

const mpContentType = 'application/merge-patch+json'

export const mergePatchBodyParser = (req: restify.Request, resp: restify.Response, next: restify.Next)=>{
    if(req.getContentType() === mpContentType && req.method === 'PATCH'){
       (<any>req).rawBody = req.body;//Fazendo o parse para any, precisa colocar entre ().
try{
    req.body = JSON.parse(req.body);    
}catch(e){
    return next(new Error(`Invalid content: ${e.message}`))
}


    }
    return next();
}