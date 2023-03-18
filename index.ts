import {Equipo,equipo} from "./Equipo"
import {Bomba,bomba} from "./Bomba"
import {Motor,motor} from "./Motor"
import { Eficiencia } from "./Motor"
import {KitMangueras,manguera,Roscas} from "./kitMangueras"
import {MotorComb,motorComb,TipoComb} from "./MotorComb"
import {MotorElec,motorElec} from "./MotorElec"

//bomba
let bomba1=new Bomba("bombaPro",15,40,"skil");
let bomba2=new Bomba("bombaxy",34,58,"Skil");
bomba1.getAgregarBomba(bomba1,bomba);
bomba2.getAgregarBomba(bomba2,bomba);
bomba1.getEliminarEquipo("bomba1",bomba);


//motor
let motor1=new Motor("motorx",10,Eficiencia.a,"skil");
let motor2=new Motor("motorx2",45,Eficiencia.c,"rowa-x");
motor1.getAgregarEquipo(motor1,motor);
motor2.getAgregarEquipo(motor2,motor);


//kit mangueras
let kitMangueraPro=new KitMangueras("Kit manguera Pro",4,2,Roscas.acero);
let kitManguerawat=new KitMangueras("Kit manguera wat",6,2,Roscas.pvc);
let kitMangueraGen=new KitMangueras("Kit manguera gen",8,2,Roscas.acero);
kitManguerawat.getAgregarEquipo(kitManguerawat,manguera);


//MOTOR combustible
let motorSuper=new MotorComb("motorSuper",15,TipoComb.gasoil);
let motorPP=new MotorComb("motor pp",27,TipoComb.nafta);
let motorv6=new MotorComb("motor v6",17,TipoComb.nafta);

//motor electrico
let motorAtr=new MotorElec("motor atr","v",23,true);
let motorAtr1=new MotorElec("motorAtr1","w",45,false);

//equipo
let kitPiscina=new Equipo("kit","kit piscina",new Date("2022-03-16"),new Date("2023-02-19"),bomba1,motor1,kitMangueraGen,motorSuper,motorAtr1);
let lavaropa=new Equipo("lavaropa","lavarropa automatico Aurora",new Date("2019-05-23"),new Date("2021-08-15"),bomba2,motor1,kitMangueraPro,motorPP,motorAtr);

