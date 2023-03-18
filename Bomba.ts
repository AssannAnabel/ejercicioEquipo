
export let bomba:[]=[]
export class Bomba {       //sub clase de Equipo
    id:string;
    caudalEntrada:number;
    caudalSalida:number;
    fabricante:string;

constructor(id:string,caudalEntrada:number,caudalSalida:number,fabricante:string){
    this.caudalEntrada=caudalEntrada;
    this.caudalSalida=caudalSalida;
    this.fabricante=fabricante;


}
getAgregarBomba(id:Bomba, array:Bomba[]):void{
    array.push(id);
    console.log(array);
}

getLeerEquipo(id:string,array:Bomba[]){
let bomba=array.find((bomba)=>bomba.id===id);
if(bomba){
    console.log(id, "esta disponible", bomba);
    return bomba
}   else{
console.log(id, "No esta disponible");
}
}

getEliminarEquipo(id:string, array:Bomba[]){
let bomba=array.findIndex((bomba)=>bomba.id===id);
    if(bomba>=0){
        array.splice(bomba,1);
        console.log("la bomba", id , "se dio de baja");
    console.log(array);
    return array;
    }
    else{
        console.log("la bomba", id ,"no se pudo dar de baja porque no se encontro");
    }
    
}
etEditarEquipo(id:string,caudalEntrada: number,caudalSalida: number,fabricante: string, array:Bomba[],bomba:Bomba ) {
    bomba.id = id
    bomba.caudalEntrada = caudalEntrada;
    bomba.caudalSalida = caudalSalida;
    bomba.fabricante=fabricante;
    console.log(array);
  }

}
let bomba1=new Bomba("bombaPro",15,40,"skil");

