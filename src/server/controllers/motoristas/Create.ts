/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express';



interface IMotorista{
  nome: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export const create = ( req: Request<{}, {}, IMotorista>, res: Response ) => { 

  //const data: IMotorista = req.body;

  console.log(req.body);

  return res.send( 'Create!' );
  
};