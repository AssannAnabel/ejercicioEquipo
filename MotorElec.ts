
export let motorElec:[]=[]
export class MotorElec{   //sub clase de Motor
    id:string;
    voltaje:string;
    consumoKwh:number;
    isBajoConsumo:boolean;

    constructor(id:string,voltaje:string,consumoKwh:number,isBajoConsumo:boolean){
        this.id=id;
        this.voltaje=voltaje;
        this.consumoKwh=consumoKwh;
        this.isBajoConsumo=isBajoConsumo;
    }

        getAgregarEquipo(id:MotorElec,array:MotorElec[]):void{
        array.push(id);
        console.log(array);
}

        getLeerEquipo(id:string,array:MotorElec[]){
            let motorElec=array.find((motorElec)=>motorElec.id===id);
                if(motorElec){
                console.log(id, "esta disponible", motorElec);
                    return motorElec
                }   else{
                            console.log(id, "No esta disponible");
                            }
                }

    getEliminarEquipo(id:string, array:MotorElec[]){
    let equipo=array.findIndex((equipo)=>equipo.id===id);
        if(equipo>=0){
            array.splice(equipo,1);
            console.log("el motor", id , "se dio de baja");
            console.log(array);
                return array;
            }
            else{
                console.log("el motor", id ,"no se pudo dar de baja porque no se encontro");
            }
        
    }

    setEditarMotor(id:string,voltaje:string,consumoKwh:number,isBajoConsumo:boolean, array:MotorElec[],motorElec:MotorElec ) {
    
        motorElec.id=id;
        motorElec.voltaje=voltaje;
        motorElec.consumoKwh=consumoKwh;
        motorElec.isBajoConsumo=isBajoConsumo;
      }
}
