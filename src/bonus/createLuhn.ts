import findKey from "../findKey";

export default function createLuhn(suite) {
     let length : number;
     length = parseInt(suite);
     let numberToComplet: any = [];
     let i:number;
     let random: number;
     for (i = 0; i < length-1; i += 1) {
        random = Math.floor(Math.random() * 9);
        numberToComplet.push(random);
     }
     let number = numberToComplet.join('');
     let key = findKey(number);
     let newN;
     newN = number.concat(`${key}`);
     return newN;
}
