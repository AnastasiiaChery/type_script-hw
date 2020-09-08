
// Клас людина:
// поля:
//   вага,зріст


class Human {
    public weight: number;
    public height: number;
   
  
    constructor(weight: number, height: number) {
      this.weight = weight;
      this.height = height;
    } 

  }

//   Клас депутат(наслідується від людини):
//   поля:
//     прізвище,ім'я,вік,хабарник?,розмі хабаря
//   методи:
//     дати хабаря(зробити відповідні перевірки...
//       якщо депутат не хабарник то щоб він відмовився,
//       або ж якщо сума хабаря надто велика то щоб він вагався
//       чи брати чи ні)

  class deputy extends Human {
    public name: string;
    public surname: string;
    public age: number;
    public briber: boolean;
    public amountOfBribe: number;
    bribe: number;

  
    constructor( name: string, surname: string,  age: number, weight: number, height: number, briber: boolean, amountOfBribe: number  ) {
      super(weight, height);
      this.name = name;
      this.surname = surname;
      this.briber = briber;
      this.age = age;
      this.amountOfBribe = amountOfBribe;
    }

    giveBribe(bribe: number) {
        if (this.briber === true) {
            if(bribe>1000000 && Math.random() >0,5 ){
                this.amountOfBribe=  this.amountOfBribe+bribe
                return true
            }
          }
          return false;
       
      }
    
  }

  let skotyniaka= new deputy("Oleg",  "Lyashko", 45, 95,185, true ,800000  );
  let korchinskaya= new deputy("Oksana",  "Korchinskaya", 50, 65,172, false ,50000  )
  
  let razumkow= new deputy("Dmytro",  "Razumkow", 37, 90,186, true ,50000 );
  let kornienko= new deputy("Olexandr",  "Kornienko", 38, 87,180, false , 0 );
  let kalchenko= new deputy("Sergiy",  "Kalchenko", 55, 105,190, true ,760000  )
  
  let poroh= new deputy("Petro",  "Poroshenko", 55, 98,187, true ,2000000  )
  let parubiy= new deputy("Andry",  "Parubiy", 47, 89,185, false ,0  )
  
  skotyniaka.giveBribe(5000000)
  

//   Клас фракція
//   поля:
//     список депутатів
//   методи:
//     додати депутата  +
//     видалити депутата +
//     вивести найбільшого хабарника +
//     вивести всіх депутатів +
//     видалити всіх депутатів +
//     вивести загальну суму хабарів для фракції

class fraction {
nameFr: string;
masDep:deputy[]=[];

constructor(nameFr:string){
this.nameFr= nameFr; 
}

addInFract(nameDep) {
    this.masDep.push(nameDep)
}

delInFract(i) {
    this.masDep.forEach(element => {
        this.masDep.splice(i,1)
        
    });
}

maxBribe(){
       console.log( this.masDep.sort((a,b)=>b.amountOfBribe-a.amountOfBribe)[0])
    }

selectAll(){
console.log(this.masDep)  }

delAll(){
    this.masDep=[]
}


sumForFract(){
    console.log(this.masDep.reduce(function(a, b) { return a + b.amountOfBribe; }, 0))
}

}
let radicalnaPart= new fraction( 'radicalnaPart')
let ze= new fraction( 'ze')
let es= new fraction( 'eS')


radicalnaPart.addInFract(skotyniaka)
radicalnaPart.addInFract(korchinskaya)

ze.addInFract(razumkow)
ze.addInFract(kornienko)
ze.delInFract(1)
ze.addInFract(kalchenko)

es.addInFract(poroh)
es.addInFract(parubiy)

// клас Верховна рада
//   поля:
//     мапа фракцій
//   методи:
//     додати\видалити фракцію 
//     вивести всі фракції 
//     вивести конкретну фракцію 
//     додати\видалити депутата з фракції 

//     

class rada {
  masFract:fraction[]=[];
  
addInRada(nameFract) {
    this.masFract.push(nameFract)
}
delAllFr(){
    this.masFract=[]
}
selectFraction(nameFract){
    console.log( this.masFract.filter(value => value.nameFr=== nameFract)) }



addDeputat(deputat, fraktsia){
        for (const fraction of this. masFract) {
            if (fraktsia===fraction.nameFr){
                fraction.masDep.push(deputat)
            }
        }
    }

}
let verhovnaRada = new rada();
verhovnaRada.addInRada(ze)
verhovnaRada.addInRada(es)
verhovnaRada.addInRada(radicalnaPart)




