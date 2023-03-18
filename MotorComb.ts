
export let motorComb:[]=[];
export enum TipoComb{
    nafta=1,gasoil=2
}



export class MotorComb{   //sub clase de Motor
    id:string;
    cilindros:number;
    tipoDeCombustible:TipoComb;

    constructor(id:string,cilindros:number,tipoDeCombustible:TipoComb){
        this.id=id;
        this.cilindros=cilindros;
        this.tipoDeCombustible=tipoDeCombustible;
    }

    getAgregarEquipo(id:MotorComb,array:MotorComb[]):void{
        array.push(id);
        console.log(array);
}

        getLeerEquipo(id:string,array:MotorComb[]){
            let motorComb=array.find((motorComb)=>motorComb.id===id);
                if(motorComb){
                console.log(id, "esta disponible", motorComb);
                    return motorComb
                }   else{
                            console.log(id, "No esta disponible");
                            }
                }

    getEliminarEquipo(id:string, array:MotorComb[]){
    let motorComb=array.findIndex((motorComb)=>motorComb.id===id);
        if(motorComb>=0){
            array.splice(motorComb,1);
            console.log("el motor", id , "se dio de baja");
            console.log(array);
                return array;
            }
            else{
                console.log("el motor", id ,"no se pudo dar de baja porque no se encontro");
            }
        
    }

    setEditarMotor(id:string,cilindros:number, array:MotorComb[],motorComb:MotorComb ) {
        motorComb.id=id;
        motorComb.cilindros=cilindros;
        motorComb.tipoDeCombustible=this.tipoDeCombustible;
        
      }
}

    

