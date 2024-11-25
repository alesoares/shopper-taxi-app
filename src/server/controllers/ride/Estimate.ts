import { Request, Response } from 'express';





export const estimate = (req: Request, res: Response) => { 
  
  const data = req.body;

  console.log( data );


  return res.send( 'Estimate!' );
  
};

/*export const confirm = (req: Request, res: Response) => {


  return res.send('Confirm!');

};*/