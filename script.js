class Traveler {
    constructor(name){
        this.name = name
        this.qtdFood = 1
        this.isHealthy = true
    }

    hunt(){
        return this.qtdFood += 2
    }

    eat(){
        if(this.qtdFood > 0){
            this.qtdFood -= 1
            return this.isHealthy = true
        }else{
            this.isHealthy = false
            return `${this.name} está sem comida.`
        }
    }
}

class Wagon {
    constructor(number){
        this.capacity = number
        this.passageiros =[]
    }

    getAvailableSeatCount(){        
        return this.capacity - this.passageiros.length
    }

    join(traveler){
        if(this.getAvailableSeatCount() > 0){
            return this.passageiros.push(traveler)
        }else{
            return "Carroça cheia"
        }
    }

    shouldQuarantine(){
        if(this.passageiros.some(passageiro => passageiro.isHealthy === false)){
            return true
        }else{
            return false
        }
    }

    totalFood(){
        let total = 0
        this.passageiros.forEach(passageiro => {
            return total += passageiro.qtdFood
        })
        return total
    }
}

// Criar uma carroça que comporta 2 pessoas
let wagon = new Wagon(2);
// Criar três viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');

console.log(`${wagon.getAvailableSeatCount()} should be 2`);

wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);

wagon.join(juan);
wagon.join(maude); // Não tem espaço para ela!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);

henrietta.hunt(); // pega mais comida
juan.eat();
juan.eat(); // juan agora está com fome (doente)

console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);