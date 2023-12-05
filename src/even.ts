import reducnumb from './reducnumb';
import sum from './sum';
import modulo from './modulo';


export default function even(suite: string) {
    let array = suite.split('');
    let reverseArr = array.reverse();
    const luhnarray: any = [];

    let i: number;
    for (i = 0; i < reverseArr.length; i +=1) {
        let numbA: number = parseInt(reverseArr[i]);
        if ( i == 0 || i == reverseArr.length - 2 ) {
            numbA = numbA;
        } else if (i%2 != 0) {
            let newNumbA: number;
            newNumbA = numbA * 2;
            if (newNumbA > 9) {
                numbA = reducnumb(newNumbA);
            }else { 
                numbA = newNumbA;
            }
        }
        luhnarray.push(numbA);
    }
    let add: number = sum(luhnarray);
    let isLuhn: any = modulo(add);
    return isLuhn;
}
