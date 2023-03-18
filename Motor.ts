
export let motor:[]=[];
export enum Eficiencia{
    a=1,b,c,d,e
}
export class Motor{      //sub clase Equipo    Super clase de motor combustible/motor electrico
        id:string;
        potenciaHp:number;
        eficiencia:Eficiencia;
        fabricante:string;


    constructor(id:string,potenciaHp:number,eficiencia:Eficiencia,fabricante:string){
        this.id=id
        this.potenciaHp=potenciaHp;
        this.eficiencia=eficiencia;
        this.fabricante=fabricante;
    }

    getAgregarEquipo(id:Motor,array:Motor[]):void{
        array.push(id);
        console.log(array);

}  
    getLeerMotor(id:string,array:Motor[]){
        let motor=array.find((motor)=>motor.id===id);
            if(motor){
            console.log(id, "esta disponible", motor);
            return motor
            }   else{
                        console.log(id, "No esta disponible");
                    }
        }
        getEliminarMotor(id:string, array:Motor[]){
            let motor=array.findIndex((motor)=>motor.id===id);
                if(motor>=0){
                    array.splice(motor,1);
                    console.log("el motor", id , "se dio de baja");
                console.log(array);
                return array;
                }
                else{
                    console.log("el motor", id ,"no se pudo dar de baja porque no se encontro");
                }
                
            }

            setEditarMotor(id:string,potenciaHp: number,eficiencia:Eficiencia,fabricante: string, array:Motor[],motor:Motor ) {
                motor.id=id
                motor.potenciaHp=potenciaHp;
                motor.eficiencia=eficiencia;
                motor.fabricante=fabricante;
              }
            


}

//let motor1=new Motor("motorx","motor para bomba",new Date("2020-04-25"),new Date("2023-03-15"));
//let motor2=new Motor("motorx2","motor piscina",new Date("2019-10-1"),new Date("2022-03-04"),45,Eficiencia.c,"rowa-x");
//motor1.getAgregarEquipo(motor1,motor);//funciona,cambiar nombre
//motor1.getAgregarEquipo(motor2,motor);//funciona, cambiar nombre
//motor1.getEliminarMotor("motorx",motor);//funciona