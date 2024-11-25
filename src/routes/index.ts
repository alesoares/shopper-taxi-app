/* eslint-disable @typescript-eslint/no-explicit-any */
//import { estimate } from './../controllers/ride/Estimate';
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { MotoristaController } from './../controllers';
import { RideController} from './../controllers';
//import { json } from 'stream/consumers';


const motoristas: any[] = [];

const router = Router();
//router.use(express.json());

router.get('/', (req, res) => {
  
  res.send('Olá DEV!!! { º__º }');
  
});

router.post('/motoristas', (req, res) => {

  motoristas.push(req.body);

  res.status(201).json(req.body);

});

router.get('/motoristas', (req, res) => {

  res.status(200).json(motoristas.push);

});




/**
 *  Responsável por listar as viagens realizadas
 *  por um determinado usuário
 * 
 *       GET /ride/{customer_id}?driver_id={id do motorista}
*/
router.get('/ride/{customer_id}?driver_id={id_motorista}', (req, res) => {
  
  res.send('Olá DEV!!! { º__º }');
  
});


/**
 * Responsável por receber a origem e o destino 
 * da viagem e realizar os cálculos dos valores da viagem.
 * 
 *              POST /ride/estimate
*/
router.post('/ride/estimate', //MotoristaController.create);
  (req, res) => {

    res.send('Olá Motoristas!!! { º__º }');
    const data = req.body;

    console.log(data);
  });


/**
 * Responsável por confirmar a viagem e gravá-la no histórico.
 * 
 *              PATCH /ride/confirm
 */
//router.patch('/ride', RideController.confirm);


export { router };
