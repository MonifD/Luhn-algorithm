import even from './src/even';
import findKey from './src/findKey';
import createLuhn from './src/bonus/createLuhn';

const flag = process.argv[2];
const suite = process.argv[3];

function luhn(flag, suite) {
    if (flag == '-c') {
        console.log(even(suite));
    } else if (flag == '-f') {
        let test = even(suite);
        if (test == 'OK') {
            console.log('nothing to add. It is a Luhn code.');
        } else {
            console.log(findKey(suite));
        }
    } else if (flag == '-r') {
        console.log(createLuhn(suite));
    } else {
        console.log('flag or input is missing');
    }
}

luhn(flag, suite);