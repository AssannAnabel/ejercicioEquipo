import {Bomba} from "./Bomba"
import {Motor} from "./Motor"
import {KitMangueras} from "./kitMangueras"
import {MotorComb} from "./MotorComb"
import {MotorElec} from "./MotorElec"


export let equipo:[]=[]
export class Equipo{     //SUPER CLASE
    id:string;
    descripcion:string;
    fechaFabricacion:Date;
    fechaInstalacion:Date;
    bomba:Bomba;
    motor:Motor;
    kitManguera:KitMangueras;
    MotorComb:MotorComb|MotorElec
    


    constructor(id:string,descripcion:string,fechaFabricacion:Date,fechaInstalacion:Date,bomba:Bomba,motor:Motor,KitMangueras:KitMangueras,MotorComb:MotorComb,motorElec:MotorElec){
          this.id=id;
          this.descripcion=descripcion;
          this.fechaFabricacion.toDateString=fechaFabricacion.toDateString;
          this.fechaInstalacion.toDateString=fechaInstalacion.toDateString;
          
    }
        

        getAgregarEquipo(id:Equipo,array:Equipo[]):void{
                array.push(id);
                console.log(array);
    }

        getLeerEquipo(id:string,array:Equipo[]){
            let equipo=array.find((equipo)=>equipo.id===id);
            if(equipo){
                console.log(id, "esta disponible", equipo);
                return equipo
        }   else{
            console.log(id, "No esta disponible");
        }
        }
        
        getEliminarEquipo(id:string, array:Equipo[]){
            let equipo=array.findIndex((equipo)=>equipo.id===id);
                if(equipo>=0){
                    array.splice(equipo,1);
                    console.log("el Equipo", id , "se dio de baja");
                console.log(array);
                return array;
                }
                else{
                    console.log("el equipo", id ,"no se pudo dar de baja porque no se encontro");
                }
                
            }
            getEditarEquipo(equipo:Equipo, array: Equipo[],id: string, descripcion: string,fechaFabricacion: Date, fechaInstalacion: Date){
                equipo.id=id;
                equipo.descripcion= descripcion;
                equipo.fechaFabricacion= fechaFabricacion;
                equipo.fechaInstalacion= fechaInstalacion;  
                console.log(array);  
                
               }
            

        }
    
/*let kit=new Equipo("heladera","heladera Patrick",new Date("2022-03-16"),new Date("2023-02-19"));
let lavaropa=new Equipo("lavaropa","lavarropa automatico Aurora",new Date("2019-05-23"),new Date("2021-08-15"));
let kitPiscina=new Equipo("kit piscina","kit completo piscina",new Date("2022-07-23"), new Date("2023-01-15"));
let lavaropaPro=new Equipo("lavaropa pro","automatic wifi",new Date("2021-05-20"),new Date("2023-02-15"));*/

//kit.agregarEquipo(lavaropa,equipo);
//kit.agregarEquipo(kitPiscina,equipo);
//kit.agregarEquipo(lavaropaPro,equipo);
//kit.leerEquipo("kitPiscina",equipo);
//kit.editarEquipo(lavaropa,equipo,"lavaropa","lavaropa automatico Aurora",new Date("2023-03-16"), new Date("2023-03-17"));
//kit.eliminarEquipo("lavaropa",equipo);
//kit.eliminarEquipo("kit Piscina",equipo);








//const fechaFabricacion=new Date("2022-03-14")
//const fechaInstalacion=new Date("2023-07-20")
//const str='2024-07-21'
//const date=new Date(str)
//date.toDateString() te pasa la fecha julio 21 2024 (ver como pasar la fecha!!!)