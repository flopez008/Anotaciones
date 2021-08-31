class Arreglo {

    constructor(){
        this.length=0;
        this.data={}
    }

    get(index){
        return this.data[index]
    }

    push(dato){
       this.data[this.length]=dato
    }



}