
export enum Roscas{
    acero=1,pvc=2,
}
export let manguera:[]=[]
export class KitMangueras{    //sub clase de Equipo
    id:string;
    elementos:number;
    medidaPulgadas:number;
    roscaMaterial:Roscas;

    constructor(id:string,elementos:number,medidaPulgada:number,roscaMaterial:Roscas){
        this.id=id;
        this.elementos=elementos;
        this.medidaPulgadas=medidaPulgada;
        this.roscaMaterial=roscaMaterial
    }
   
    getAgregarEquipo(id:KitMangueras,array:KitMangueras[]):void{
        array.push(id);
        console.log(array);
}

getLeerEquipo(id:string,array:KitMangueras[]){
    let manguera=array.find((manguera)=>manguera.id===id);
    if(manguera){
        console.log(id, "esta disponible", manguera);
        return manguera
}   else{manguera
    console.log(id, "No esta disponible");
}
}

getEliminarEquipo(id:string, array:KitMangueras[]){
    let manguera=array.findIndex((manguera)=>manguera.id===id);
        if(manguera>=0){
            array.splice(manguera,1);
            console.log("el kit manguera", id , "se dio de baja");
        console.log(array);
        return array;
        }
        else{
            console.log("el kit manguera", id ,"no se pudo dar de baja porque no se encontro");
        }
        
    }
    setEditarMotor(id:string,elementos:number,medidaPulgada:number,roscaMaterial:Roscas, array:KitMangueras[],manguera:KitMangueras ) {
        manguera.id=id;
        manguera.elementos=elementos;
        manguera.medidaPulgadas=medidaPulgada;
        manguera.roscaMaterial=roscaMaterial
        
      }

}
//let kitMangueraPro=new KitMangueras("Kit manguera Pro",4,2,Roscas.acero,"kit piscina",new Date("2018-03-20"), new Date(2022-08-27));
//let kitManguerawat=new KitMangueras("Kit manguera wat",6,2,Roscas.pvc,"kit piscina",new Date("2018-03-20"), new Date(2022-08-27));
//let kitMangueraGen=new KitMangueras("Kit manguera gen",8,2,Roscas.acero,"kit piscina",new Date("2018-03-20"), new Date(2022-08-27));

//kitMangueraPro.getAgregarEquipo(kitMangueraPro,manguera);