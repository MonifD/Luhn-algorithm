import even from './even';

export default function findKey(suite: any) {
    let newSuite: string;
    let i:number = 0;
    for (i; i<10; i+= 1) {
        newSuite = suite.concat(`${i}`);
        const testEven = even(newSuite);
        if (testEven == 'OK') {
            return i;
        }
    }
}